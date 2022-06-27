//gsap.registerPlugin(InertiaPlugin);

Draggable.create(".box", {
    type:"x,y",
    bounds: window,
    inertia: true
})

