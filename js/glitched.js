
let hasScrolled = false; // Flag to check if the scroll function has already run

function fixEyeOnFirstScroll() {
    const eye = document.querySelector('.eye');
    const rect = eye.getBoundingClientRect(); // Get the eye's position relative to the viewport

    if (!hasScrolled) {
        // Apply fixed positioning with initial coordinates matched
        eye.style.position = 'fixed';
        eye.style.top = `${rect.top}px`;
        eye.style.left = `${rect.left}px`;
        eye.style.transform = ''; // Remove transform since it's no longer needed

        hasScrolled = true; // Set flag to prevent re-running
    }
}

window.addEventListener('scroll', fixEyeOnFirstScroll, { once: true }); // Use the `{ once: true }` option to only run this listener once


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
