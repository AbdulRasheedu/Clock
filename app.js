
let hoursClock = document.querySelector('.hour');
let minClock = document.querySelector('.min');
let secClock = document.querySelector('.sec');
let ampmLabel = document.querySelector('.ampm')

setInterval(() =>{
    let my_Time = new Date();

    let hours = my_Time.getHours();
    let mins = my_Time.getMinutes();
    let sec = my_Time.getSeconds();

    let label = hours < 12 ? "AM" : "PM"; 
    hours = hours > 12 ? hours - 12: hours; 
    hours = hours == 0 ? 12 : hours;

    hoursClock.innerHTML = hours;
    minClock.innerHTML = mins;
    secClock.innerHTML = sec;  
    ampmLabel.innerHTML = label;   

    
},1000);
