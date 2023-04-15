const date= new Date("Jun 28, 2023 00:00:00").getTime();
const dayEl= document.getElementById("days");
const hourEl=document.getElementById("hours");
const minEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const coundow= setInterval(function(){
    let now=new Date().getTime();
    let distan=date-now;
    let days=Math.floor(distan / (1000*60*60*24));
    let hours=Math.floor(distan % (1000*60*60*24)/(1000*60*60));
    let minutes=Math.floor(distan % (1000*60*60)/(1000*60));
    let seconds=Math.floor(distan % (1000*60)/1000);
    dayEl.innerHTML=days;
    hourEl.innerHTML=hours;
    minEl.innerHTML=minutes;
    secondEl.innerHTML=seconds;
},1000);