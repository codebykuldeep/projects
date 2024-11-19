const sliderLeft =document.querySelector('.slider-left');
const sliderRight =document.querySelector('.slider-right');


const carousel = document.querySelector('.product-list');
const productCard =document.querySelector('.product-container').scrollWidth
let isDragging = false, startX , startScrollLeft;

const buttons =document.querySelectorAll('button');
const card =document.querySelector('.product-container').offsetWidth;//370;//carousel.querySelector('.card').offsetWidth || ;

console.log(card);


// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         console.log(button.id);
        
//         carousel.scrollLeft += button.id === 'left' ? -card: card;
//     })
// })

sliderLeft.addEventListener('click',()=>{
    console.log(window.screen.width/3);
    
    carousel.scrollLeft +=  -card;
})
sliderRight.addEventListener('click',()=>{
    console.log('clicked');
    
    carousel.scrollLeft += card;
})


const dragStart =(e) =>{
    isDragging =true;


    //record the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
     
}

const dragging = (e) =>{
    if(!isDragging) return;
    console.log(e.pageX);
    carousel.scrollLeft = startScrollLeft - (e.pageX -startX);
    
    
}


const dragStop =()=>{
    isDragging= false;

}

carousel.addEventListener('mousemove',dragging);
carousel.addEventListener('mousedown',dragStart);


document.addEventListener('mouseup',dragStop);
















//TESTOMONIAL SLIDER
let currentSlide = 1;
let reviewSlideArray =document.querySelectorAll('.review-data');
let totalSlide = reviewSlideArray.length;


reviewSlideArray.forEach((slide,index)=>{
    slide.style.transform =`translateX(${index*200}%)`
})
const [reviewLeftBtn ,reviewRightBtn] =document.querySelectorAll('.testimonial-btn')

reviewRightBtn.addEventListener('click',()=>{
    if(currentSlide+1>totalSlide){
        reviewSlideArray.forEach((slide,index)=>{
            slide.style.transform =`translateX(${index*200}%)`
        })
        currentSlide =1;
        return;
    }

    reviewSlideArray[currentSlide-1].style.transform = `translateX(${currentSlide*-200}%)`;
    currentSlide+=1;
    reviewSlideArray[currentSlide-1].style.transform = `translateX(${0}%)`;
})

reviewLeftBtn.addEventListener('click',()=>{
    if(currentSlide-1 === 0){
        reviewSlideArray.forEach((slide,index)=>{
            slide.style.transform =`translateX(${(totalSlide-index -1)*200}%)`
        })
        currentSlide =totalSlide;
        return;
    }

    reviewSlideArray[currentSlide-1].style.transform = `translateX(${currentSlide*200}%)`;
    currentSlide-=1;
    reviewSlideArray[currentSlide-1].style.transform = `translateX(${0}%)`;
})