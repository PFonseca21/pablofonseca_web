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
