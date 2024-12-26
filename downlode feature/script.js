var prog = document.querySelector(".prog");
var h1 = document.querySelector("h1");
var btn = document.querySelector("button");

var num = 0;
var num2 =  Math.floor(Math.random()*100);

btn.addEventListener('click', function(){
  var limit = setInterval(function(){
            num++;
            h1.innerHTML = num +'%';
            prog.style.width = num+'%';
    }, num2);

    setTimeout(function(){
        clearInterval(limit);
        btn.innerHTML = "Downloded";
        btn.style.backgroundColor = "gray";
        btn.style.opacity = "0.3";
        btn.style.pointerEvents = "none";
    },num2*100)
});