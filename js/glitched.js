

function positionEye(firstTime = false) {
    const headerImage = document.querySelector('.poster2'); // Adjust this selector if needed.
    const eye = document.querySelector('.eye');

    if (headerImage && eye) {
        const rect = headerImage.getBoundingClientRect();

        // Calculate position based on header image dimensions
        let initialTop = rect.top + window.scrollY + (rect.height * 0.33);
        let initialLeft = rect.left + (rect.width * 0.23);

        eye.style.position = 'fixed';
        eye.style.top = `${initialTop}px`;
        eye.style.left = `${initialLeft}px`;
        eye.style.transform = 'translate(-50%, -50%)';
        eye.style.zIndex = '10';

        if (firstTime) {
            const firstState = Flip.getState(eye);

            // Apply final styles for animation
            let finalTop = rect.top + window.scrollY + (rect.height * 0.58);
            let finalLeft = rect.left + (rect.width * 0.39);

            requestAnimationFrame(() => {
                eye.style.top = `${finalTop}px`;
                eye.style.left = `${finalLeft}px`;
                eye.style.transform = 'translate(-50%, -50%)'; // Adjust this as needed

                // Animate from the initial state to the final state
                Flip.from(firstState, {
                    duration: 1.5,
                    ease: "power3.out",
                    onComplete: () => console.log('Transition complete!')
                });
            });
        }
    }
}

window.addEventListener('load', () => positionEye());
window.addEventListener('resize', () => positionEye(true)); // Recalculate on resize

var changeState = function(state) {
    document.body.className = "body-state" + state;
    if (state === 2) {
        // Position and animate the eye when moving to state 2
        positionEye(true);
    }
};

document.querySelector('.button').addEventListener('click', () => {
    changeState(2);
});
