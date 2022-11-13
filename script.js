var tl = gsap.timeline();


tl.from(".imgg",{
   
    duration:1.6,
    stagger:.2,
    delay:0.4,
    opacity: 0,
    ease: Expo.easeInOut
})
tl.from("#navbar",{
    x:"100%",
    duration:1.6,
    stagger:.2,
    
    opacity: 0,
    ease: Expo.easeInOut
});
tl.from("#centerarea h2",{
   x:"100%",
    duration:1.6,
    stagger:.2,
    opacity: 0,
    ease: Expo.easeInOut
})
tl.from("#centerarea h3",{
    y:"100%",
    duration:1.6,
    stagger:.2,
    opacity: 0,
    ease: Expo.easeInOut
});

