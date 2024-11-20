'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});







const section1 =document.querySelector('#section--1');
////////////////////////////////////////////////////////////////
///             SMOOTH SCROLL IMPLEMENTATION
////////////////////////////////////////////////////////

// document.querySelectorAll('.nav__link').forEach((navlink)=>{
  
//   navlink.addEventListener('click',(e)=>{
//     e.preventDefault();
    
//     const id =navlink.getAttribute('href');
    
//     const section = document.querySelector(id);
    
//     section.scrollIntoView({behavior:'smooth'})
//   })
  
// })
// But we will do this using Event delegation
/*
1. add event listener to common parent
2. determine what element originated the event
*/


document.querySelector('.nav__links').addEventListener(
  'click',(e)=>{
    console.log(e.target);
    e.preventDefault();

    //matching stragety
    if(e.target.classList.contains('nav__link')){
      const id =e.target.getAttribute('href');
    
      const section = document.querySelector(id);
    
       section.scrollIntoView({behavior:'smooth'})
    }
    
  }
)


//TABBED COMPONENT
const tabsContainer =document.querySelector('.operations__tab-container');

const tabs =document.querySelectorAll('.operations__tab');

tabsContainer.addEventListener('click',(e)=>{
  //console.log(e.target.closet('.operations__tab'));
  const clicked = e.target.closest('.operations__tab');
  
  console.log(clicked);

  if(!clicked) return ;
  tabs.forEach(t=>{
    t.classList.remove('.operations__tab--active')
  })
  
  clicked.classList.add('.operations__tab--active')

  console.log(clicked.dataset.tab);
  
  //activate content
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('.operations__content--active')
  
  
})



//hover effect on navbar
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover',(e)=>{
  if(e.target.classList.contains('nav__link')){
    const link =e.target;
    const siblings= link.closest('.nav').querySelectorAll('.nav__link');
    const logo =link.closest('.nav').querySelector('img');

    
    siblings.forEach(el=>{
      if(el!== link) el.style.opacity = 0.5;
    })
    logo.style.opacity=0.5;
  }
})

nav.addEventListener('mouseout',(e)=>{
  if(e.target.classList.contains('nav__link')){
    const link =e.target;
    const siblings= link.closest('.nav').querySelectorAll('.nav__link');
    const logo =link.closest('.nav').querySelector('img');

    
    siblings.forEach(el=>{
      if(el!== link) el.style.opacity = 1;
    })
    logo.style.opacity=1;
  }
})

//INTERSECTION OBSERVER API
//make nav bar sticky

// const obsCallback = function(entries,observer){
//   // nav.classList.add('sticky')

//   entries.forEach(entry => 
//     console.log(entry)
    
//   )
// };
// const obsOptions = {
//   root:null,
//   threshold : [0,0.2],
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions);

// observer.observe(section1)


const header =document.querySelector('.header');

const stickyNav = function(entries){
  // nav.classList.add('sticky')
  
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting)
    nav.classList.add('sticky')
  else
    nav.classList.remove('sticky')
};
const obsOptions = {
  root:null,
  threshold : 0,
  rootMargin:'-90px'
}

const headerObserver = new IntersectionObserver(stickyNav,obsOptions);

headerObserver.observe(header)



//Reveal section
const allsections = document.querySelectorAll('.section');

const revealSection =function(entries,observer){
  
const [entry]=entries;

if(!entry.isIntersecting) return;

entry.target.classList.remove('section--hidden')

observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
});

allsections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})


//lazy load
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries,observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.src=entry.target.dataset.src;
  entry.target.addEventListener('load',()=>{
    entry.target.classList.remove('lazy-img');
  })
  

  observer.unobserve(entry.target);

}
const imgObserver =new IntersectionObserver(loadImg,{
  root:null,
  threshold:0,
  rootMargin:'-200px'
})


imgTargets.forEach(function(image){
  imgObserver.observe(image);
})





//SLider
const slides = document.querySelectorAll('.slide');
const sliderLeft = document.querySelector('.slider__btn--left');
const sliderRight = document.querySelector('.slider__btn--right');

const dots =document.querySelector('.dots');


let currSlide =0;
slides.forEach((slide,i) =>{

  slide.style.transform =`translateX(${100*i}%)`;
})


const moveSlide =()=>{
  slides.forEach((slide,i) =>{
    
    slide.style.transform =`translateX(${100*(i-currSlide)}%)`;
  })
}


