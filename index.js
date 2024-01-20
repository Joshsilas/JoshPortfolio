
document.querySelectorAll('.portfolio-piece').forEach(portfolioPiece => {
    portfolioPiece.addEventListener('click', function () {
        this.querySelector('.enlarger').classList.toggle('expand');
    });
});

    function toggleText(event) {
    event.stopPropagation();
    var additionalText = document.querySelector('.additional-text-container');
    additionalText.style.display = (additionalText.style.display === 'none' || additionalText.style.display === '') ? 'block' : 'none';
}

    function stopPropagation(event) {
    event.stopPropagation();
}

