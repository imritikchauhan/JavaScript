var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from(".nav.bar", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".bounding-elm", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
    to(".footer-right", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        ".mouse-circle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale()`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".mouse-circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".boxes").forEach(function (boxes) {
  var rotate = 0;
  var diffrot = 0;

  boxes.addEventListener("mouseleave", function (dets) {
    gsap.to(boxes.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  boxes.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - boxes.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(boxes.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});







































// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

// let main  = document.querySelector(".main") //select the box
// let crser = document.querySelector(".mouse-circle")
// // console.log(crser);
// // console.log(main);
//  main.addEventListener("mousemove",function(event){
//     // console.log(event);
//     let x = event.x;
//     let y = event.y;
//     // console.log(`value of x is ${x}`);
//     // console.log(`value of y is ${y}`);
//     crser.style.left = `${x}px`;
//     crser.style.top = `${y}px`;
//  });

//  var imges = document.querySelectorAll(".boxes");

// //  console.log(imges);
// imges.forEach((dets)=>{
//     dets.addEventListener("mouseenter",function(x){
//         dets.childNodes[1].style.display="block";
        
//     })
//     dets.addEventListener("mousemove",(x)=>{
//         dets.childNodes[1].style.left=`${x.x}px`; 
//         // dets.childNodes[1].style.left=`${x.y}px`;    

//     })
//     dets.addEventListener("mouseleave",()=>{
//         dets.childNodes[1].style.display="none";
//     })
// });

// document.querySelectorAll(".boxes").forEach(function (boxes) {
//     var rotate = 0;
//     var diffrot = 0;
  
//     boxes.addEventListener("mouseleave", function (dets) {
//       gsap.to(boxes.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//       });
//     });
//     document.querySelectorAll(".boxes").forEach(function (boxes) {
//         var rotate = 0;
//         var diffrot = 0;
      
//         boxes.addEventListener("mouseleave", function (dets) {
//           gsap.to(boxes.querySelector("img"), {
//             opacity: 0,
//             ease: Power3,
//             duration: 0.5,
//           });
//         });
// });
// })