const activateDot =(slideNum)=>{
  dots.querySelectorAll('.dots__dot').forEach((dot)=>{
    if(slideNum === Number(dot.dataset.slide)){
      dot.classList.add('dots__dot--active')
    }
    else{
      dot.classList.remove('dots__dot--active')
    }
  })

}

activateDot(currSlide);

sliderRight.addEventListener('click',()=>{
  currSlide= (currSlide + 1)%slides.length;

  moveSlide();
  activateDot(currSlide)
})
sliderLeft.addEventListener('click',()=>{
  if(currSlide<=0){
    currSlide = slides.length-1;
  }
  else
    currSlide--;
  
  moveSlide();
  activateDot(currSlide)
})


//dots for slide

slides.forEach((slide,i)=>{
  dots.insertAdjacentHTML('beforeend',
    `<button class='dots__dot' data-slide="${i}"></button>`
  )
})


dots.addEventListener('click',(e)=>{
  console.log(e.target.nodeName === 'BUTTON');
  if(e.target.nodeName === 'BUTTON'){
    currSlide = Number(e.target.dataset.slide)

    moveSlide();
    activateDot(currSlide)
  }
  
})





//Different laod events
window.addEventListener('beforeunload',(e)=>{
  e.preventDefault();
  console.log(e);
  e.returnValue ='';
})


//////////////////////////////////////////////////////////////////////
/////  DOM PRACTICE

/*
//tagname also updated if one of element is deleted
const allBTn =document.getElementsByTagName('button');



//creating and inserting elements
const msg = document.createElement('div');
//msg.setAttribute('');

msg.classList.add('cookie-message');

msg.innerHTML =
`We use cookied for improved functionality and analytics.<button class ='btn btn--close-cookie'>Got it!</button>`;

const header = document.querySelector('.header');
header.prepend(msg);

header.append(msg);

//clone node

header.append(msg.cloneNode(true));

header.after(msg);
header.before(msg);



//delete nodes
document.querySelector('.btn--close-cookie').addEventListener('click',()=>{
  //msg.remove();
  //msg.parentNode.removeChild(msg);
  msg.parentElement.removeChild(msg);
})


//Styles
msg.style.backgroundColor ='#37383d';
msg.style.width ='120%';

console.log(msg.style.color );
console.log(msg.style.backgroundColor);


//get properties used to displat element on page
console.log(getComputedStyle(msg));
console.log(getComputedStyle(msg).color);


//manipulate variables
document.documentElement.style.setProperty(
  '--color-primary','orangered'
);



//aattributes standard properties
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//non-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); //we will get value
console.log(logo.setAttribute('company','bankist')); //we will get value
console.log(logo);


//data attributes
console.log(logo.dataset.imageInfo);


//class
logo.classList.add('a','b','c','d','e');

logo.classList.remove('c','d');

logo.classList.toggle('a','')

logo.classList.contains('a');


*/

// const btnScrollTO = document.querySelector('.btn--scroll-to');

// const section1 =document.querySelector('#section--1');

// btnScrollTO.addEventListener('click',(e)=>{
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current X/Y : ',window.pageXOffset,window.pageYOffset);

//   console.log('Height/widht viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
  
//   //scrolling  old way
//   // window.scrollTo({left:s1coords.left+window.pageXOffset
//   //   ,top:s1coords.top + +window.pageYOffset,
//   //   behavior:'smooth',
//   // }
//   // )
  
//   //scrolling new way
//   section1.scrollIntoView({behavior:'smooth'})
// })




// //event  listening

// const h1 =document.querySelector('h1');

// const alerth1 = h1.addEventListener('mouseenter',()=>{
//   alert('Reading h1 sections');

//   h1.removeEventListener('mouseenter',alerth1);
// })

// // h1.onmouseenter = function(e){
// //   alert('Reading h1 sections old way');

// // }









////////////////////////////////////////////////
/// DOM TRAVERSING 


// const h1 =document.querySelector('h1');

// //going downward : child

// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes); // gives list of all child

// console.log(h1.children); // live collection of child

// h1.firstElementChild.style.color= "green";
// h1.lastElementChild.style.color= "red";


// //going upward : parents


// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background ='var(--gradient-secondary)';



// //Going sideways
// console.log(h1.previousElementSibling);

// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);





