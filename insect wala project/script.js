
var box = document.querySelector('.box') 
var btn = document.querySelector('button')

var images = [
    "https://th.bing.com/th?id=OIP.6WcZ0uiJZdnfXs1AcZfgzgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th/id/OIP.QwfZOumPcuERKzrDf7kfJAHaGE?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.1e0b28dc305cc5748360f5b06a1724a1?rik=r%2fU86WcGjB8BBA&riu=http%3a%2f%2fclipart-library.com%2fimg%2f998390.png&ehk=JyWcXl4sajI2t34s%2fY46XYwhIuyRGl47zG6HSwanp4c%3d&risl=&pid=ImgRaw&r=0"
];

btn.addEventListener('click',function(){
    var img = document.createElement('img');

    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];  

    img.style.position = "absolute"; 
    var random1 = Math.floor(Math.random()*90)
    var random2 = Math.floor(Math.random()*90)
    var random3 = Math.floor(Math.random()*360)

   img.style.left = `${random1}%`;
   img.style.top = `${random2}%`;
   img.style.transform = `rotate(${random3}deg)`;
   box.appendChild(img);
})