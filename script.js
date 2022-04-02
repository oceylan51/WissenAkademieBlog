let sliders =$(".photo").toArray();
console.log(sliders);
let slideIndex = 0;

$(document).ready(function () {
    $("#prevSlide").click(function () {
        if (slideIndex == 0) {
            slideIndex = sliders.length
        }
        showSlide(--slideIndex);
    })
    $("#nextSlide").click(function () {
        if (slideIndex == sliders.length -1) {
            slideIndex = -1
        }
        showSlide(++slideIndex);
    })
})
function showSlide(x) {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.add("d-none");
    }
    sliders[x].classList.remove("d-none")
}
showSlide(slideIndex);