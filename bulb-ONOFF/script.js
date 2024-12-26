let btn=document.querySelector(".btn");
let bulb=document.querySelector(".bulb");

let val="0";
btn.addEventListener("click",function(){
    if(val===0){
        btn.innerHTML="OFF";
   bulb.style.backgroundColor='yellow';
        val=1;
    }else{
        btn.innerHTML="ON";
        bulb.style.backgroundColor='white';
        val=0;
    }
})