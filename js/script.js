var main = document.querySelector(".main");
var move = document.querySelector(".move");

var top_p = 0;
var left_p = 0;
var main_height = main.offsetHeight - 2;
var main_width = main.offsetWidth - 2;
var move_height = move.offsetHeight;
var move_width = move.offsetWidth;
document.body.addEventListener("keyup", function(ev) {
    // console.log(ev.which)
    //sol
    if (ev.which == 37 && left_p > 0) {
        left_p -= 10;
    }
    //yuxari
    if (ev.which == 38 && top_p > 0) {
        top_p -= 10;
    }
    //sag
    if (ev.which == 39 && left_p < main_width - move_width) {
        left_p += 10;
    }

    //ashagi
    if (ev.which == 40 && top_p < main_height - move_height) {
        top_p += 10;
    }

    move.style.left = left_p + "px";
    move.style.top = top_p + "px";
})