"use strict";
//modal window and login 
const cover = document.querySelector(".cover");
cover.classList.add("hide");

const formLogin = document.querySelector(".modalwindow");
formLogin.classList.add("hide");

const btnLogin = document.querySelector(".header__menu--open-account");

const btnGetStarted = document.querySelector(".footer__first button");
btnLogin.addEventListener("click",()=> 
{
    formLogin.classList.remove("hide");
    cover.classList.remove("hide");
});

btnGetStarted.addEventListener("click",function()
{
    formLogin.classList.remove("hide");
    cover.classList.remove("hide");
});

cover.addEventListener("click",function()
{
    this.classList.add("hide");
    formLogin.classList.add("hide");
});

document.addEventListener("keydown",function(e)
{
    if(e.key==="Escape" && !formLogin.classList.contains("hide"))
    {
        formLogin.classList.add("hide");
        cover.classList.add("hide");
    }
});
//

//common methods

//to be used by the links scrolling to a particular section
// function scroll(section)
// {
//     section.scrollIntoView({behavior:"smooth"});
// }

//


//header elements
const header = document.querySelector(".header");

const logo = document.querySelector(".header__logo img");
const headerOptions = document.querySelectorAll(".header__menu a");
const btnOpenAccount = document.querySelector(".header__menu--open-account");

//mouse enter mouse leave event of header elements
/*
headerOptions.forEach(function(option)
{
    option.addEventListener("mouseenter", function()
    {
        headerOptions.forEach(option=>option.classList.add("blur"));
        btnOpenAccount.classList.add("blur");
        logo.classList.add("blur");
        this.classList.remove("blur");
    });

    option.addEventListener("mouseleave", function()
    {
        headerOptions.forEach(option=>option.classList.remove("blur"));
        logo.classList.remove("blur");
        btnOpenAccount.classList.remove("blur");


    });

   
    
});


btnOpenAccount.addEventListener("mouseenter",function()
{
    headerOptions.forEach(option=>option.classList.add("blur"));
    logo.classList.add("blur");
    this.classList.remove("blur");
});

btnOpenAccount.addEventListener("mouseleave", function()
{
    headerOptions.forEach(option=>option.classList.remove("blur"));
    logo.classList.remove("blur");

});
*/
//Implementing mouseover and mouseout event on header options
function hoverEffect(e)
{       
  

    if(e.target.tagName==="A" || e.target.tagName==="BUTTON")
    {
        const hovered = e.target.closest(".header__menu--option");
        if(this)
        {
            [...hovered.parentElement.children].forEach(element=>element.classList.remove("blur"));

            logo.classList.remove("blur");

            return;
        }

        [...hovered.parentElement.children].forEach(element=>element.classList.add("blur"));
        hovered.classList.remove("blur");
        logo.classList.add("blur");


    }
}
header.addEventListener("mouseover",hoverEffect.bind());

header.addEventListener("mouseout",hoverEffect.bind(true));

//







const headerLinks = document.querySelector(".header__menu");
headerLinks.addEventListener("click",function(e)
{   
    if(e.target.tagName==="A")
    {
            e.preventDefault();   
            document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"});
    }
   
});


const linkLearnMore = document.querySelector(".main__section--first__info__link");


linkLearnMore.addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelector("#main__linebreak--first").scrollIntoView({behavior:"smooth",block:"start"});
});
//


const aboveTheFoldSection = document.querySelector(".main__section--first");

let headerObserver = new IntersectionObserver(function(entries,obser)
{       

    if(entries[0].isIntersecting)
    {
        header.classList.remove("sticky");
    
    }
    else
    {
        header.classList.add("sticky");

    }

},{
    root:null,
    threshold:0,
    rootMargin:"80px 0px 0px 0px"
});

headerObserver.observe(aboveTheFoldSection);

//







//Operations 
const labelHeading = document.querySelector(".information .heading");

const labelContent = document.querySelector(".information .content");

const btnsOperations = document.querySelectorAll("#operations button");


const arrOperationsInformation = [
    {
        "heading":"Tranfser money to anyone, instantly! No fees, no BS.",
        "content": "Send your funds at the speed of thought, where distance is just a number. Money in motion, in the blink of an eye, our transfers don't let time fly by. In the world of finance, we're the swift, not the snail. Transfer money quickly, without fail. From your wallet to theirs, in the blink of an eye, with our service, your money will always fly high."

    },

    {
        "heading":"Buy a home or make your dreams come true, with instant loans.",
        "content": "Turn your dream home into a reality with our unbeatable home loans! Discover the perfect mortgage solution that fits your budget and aspirations.                                           Our experienced team is ready to guide you through every step of the home loan process."
    },
    {
        "heading":"No longer need your account? No problem! Close it instantly.",
        "content":"Closing accounts with a click, no more financial tricks. Swift and seamless, say goodbye to the past, your account closed instantly, and it's done at last. Cut the ties, break free, with our instant account closure, it's as easy as can be. No long goodbyes, just a quick farewell, with us, account closure is a breeze to dispel."
    }
];

labelContent.textContent = arrOperationsInformation[0].content;
labelHeading.textContent = arrOperationsInformation[0].heading;
btnsOperations[0].classList.add("btnOperationsUpwardEffect");


