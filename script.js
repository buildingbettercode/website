console.log("hello")

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

const button = document.querySelector(".btn-toggle");
var icon = document.getElementById("icon")

// const moon = document.getElementsByClassName("moon")
// console.log(moon)
// moon.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     if (document.body.classList.contains("dark-mode")){
//         moon.src = "images/sun.png";
//     }else{
//         moon.src = "images/moon.png";
//     }
    
// });

function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    
}

// function hello() {
//     alert('Welcome!')
// }
// hello()

// console.log(hello)















const carouselImages = Array.from(document.getElementsByClassName("carousel-image"));

const startButton = document.querySelector(".controls-play")
const stopButton = document.querySelector(".controls-pause")
const leftButton = document.querySelector(".left")
const rightButton = document.querySelector(".right")


let currentImageIndex = 0;

function updateImageIndex(){
    let upperLimit = carouselImages.length - 1;

    if (currentImageIndex === upperLimit){
        currentImageIndex = 0;
    }else {
        currentImageIndex++
    }
};

function updateVisibilities(){
    updateImageIndex()
    carouselImages.forEach((element, index)=>{
        if (index === currentImageIndex) {
            element.classList.remove("img-hidden");
            element.classList.add("img-visible");
        } else {
            element.classList.remove("img-visible");
            element.classList.add("img-hidden");
        
        }
    })
}

let carouselInterval;

const startRunning = () => {
    carouselInterval = setInterval(updateVisibilities, 2500);
}

const stopRunning = () => {
    clearInterval(carouselInterval)
}

startButton.addEventListener("click", startRunning);

stopButton.addEventListener("click", stopRunning);


const pressLeft = () => {
    currentImageIndex = 0
}

leftButton.addEventListener("click", updateImageIndex);