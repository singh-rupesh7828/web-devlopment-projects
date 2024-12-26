var btn=document.querySelector("button");
var h5=document.querySelector("h5");
var img=document.querySelector("img");

let flag=0;

btn.addEventListener("click",function(){
    h5.innerHTML="Stranger";
    h5.style.color='yellow';
    btn.style.backgroundColor='yellow';
    btn.style.color='green';
    btn.innerHTML="Send request....";
    img.style.border='4px solid yellow'

setTimeout(function(){
    if(flag==0){
        h5.innerHTML="Friends";
        h5.style.color='green';
        btn.style.backgroundColor='green';
        btn.style.color='white';
        btn.innerHTML="Add Friend";
        img.style.border='4px solid green'
        flag=1;
    }else{
        h5.innerHTML="Stranger";
        h5.style.color='red';
        btn.style.backgroundColor='red';
        btn.style.color='white';
        btn.innerHTML="Remove Friend";
        img.style.border='4px solid red'
        flag=0;
    }
},3000)
})