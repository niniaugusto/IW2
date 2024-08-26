document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');

    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    };

    const gameLoop = () => {
        const pipePosition = pipe.getBoundingClientRect().left;
        const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
        }

        requestAnimationFrame(gameLoop);
    };

    document.addEventListener('keydown', jump);
    gameLoop();
});
