var images = [
    'https://wallpapercave.com/wp/wp7432594.jpg',
    'https://wallpapers.com/images/hd/rajasthan-royals-shimron-hetmyer-r1gawmu8607pltdb.jpg',
    'https://sportsdigest.in/wp-content/uploads/2023/01/Gujarat-Titans-2.jpg',
    'https://wallpapercave.com/wp/wp2682828.jpg',
    'https://img.jagranjosh.com/images/2023/April/142023/ipl-rcb-list.webp',
    'https://img.jagranjosh.com/images/2023/March/3132023/IPL-2023-list-LSG.webp',
    'https://wallpapercave.com/wp/wp4811965.jpg',
    'https://media.insider.in/image/upload/c_crop,g_custom/v1582211775/hocynbatb9s8mnfsgbfy.jpg',
    'https://media.insider.in/image/upload/c_crop,g_custom/v1681473570/rwjx9idr6xi1hsnzvxhb.png',
];

var box = document.querySelector('.box')
var btn = document.querySelector('button')

var random = Math.floor(Math.random()*images.length)
var randomimage = images[random]
btn.addEventListener('click',function(){
box.style.backgroundImage = `url(${randomimage})`
})