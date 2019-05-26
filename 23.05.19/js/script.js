
//praktika


// let requireds=document.querySelectorAll(".required");

// for(let i=0; i<requireds.length; i++){
//     requireds[i].addEventListener("blur",function(){
//         if(this.value==""){
//             var str=this.getAttribute("data-msg");
//             // console.log(str)
//             if(this.nextElementSiblingi==null){
//                 var small=alertText(str);
//                 this.parentNode.appendChild(small)
//             }
//         }else{
//             if(this.nextElementSiblingi!=null){
//             this.nextElementSiblingi.remove()
//         }
//     }
//     })
// }



// for (let i = 0; i < requireds.length; i++) {
//     requireds[i].addEventListener("keyup", function () {
//         var str = this.getAttribute("data-msg");
//         if (this.value != "") {
//             if (this.nextElementSibling != null) {
//                 this.nextElementSibling.remove()
//             }
//         } else {
//             if(this.nextElementSibling==null){
//             var small = alertText(str);
//             this.parentNode.appendChild(small)
//         }
//     }
//     })
// }




// function alertText(str){
//     var small=document.createElement("small");
//     small.classList.add("text-danger");
//     small.innerText=str;
//     return small
// }





// var form = document.querySelector("#registr");

// form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     for (let i = 0; i < requireds.length; i++) {
//         if (requireds[i].value == "") {
//             var str = requireds[i].getAttribute("data-msg");
//             if (requireds[i].nextElementSibling == null) {
//                 var small = alertText(str);
//                 requireds[i].parentNode.appendChild(small)
//             }
//             } else {
//                 if (requireds[i].nextElementSibling != null) {
//                     requireds[i].nextElementSibling.remove()
//                 }
//             }




//     }
// })



// let parol=document.querySelector("#shifre");

// // parol.addEventListener("focus",function(){
// //     console.log("focus olundu");
// // })


// parol.addEventListener("blur",function(){
//     // console.log("blur olundu")
//     if(this.value=="" || this.value.lentgh<"6"){
//         var str=this.getAttribute("data-msg")
//         // console.log(str)
//         if(this.nextElementSibling==null){
//             var small=alertText(str);
//            this.parentNode.appendChild(small);

//         }
//     }else{
//         if(this.nextElementSibling!=null){
//             this.nextElementSibling.remove()
//         }
//     }

// })

// function alertText(str){
//     var small=document.createElement("small");
//     small.classList.add("text-danger");
//     small.innerText=str;
//     return small
// }



//hell

// password = document.querySelector("#password");


// password.addEventListener("focus", function () {
//     console.log("focus olundu")
// })



// password.addEventListener("blur", function () {
//     // console.log("blur olundu")
//     if (this.value == "") {
//         var str = this.getAttribute("data-msg");
//         if (this.nextElementSibling == null) {
//             var small = dangerText(str);
//             this.parentNode.appendChild(small);
//         }


//     } else {
//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove()
//         }
//     }
// })

// password.addEventListener("keyup", function () {
//     var str = this.getAttribute("data-msg");
//     if (this.value!="") {
//        if(this.value.length>6){
//         if (this.nextElementSibling != null) {
//             this.nextElementSibling.remove()
//         }

//        }
//     } else {
//         var small = dangerText(str);
//         this.parentNode.appendChild(small);
//     }
// })

//esas hell buradi beraberlewdire bilmedim calisacam hell edim sabaha kimi

let requireds=document.querySelectorAll(".required");

for(let i=0; i<requireds.length; i++){
    requireds[i].addEventListener("blur", function () {
        // console.log("blur olundu")
        if (this.value == "") {
            var str = this.getAttribute("data-msg");
            if (this.nextElementSibling == null) {
                var small = dangerText(str);
                this.parentNode.appendChild(small);
            }
    
    
        } else {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove()
            }
        }
    })
}


for(let i=0; i<requireds.length; i++){
    requireds[i].addEventListener("keyup", function () {
        var str = this.getAttribute("data-msg");
        if (this.value!="") {
           if(this.value.length>6){
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove()
            }
    
           }
        } else {
            var small = dangerText(str);
            this.parentNode.appendChild(small);
        }
    })
}


function dangerText(str) {
    var small = document.createElement("small");
    small.classList.add("text-danger")
    small.innerText = str;

    return small;
}




var form=document.querySelector("#registr");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(i=0; i<requireds.length; i++){
        if (requireds[i].value == "") {
            var str = requireds[i].getAttribute("data-msg");
            if (requireds[i].nextElementSibling == null) {
                var small = dangerText(str);
                requireds[i].parentNode.appendChild(small);
            }
            
    
    
        } else {
            if (requireds[i].nextElementSibling != null) {
                requireds[i].nextElementSibling.remove()
            }
        }
    }
})

