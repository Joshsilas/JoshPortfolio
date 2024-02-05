
document.querySelectorAll('.portfolio-piece').forEach(portfolioPiece => {
    portfolioPiece.addEventListener('click', function (event) {
        this.querySelector('.enlarger').classList.toggle('expand');
    });
});


const githubLinks = document.querySelectorAll('.gitHubImage');

githubLinks.forEach(githubLink => {
    githubLink.addEventListener('click', function (event) {
        event.stopPropagation();
        console.log('GitHub link clicked');
    })
})


        function toggleText(event) {
            event.stopPropagation();
            var additionalText = document.querySelector('.additional-text-container');
            additionalText.style.display = (additionalText.style.display === 'none' || additionalText.style.display === '') ? 'block' : 'none';
        }





