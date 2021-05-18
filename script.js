const carouselImages = Array.from(document.getElementsByClassName("carousel-image"));


let currentImageIndex = 0;

function updateImageIndex(){
    currentImageIndex++
};

function updateVisibilities(){
    console.log("UV")
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

updateVisibilities()

