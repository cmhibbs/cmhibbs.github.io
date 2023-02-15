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
document.querySelector("#homeBTN").addEventListener('click', function(){
    console.log("home");
    main.classList.add("Show");
    main.classList.remove("Hide");
    croq.classList.remove("divShow");
    croq.classList.add("Hide");
})

document.querySelector("#croquisBTN").addEventListener('click', function(){
    console.log("croq");
    croq.classList.add("divShow");
    croq.classList.remove("Hide");
    main.classList.remove("Show");
    main.classList.add("Hide");
})