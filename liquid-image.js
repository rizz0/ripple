var liquidImage = function(container, imgUrl) {
const imgLoader = new Image();
          imgLoader.addEventListener('load', function() {
          var rippleDemo = new RippleEffect({
        parent: container,      
        texture: imgUrl,
        intensity: 0.1,
        strength: 1.5,
        area: 1,
        waveSpeed: 0.001,
        hover: false,
        speedIn: 1.1,
        speedOut: 1,
        easing: 'Expo.easeOut',
    });
            container.style.opacity = '1';
            rippleDemo.start();
}, false);
imgLoader.src = imgUrl;
}