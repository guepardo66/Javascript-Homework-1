let userName = prompt("İsminizi Giriniz")
let info = document.querySelector("#info")
let date = document.querySelector("#date")
let today = new Date()
const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; 
let day = weekday[today.getDay()];

info.innerHTML = `Merhaba ${userName} Hoşgeldin!`

date.innerHTML = `${startTime()}`


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    date.innerHTML = `${day} günü saat ${h + ":" + m + ":" + s}'te Kodluyoruz Javscript ilk ödevimi inceliyorsun :)`
    // date.innerHTML = day + " " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
