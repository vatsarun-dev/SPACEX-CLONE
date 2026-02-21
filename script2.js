let hour = document.querySelector(".page1 .launch .time #hr");
let min  = document.querySelector(".page1 .launch .time #min");
let sec  = document.querySelector(".page1 .launch .time #sec");

function updateTime(){
    let time = new Date();
    let hrs  = time.getHours() % 12;
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    hour.innerHTML = String(hrs).padStart(2,"0");
    min.innerHTML  = String(mins).padStart(2,"0");
    sec.innerHTML  = String(secs).padStart(2,"0");
}

updateTime();
setInterval(updateTime, 1000);