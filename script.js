// $('#b1 h1').textillate({ in: { effect: 'fadeIn' } });

gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


 let tl = gsap.timeline({
   scrollTrigger:{
     trigger: '#second',
     start: "top 90%",
     end: "+=300",
     scrub: 2,
     markers: false,
     scroller: '#main'
   }
 });
 tl.from('.z1', {
    //  opacity:1,
    duration: 20,
    onStart:function(){
        $('.z1').textillate({ in: { effect: 'fadeInUp' } });   
    }
 });
 tl.from('.z2', {
    opacity:0,
    duration: 100,
    // stagger:0.2,
    ease:Expo.easeIn,
    x:-150,
});


let tn = gsap.timeline({
  scrollTrigger:{
    trigger: '#forth',
    start: "top 90%",
    end: "+=200",
    scrub: 2,
    // markers: true,
    scroller: '#main'
  }
});
tn.from('.y1', {
  opacity:0,
  duration: 1,
  // stagger:0.2,
  ease:Expo.easeIn,
  y:150,
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

//CODE TO ANIMATE GALLERY
var initialval=document.querySelector('.c2').getBoundingClientRect().left
// console.log(initialval);
document.querySelector('#c1').addEventListener('scroll',function(){
    var newval= (document.querySelector('.c2').getBoundingClientRect().left)
    // console.log(newval)
    var dist=Math.floor(newval-initialval)
    var speed=Math.floor(dist*.35)
    initialval=newval
    console.log(speed)
    // document.querySelectorAll('.c2')[i].style.transform = 0;
        for(var i=0;i<9;i++){
        // document.querySelectorAll('.c2')[i].style.transform = 0;
    document.querySelectorAll('.c2')[i].style.transform = `skewX(${speed}deg)`;
    }

})

document.querySelector("#menu1").addEventListener('click',function(){
  document.querySelector("#side").style.left=0;
})

document.querySelector("#sr i").addEventListener('click',function(){
  document.querySelector("#side").style.left='-100%';
})



// var kuchtoh=document.querySelector(".x1").getBoundingClientRect()
console.log(document.querySelector(".x1 h1").getBoundingClientRect())
