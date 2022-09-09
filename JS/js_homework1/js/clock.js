let myName = prompt('Adınız nedir?')
const n = document.querySelector('#myName')
n.textContent = myName

timeFunc = () => {
    date = new Date()
    const days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = days[date.getDay()]
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
       
    document.querySelector("#myClock").innerHTML = hours + ":" + minutes + ":" + seconds + "     " + day
}
timeFunc()
setInterval(timeFunc, 1000)