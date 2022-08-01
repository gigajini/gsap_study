//gsap.registerPlugin(InertiaPlugin);

Draggable.create(".box", {
    type:"x,y",
    bounds: window,
    inertia: true
})

//씨앗 움직이기

let seed = document.queryCommandValue('.seed')

seed.addEventListener('click', function(){
    console.log(123);
});

seed.onmousedown = function(event) {

    let shiftX = event.clientX - seed.getBoundingClientRect().left;
    let shiftY = event.clientY - seed.getBoundingClientRect().top;
  
    seed.style.position = 'absolute';
    seed.style.zIndex = 1000;
    document.body.append(seed);
  
    moveAt(event.pageX, event.pageY);
  
    // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    // 공을 이동합니다.
    function moveAt(pageX, pageY) {
        seed.style.left = pageX - shiftX + 'px';
        seed.style.top = pageY - shiftY + 'px';

        console.log(eed.style.left);
    }

};
