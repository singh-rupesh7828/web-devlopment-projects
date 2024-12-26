const socialMediaPosts = [
  {
    username: "SophiaJohnson",
    profilePhoto: "https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    storyPhoto: "https://plus.unsplash.com/premium_photo-1723809791931-ea96a277bebe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
  },
  {
    username: "LiamMiller",
    profilePhoto: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90byUyMG9mJTIwYSUyMGRpZmZlcmVudCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    storyPhoto: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    username: "EmmaClark",
    profilePhoto: "https://images.unsplash.com/photo-1542847970-584270eb111b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGUlMjBwaG90byUyMG9mJTIwYSUyMGRpZmZlcmVudCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    storyPhoto: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    username: "NoahDavis",
    profilePhoto: "https://plus.unsplash.com/premium_photo-1695908426422-ed52fdff2a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByaXR5JTIwcGhvdG8lMjBvZiUyMGElMjBkaWZmZXJlbnQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
    storyPhoto: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  },
  
    {
    username: "OliviaBrown",
    profilePhoto: "https://plus.unsplash.com/premium_photo-1664461168692-c2ff913fbaef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByaXR5JTIwcGhvdG8lMjBvZiUyMGElMjBkaWZmZXJlbnQlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
    storyPhoto: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
  }
];


sum =""

socialMediaPosts.forEach(function(elem, idx){
    sum = sum + `<div class="story">
                <img id = "${idx}" src="${elem.profilePhoto}">
                 </div>`

})

var storiya = document.querySelector('.storiya')
var full = document.querySelector('.full')
storiya.innerHTML = sum

storiya.addEventListener('click',function(dets){
var val = socialMediaPosts[(dets.target.id)]
full.style.display = 'block'

full.style.backgroundImage = `url(${val.storyPhoto})`

setInterval(function(){
  full.style.display = "none"
},3000)
})

sum1 =""

var uplods = document.querySelector('.uplods')
uplods.innerHTML = sum1
var likes = document.querySelectorAll('.likes')

