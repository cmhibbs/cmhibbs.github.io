let Croquis = document.querySelector("#Croquis");
Croquis.addEventListener('click', function(){
    console.log("this is gay");
    let imgs = document.querySelectorAll('.test');
    for(let img of imgs){
        if(img.classList.contains("Hide")){
            img.classList.remove("Hide");
            img.classList.add("Show");
            console.log("this is gay");
        } else {
            img.classList.add("Hide");
            img.classList.remove("Show");  
            console.log("test");
        }
    }
})

let main = document.querySelector("#main");
let croq = document.querySelector("#croq");
let port = document.querySelector("#portfolio");
let final = document.querySelector("#final");
document.querySelector("#homeBTN").addEventListener('click', function(){
    console.log("home");
    main.classList.add("Show");
    main.classList.remove("Hide");
    croq.classList.remove("Show");
    croq.classList.add("Hide");
    port.classList.remove("divShow");
    port.classList.add("Hide");
    final.classList.remove("Show");
    final.classList.add("Hide");
})

document.querySelector("#croquisBTN").addEventListener('click', function(){
    console.log("croq");
    croq.classList.add("Show");
    croq.classList.remove("Hide");
    main.classList.remove("Show");
    main.classList.add("Hide");
    port.classList.remove("divShow");
    port.classList.add("Hide");
    final.classList.remove("Show");
    final.classList.add("Hide");
})

document.querySelector("#portfolioBTN").addEventListener('click', function(){
    console.log("protfolio");
    port.classList.add("divShow");
    port.classList.remove("Hide");
    main.classList.remove("Show");
    main.classList.add("Hide");
    croq.classList.remove("divShow");
    croq.classList.add("Hide");
    final.classList.remove("Show");
    final.classList.add("Hide");
})

document.querySelector("#finalBTN").addEventListener('click', function(){
    console.log("final");
    final.classList.add("divShow");
    final.classList.remove("Hide");
    port.classList.remove("divShow");
    port.classList.add("Hide");
    main.classList.remove("Show");
    main.classList.add("Hide");
    croq.classList.remove("divShow");
    croq.classList.add("Hide");
})