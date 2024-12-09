const timeline_one = gsap.timeline({
    scrollTrigger: {
        trigger: "#main", // markers:true,
        start: "38% 50%", end: "100% 50%", scrub: 2, pin: true
    }
});
timeline_one
    .to(".text", {
        top: "0",
    }, 'a')
    .to("#card-one", {
        top: "35%",
    }, 'a')
    .to("#card-two", {
        top: "130%"
    }, 'a')
    .to("#card-two", {
        top: "42%"
    }, 'b')
    .to("#card-one", {
        width: "65%", height: "65vh"
    }, 'b')
    .to("#card-three", {
        top: "130%"
    }, 'b')
    .to("#card-three", {
        top: "50%"
    }, 'c')
    .to("#card-two", {
        width: "70%", height: "70vh"
    }, 'c')


window.addEventListener('mousemove', function (event) {
    gsap.to('#cursor', {
        x: event.x, y: event.y, ease: 'back.out', autoAlpha: 1, duration: 0.2
    });
});
