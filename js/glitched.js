// Function to position the eye element responsively and only once
function positionEye(firstTime = false) {
    const headerImage = document.querySelector('.poster2'); // Use the actual selector for the header image
    const eye = document.querySelector('.eye');
    if (headerImage && eye) {
        const rect = headerImage.getBoundingClientRect();

        // Calculate and set position based on percentages
        eye.style.position = 'fixed';
        eye.style.top = `${rect.top + (rect.height * (33 / 100))}px`; // Top position percentage
        eye.style.right = `${rect.left + (rect.width * (23 / 100))}px`; // Left position percentage
        eye.style.transform = 'translate(-50%, -50%)';
        eye.style.zIndex = '10';

        // If first time, capture state and prepare for animation
        if (firstTime) {
            const firstState = Flip.getState(eye);

            // Delay the setting of final styles to allow for animation
            requestAnimationFrame(() => {
                // Apply final styles as specified in changeState
                eye.style.top = `${rect.top + (rect.height * (58 / 100))}px`;
                eye.style.right = `${rect.left + (rect.width * (39 / 100))}px`;
                eye.style.left = 'auto'; // Resetting left when using right
                eye.style.transform = 'translate(0, 0)';

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

// Change state function revised to use positionEye for setting up initial position
var changeState = function(state) {
    document.body.className = "body-state" + state;

    // Trigger position setup and animation only when changing to state 2
    if (state === 2) {
        positionEye(true); // Pass true to indicate the first-time setup for animation
    }
};

// Add event listeners for load and resize to handle responsive positioning
window.addEventListener('load', () => positionEye());
window.addEventListener('resize', () => positionEye());
window.addEventListener('DOMContentLoaded', () => positionEye());
