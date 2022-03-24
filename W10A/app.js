// function styleP(){
//     let p = document.getElementById("secondp").querySelector;
// let pStyle = p.style;
// console.log(pStyle);
// pStyle.backgroundColor = "bisque";
// //document.querySelector(".firstp").style.fontsize = "10em";
// }

document.querySelector(".firstp").style.fontSize = "3em";
document.getElementById("secondp").style.backgroundColor = "aqua";

var allPTags = document.querySelectorAll("p");
for (var i=0; i<allPTags.length; i++){
    allPTags[0].innerText = "Hello Mark";
}

var classp = document.getElementsByClassName("firstp");
for(var i=0; i< classp.length; i++) {
classp[1].style.backgroundColor = "pink";
} 

var btn = document.createElement("button");
btn.innerHTML = "Click me";
document.body.appendChild(btn);

function addClass(className){
    let dropddown = document.getElementById("list");
    dropddown.classList.add(className);
}
function styleP(){
    var element =
    document.getElementById("list");
    element.classList.remove("style");
}
function styleP(){
    var element = document.getElementById("list");
    element.classList.toggle("style");
}

