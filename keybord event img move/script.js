var body = document.querySelector('body')
var img = document.querySelector('.img')

var X_axis = 0;
var Y_axis = 0;

body.addEventListener('keydown',function(dets){
    if (dets.code === 'ArrowRight' ){
        X_axis++
        img.style.left = X_axis +'%'
        img.style.transform = 'scaleX(1)'

    } else if(dets.code === 'ArrowLeft'){
        X_axis--
        img.style.left = X_axis + '%'
        img.style.transform = 'scaleX(-1)'
    }

    if (dets.code === 'ArrowUp' ){
        Y_axis--
        img.style.top =  Y_axis +'%'

    } else if(dets.code === 'ArrowDown'){
        Y_axis++
        img.style.top = Y_axis + '%'
    }

})