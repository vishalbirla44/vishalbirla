var second = 0 ;
var minute = 0;
var houre = 0;

var d = new Date();

setInterval(
    function (){
        d = new Date();
        second = d.getSeconds()*6;
        minute = d.getMinutes()*6;
        houre = d.getHours()*30 + Math.round(minute/12) ;
        document.getElementById("second-hand").style.transform = "rotate("+second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate("+minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate("+houre + "deg)";
    },1000
)