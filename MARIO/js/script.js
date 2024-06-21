$(document).ready(function() {
    const mario = $('.mario');
    const pipe = $('.pipe');

    const jump = () => {
        mario.addClass('jump');
        setTimeout(() => {
            mario.removeClass('jump');
        }, 500);
    };

    const loop = setInterval(() => {
        const pipePosition = pipe.offset().left;
        const marioPosition = parseInt(mario.css('bottom'));
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.css('animation', 'none');
            pipe.css('left', `${pipePosition}px`);
            mario.css('animation', 'none');
            mario.css('bottom', `${marioPosition}px`);

            mario.attr('src', 'img/game-over.png');
            mario.css('width', '75px');
            mario.css('marginLeft', '50px');
        }
    }, 10);

    $(document).keydown(jump);
});
