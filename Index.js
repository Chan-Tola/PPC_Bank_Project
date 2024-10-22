// function on click 
// const clickSearch = document.getElementById("btnSerach");
// const searchBox = document.getElementById("searchBox");
// clickSearch.addEventListener("click" , function(){
//     searchBox.style.display = searchBox.style.display === "block"?"none":"block";
//     // if(clickSearch.clicked == true) {
//     //     searchBox.style.display = "block";
//     // }
//     // else {
//     //     searchBox.style.display = "none";
//     // }
// });

const   iconSearch = document.getElementById("iconsearch");
const   searching = document.getElementById("input");

iconSearch.addEventListener("click",function(){
    searching.style.display = searching.style.display === "block"?"none":"block";
})
const   ClickPc = document.getElementById("clickPc");
const   InputPc = document.getElementById("inputPc");

ClickPc.addEventListener("click",function(){
    InputPc.style.display = InputPc.style.display === "block"?"none":"block";
})


// function change image
function changeImgOnscroll () {
    const imageLogoBrand = document.querySelector(".logo-brand");
    const myLogoBrand = document.getElementById("myLogo");

    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    const scrollThreshold = windowHeight * 0.1;

    if( scrollY > scrollThreshold) {
        myLogoBrand.src = "IMG Scr/Logo/logo.svg";
    }
    
    else {
        myLogoBrand.src = "IMG Scr/Logo/logo-white.svg";
    }
}

window.addEventListener("scroll",changeImgOnscroll);