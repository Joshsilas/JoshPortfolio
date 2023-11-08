
document.querySelector('.portfolio-piece').addEventListener('click', function() {
    document.querySelector('.enlarger').classList.toggle('expand');
});

document.querySelector('.portfolio-piece2').addEventListener('click', function() {
    document.querySelector('.enlarger2').classList.toggle('expand');
});


document.querySelector('.portfolio-piece3').addEventListener('click', function() {
    document.querySelector('.enlarger3').classList.toggle('expand');
});


// document.querySelectorAll('.portfolio-piece').forEach(portfolioPiece => {
//     portfolioPiece.addEventListener('click', function () {
//         console.log('clicked');
//         this.querySelector('.enlarger').classList.toggle('expand');
//     });
// });