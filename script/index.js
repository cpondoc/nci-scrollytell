var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#scene",
    duration: 730, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

    // create a scene
new ScrollMagic.Scene({
    triggerElement: "#scene2",
    duration: 565, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation2') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#scene3",
    duration: 600, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation3') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#scene4",
    duration: 1000, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation4') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#scene5",
    duration: 400, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation5') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#scene6",
    duration: 500, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation6') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#scene7",
    duration: 800, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation7') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
    triggerElement: "#scene8",
    duration: 1650, // the scene should last for a scroll distance of 100px
    offset: 50 // start this scene after scrolling for 50px
})
    .setPin('#animation8') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller