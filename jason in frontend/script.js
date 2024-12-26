let arr = [
    {
        name: "Ravi",
        age: 22,
        city: "Jaypur"
    },
    {
        name: "Sandeep",
        age: 20,
        city: "Lucknow"
    },
    {
        name: "Vikram",
        age: 22,
        city: "Bhopal"
    },
    {
        name: "Karan",
        age: 23,
        city: "Indor"
    }
];

var main = document.querySelector('.main')

var sum = ""

arr.forEach(function(elem){
    sum = sum + `<div class="card">
            <h1>Name:- ${elem.name}</h1>
            <span>age:- ${elem.age},</span>
            <span>city:- ${elem.city}</span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus ullam recusand sed sequi 
                facere perspicia delectus doloremque plac laudantium.</h3>
        </div>`
})

main.innerHTML = sum