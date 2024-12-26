var btns = document.querySelectorAll("button")
var body = document.querySelector('body')


btns.forEach(function(elems){
    elems.addEventListener('click',function(){
        console.log(elems.innerHTML);
        body.style.backgroundColor = elems.innerHTML

        
        

    })
})