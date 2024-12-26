const users = [
  {
    name: "Aarav Sharma",
    uploadTime: "5 hr ago",
    profilePhoto: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Ishita Verma",
    uploadTime: "10 min ago",
    profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Rohan Gupta",
    uploadTime: "1 hr ago",
    profilePhoto: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Meera Iyer",
    uploadTime: "2 hr ago",
    profilePhoto: "https://images.unsplash.com/photo-1540174401473-df5f1c06c716?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Kabir Joshi",
    uploadTime: "15 min ago",
    profilePhoto: "https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Ananya Singh",
    uploadTime: "4 hr ago",
    profilePhoto: "https://images.unsplash.com/photo-1701351382146-035bd68cdb6d?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Vivaan Patel",
    uploadTime: "30 min ago",
    profilePhoto: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Sanya Kapoor",
    uploadTime: "6 hr ago",
    profilePhoto: "https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Dev Mishra",
    uploadTime: "20 min ago",
    profilePhoto: "https://images.unsplash.com/photo-1597969892064-a7b26a98c335?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Priya Nair",
    uploadTime: "8 hr ago",
    profilePhoto: "https://images.unsplash.com/photo-1619420674819-da50b9f76950?w=500&auto=format&fit=crop&q=60",
  },
];


const screen = document.querySelector('.screen');
const overlay = document.querySelector('.overlay');
let sum = '';

users.forEach(function(user, idx){
  sum = sum + `
    <div class="profile" id="${idx}">
      <div class="photo">
        <img src="${user.profilePhoto}">
      </div>
      <div class="detail">
        <h1>${user.name}</h1>
        <h5>${user.uploadTime}</h5>
      </div>
    </div>`;
});

screen.innerHTML += sum;