const buttons = document.querySelector("#operations .buttons");
buttons.addEventListener("click",function(e)
{   

    //It is required to make sure we always get the button, as we want to target the button. Even if our button contained any span or any other child, then clicking on that child might have not resulted in button, so we use closest() method to get our button. Also it handles if we click outside of the button, it is possible at we may clicked on the container itself, then this is going to result in null, which then may result in unexpected and undesired manner.
    const clicked = e.target.closest("button.btn-operations");
    console.log(clicked);

    //We can handle that null here.
//It is also called Guard Clause.   
    if(!clicked)
    {
        return;
    }
    btnsOperations.forEach(function(button)
    {   
        if(e.target===button)
        {
                e.target.classList.toggle("btnOperationsUpwardEffect");
            }
            else
            {

                button.classList.remove("btnOperationsUpwardEffect");

            }
        });

         //creating the dynamic information 
       
         labelHeading.textContent="";
         labelContent.textContent="";
 
         let content,heading;
 
         if(e.target.classList.contains("transfer"))
         {
             content = arrOperationsInformation[0].content;
             heading = arrOperationsInformation[0].heading;
 
         }
         else if(e.target.classList.contains("loan"))
         {
             content = arrOperationsInformation[1].content;
             heading = arrOperationsInformation[1].heading;
 
         }
         else if(e.target.classList.contains("close"))
         {
             content = arrOperationsInformation[2].content;
             heading = arrOperationsInformation[2].heading;
             
         }
 
         labelHeading.textContent = heading;
         labelContent.textContent = content;
 
 
 
});

//
const slides = document.querySelectorAll(".review");

const leftArrow = document.querySelector("#arrow--left");
const rightArrow = document.querySelector("#arrow--right");

const btnsReviews = document.querySelectorAll(".reviews-section .buttons button");

btnsReviews.forEach(btn=>btn.addEventListener("click",function()
{
    btnsReviews.forEach(btn=>btn.classList.remove("btnsReviewSelected"));
    this.classList.add("btnsReviewSelected");
    

}));
//

//Building Slider Component :
let currSlide = 0;
let maxSlides = slides.length;

function activateDot(index)
{   
    btnsReviews.forEach(btn=>btn.classList.remove("btnsReviewSelected"));
    document.querySelector(`.reviews-section .buttons button[data-slide="${index}"]`).classList.add("btnsReviewSelected");

}
function goToSlide(currentSlide)
{
    slides.forEach((slide,index)=>
    {
        slide.style.transform=`translateX(${100 * (index - currentSlide)}%)`;
        slide.style.transition="transform 1s";

    });
}

goToSlide(0);
activateDot(0);


function nextSlide()
{
    if(currSlide===(maxSlides-1))
    {
        currSlide = 0;
    }
    else
    {
        currSlide++;

    }
    goToSlide(currSlide);
    activateDot(currSlide);
}

function previousSlide()
{
    if(currSlide===0)
    {
        currSlide =maxSlides-1;
    }
    else
    {
        currSlide--;

    }
    goToSlide(currSlide);
    activateDot(currSlide);

}

rightArrow.addEventListener("click",nextSlide);


leftArrow.addEventListener("click",previousSlide);

//
// We handle keyboard events right at the document.
document.addEventListener("keydown",function(e)
{
    if(e.key==="ArrowLeft")
    {
        previousSlide();
    }
    else if(e.key==="ArrowRight")
    {
        nextSlide();

    }
});




//Providing functionality to the slider bottom buttons 
const sliderButtons = document.querySelectorAll(".reviews-section .buttons button");

const sliderButtonsContainer = document.querySelector(".reviews-section .buttons");


sliderButtonsContainer.addEventListener("click",function(e)
{   
    if(e.target.tagName!=="BUTTON")
    {
        return;
    }

    goToSlide(e.target.dataset.slide);


});



//
const images = document.querySelectorAll(".lazy-image");

const loadingObserver = new IntersectionObserver(function(entries,observer)
{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting)
        {   
            //Js finding the src, means finding that an image is being loaded, fires an load event behind the scene. This load event is just like any other event, so we can attach that to our element.
            //By the time the loading of an image is complete then this load event is fired.
            entry.target.src = entry.target.dataset.src;

            //This kind of funtionality is usaully taken care for the slow net or devices. But as we are already have faster cpu and internet, so it is not that important.
            entry.target.addEventListener("load",function()
            {
                entry.target.classList.add("loaded-image");
            });
            observer.unobserve(entry.target);
        }
        
    });
},
{   
    threshold:0.8,
    rootMargin:"0px 0px -180px 0px"


});

images.forEach((img)=>
{
    loadingObserver.observe(img);
});

const sectionsHidden = document.querySelectorAll(".section-hidden");

const sectionObserver = new IntersectionObserver(function(entries, observer)
{
    entries.forEach((entry)=>
    {   

        if(entry.isIntersecting)
        {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
        }
       
    });
},
{
    root:null,
    threshold:0,
});

sectionsHidden.forEach((section)=>sectionObserver.observe(section)); 

window.addEventListener("beforeunload", function (e) {

    e.preventDefault();
    console.log("hemmllo");
});
