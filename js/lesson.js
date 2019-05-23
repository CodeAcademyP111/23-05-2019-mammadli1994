// let username = document.querySelector("#username");

// username.addEventListener("focus", function() {
//     console.log("focus olundu")
// })

// username.addEventListener("blur", function() {
//     if (this.value == "") {
//         var str = this.getAttribute("data-msg");
//         if (this.nextElementSibling == null) {
//             var small = alertText(str);
//             this.parentNode.appendChild(small)
//         }
//     } else {
//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove()
//         }
//     }

// })

// username.addEventListener("keyup", function() {
//     var str = this.getAttribute("data-msg");
//     if (this.value != "") {
//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove()
//         }
//     } else {
//         if (this.nextElementSibling == null) {
//             var small = alertText(str);
//             this.parentNode.appendChild(small)
//         }
//     }
// })

// var city = document.querySelector("#city");

// city.addEventListener("change", function() {
//     if (this.value == 2) {
//         this.parentNode.nextElementSibling.classList.remove("d-none")
//     } else {
//         this.parentNode.nextElementSibling.classList.add("d-none")
//     }
// })

let requireds = document.querySelectorAll(".required");

for (let i = 0; i < requireds.length; i++) {
    requireds[i].addEventListener("blur", function() {
        if (this.value == "") {
            var str = this.getAttribute("data-msg");
            if (this.nextElementSibling == null) {
                var small = alertText(str);
                this.parentNode.appendChild(small)
            }
        } else {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove()
            }
        }

    })
}

for (let i = 0; i < requireds.length; i++) {
    requireds[i].addEventListener("keyup", function() {
        var str = this.getAttribute("data-msg");
        if (this.value != "") {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove()
            }
        } else {
            if (this.nextElementSibling == null) {
                var small = alertText(str);
                this.parentNode.appendChild(small)
            }
        }
    })
}



function alertText(str) {
    var small = document.createElement("small");
    small.classList.add("text-danger");
    small.innerText = str;
    return small;
}

var form = document.querySelector("#registr");

form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    for (let i = 0; i < requireds.length; i++) {
        if (requireds[i].value == "") {
            var str = requireds[i].getAttribute("data-msg");
            if (requireds[i].nextElementSibling == null) {
                var small = alertText(str);
                requireds[i].parentNode.appendChild(small)
            }
        } else {
            if (requireds[i].nextElementSibling != null) {
                requireds[i].nextElementSibling.remove()
            }
        }
    }
})