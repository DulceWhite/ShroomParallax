//Photo Site parallax
const parallax = document.getElementById(`parallax`);

window.addEventListener(`scroll`, function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset* .7 + `px`;
})

