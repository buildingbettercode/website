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

// function hello() {
//     alert('Welcome!')
// }
// hello()

// console.log(hello)















// const carouselImages = Array.from(document.getElementsByClassName("carousel-image"));

// const startButton = document.querySelector(".controls-play")
// const stopButton = document.querySelector(".controls-pause")
// const leftButton = document.querySelector(".left")
// const rightButton = document.querySelector(".right")


// let currentImageIndex = 0;

// function updateImageIndex(){
//     let upperLimit = carouselImages.length - 1;

//     if (currentImageIndex === upperLimit){
//         currentImageIndex = 0;
//     }else {
//         currentImageIndex++
//     }
// };

// function updateVisibilities(){
//     updateImageIndex()
//     carouselImages.forEach((element, index)=>{
//         if (index === currentImageIndex) {
//             element.classList.remove("img-hidden");
//             element.classList.add("img-visible");
//         } else {
//             element.classList.remove("img-visible");
//             element.classList.add("img-hidden");
        
//         }
//     })
// }

// let carouselInterval;

// const startRunning = () => {
//     carouselInterval = setInterval(updateVisibilities, 2500);
// }

// const stopRunning = () => {
//     clearInterval(carouselInterval)
// }

// startButton.addEventListener("click", startRunning);

// stopButton.addEventListener("click", stopRunning);


// const pressLeft = () => {
//     currentImageIndex = 0
// }

// leftButton.addEventListener("click", updateImageIndex);


