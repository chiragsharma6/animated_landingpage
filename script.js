function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    

    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}
locomotiveAnimation()

function navbaranimation(){
    gsap.to("#nav-part1 svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true,
        }
        })
        
        gsap.to("#nav-part2 #links",{
            transform:"translateY(-100%)",
            opacity:0,
            scrollTrigger:{
                trigger:"#page1",
                scroller:"#main",
                start:"top 0",
                end:"top -5%",
                scrub:1,
            }
            })
        
}
navbaranimation()


function imgconAnimation(){
    var imgcon = document.querySelector("#img-container");
    var playbtn = document.querySelector("#play");
    imgcon.addEventListener("mouseenter" , function(){
        // playbtn.style.opacity=1;
        // playbtn.style.scale=1;
    
        gsap.to(playbtn,{
            opacity:1,
            scale:1,
        })
    })
    imgcon.addEventListener("mouseleave" , function(){
    
        gsap.to(playbtn,{
            opacity:0,
            scale:0,
        })
    })
    
    imgcon.addEventListener("mousemove" , function(dets){
    
        gsap.to(playbtn,{
            left:dets.x,
            top:dets.y,
            
        })
    })
}
imgconAnimation();

function loadingAnimation(){

    gsap.from("#page1 h1",{
        y:100,
        delay:0.5,
        opacity:0,
        duration:0.5,
         stagger:0.3,
         scrub:1,
    
    })
    gsap.from("#page1 #img",{
        y:50,
        delay:0.5,
        opacity:0,
        duration:0.5,
         stagger:0.3,
         scrub:1,
    
    })

}
loadingAnimation()



function mousechild(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(1)',
        })
    })
    
    document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    })
    
    
    
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(1)',
        })
    })
    
    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    })
}
mousechild()








function mousechild1(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    document.querySelector("#img1").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(1)',
        })
    })
    
    document.querySelector("#img1").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    })
    
    
    
    document.querySelector("#img2").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(1)',
        })
    })
    
    document.querySelector("#img2").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    })
}
mousechild1()



function mousechild2(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    document.querySelector("#bestshampoo").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(1)',
        })
    })
    
    document.querySelector("#bestshampoo").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    })
    
    
    
    
}
mousechild2()