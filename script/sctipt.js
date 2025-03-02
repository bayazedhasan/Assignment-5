document.getElementById("card").addEventListener('click', function(url){
    
        window.location.href ='/Blog/main.html'
    
})
const body=document.getElementById('body');
const button = document.getElementById('color-btn');
const colors = ['violet', 'red', 'green', 'pink', '#E6E6FA', '#7B68EE','#90EE90', '#8FBC8B', '#E0FFFF', '#f4f7ff']
body.style.backgroundColor = '#f4f7ff';
button.addEventListener('click', function(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex]; 
})
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const formattedDate = `${monthNames[currentDate.getMonth()]} ${day}, ${year}`;
 document.getElementById('currentDate').textContent = formattedDate;