let hour=document.querySelector(".nav .launch .time #hr")
let min=document.querySelector(".nav .launch .time #min")
let sec=document.querySelector(".nav .launch .time #sec")

function updateTime(){
    let time=new Date()
    let hrs=time.getHours()%12
    let mins=time.getMinutes()
    let secnd=time.getSeconds()

    hour.innerHTML=String(hrs).padStart(2,"0")
    min.innerHTML=String(mins).padStart(2,"0")
    sec.innerHTML=String(secnd).padStart(2,"0")


}
let btn=document.querySelector(".hero .btn #btn")
btn.addEventListener("click",()=>{
    window.location.href="nextPage.html"
})

// setInterval(
//     updateTime,1000
// )