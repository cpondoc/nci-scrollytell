var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#scene",
    duration: 730,
    offset: 50
})
    .setPin('#animation') 
    .addTo(controller); 

new ScrollMagic.Scene({
    triggerElement: "#scene2",
    duration: 565, 
    offset: 50 
})
    .setPin('#animation2') 
    .addTo(controller); 

new ScrollMagic.Scene({
    triggerElement: "#scene3",
    duration: 600, 
    offset: 50 
})
    .setPin('#animation3')
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#scene4",
    duration: 1000,
    offset: 50
})
    .setPin('#animation4')
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#scene5",
    duration: 400, 
    offset: 50
})
    .setPin('#animation5')
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#scene6",
    duration: 500,
    offset: 50
})
    .setPin('#animation6')
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#scene7",
    duration: 800,
    offset: 50
})
    .setPin('#animation7')
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#scene8",
    duration: 1650,
    offset: 50
})
    .setPin('#animation8')
    .addTo(controller);
