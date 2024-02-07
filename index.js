
document.querySelectorAll('.portfolio-piece').forEach(portfolioPiece => {
    portfolioPiece.addEventListener('click', function (event) {
        const isExpanded = this.querySelector('.enlarger').classList.contains('expand');
        const otherExpanders = document.querySelectorAll('.enlarger.expand');
        if (otherExpanders.length > 0 && !isExpanded) {
            return;
        }
        this.querySelector('.enlarger').classList.toggle('expand');

        const additionalText = this.querySelector('.expanded-info');
        additionalText.style.display = isExpanded ? 'none' : 'block';

        const portfolioImageDisappear = this.querySelector('.portfolio-image-disappear');
        portfolioImageDisappear.style.display = isExpanded ? 'block' : 'none';

        const portfolioTextDisappear = this.querySelectorAll('.portfolio-text-disappear');
        portfolioTextDisappear.forEach(element => {
            element.style.display = isExpanded ? 'block' : 'none';
        });


        const githubLinks = document.querySelectorAll('.gitHubImage');

        githubLinks.forEach(githubLink => {
            githubLink.addEventListener('click', function (event) {
                event.stopPropagation();
                console.log('GitHub link clicked');
            })
        })
    })
})


        // function toggleText(event) {
        //     event.stopPropagation();
        //     let additionalText = document.querySelector('.expanded-info');
        //     additionalText.style.display = (additionalText.style.display === 'none' || additionalText.style.display === '') ? 'block' : 'none';
        // }





