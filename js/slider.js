var slider = document.querySelector("#slider");
var right = document.querySelector(".right");
var left = document.querySelector(".left");

right.addEventListener("click", rightFun);
left.addEventListener("click", leftFun);

document.body.addEventListener("keyup", function(e) {
    if (e.which == 39) {
        rightFun();
    }
    if (e.which == 37) {
        leftFun();
    }
})


function rightFun() {
    // console.log(slider.children[0])
    var active = document.querySelector(".active");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }
}

function leftFun() {
    // console.log(slider.children[0])
    var active = document.querySelector(".active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        var count = slider.children[0].childElementCount;
        slider.children[0].children[count - 1].classList.add("active");
        active.classList.remove("active");
    }

}