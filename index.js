
document.querySelectorAll('.portfolio-piece').forEach(portfolioPiece => {
    portfolioPiece.addEventListener('click', function () {
        this.querySelector('.enlarger').classList.toggle('expand');
        console.log('clicked')
    });
});


