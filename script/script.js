// console.log("WORKS");

var kilometers;
var meter;

var h;
var m;
var s;
var a;

var hour = 0;
var mins = 0;
var seconds = 0;



function calc() {
    kilometers = document.getElementById("km").value;
    h = document.getElementById("hour").value;
    m = document.getElementById("min").value;
    s = document.getElementById("sec").value;

    

    
    emptyInp();
    calcTime();
    var x= pace();
     console.log(x );
}



    // if (result >= 3600) {
    //     hour++;
    // }
    // if (result >= 60) {
    //     mins++;

    // }
    // if (result >= 1) {
    //     seconds++;
    // }
    // console.log("hours: " + hour + " minutes: " + mins + " seconds: " + seconds);
     


function calcTime() {

    // console.log(meter +" meter");
    console.log(h+" hours "+m  +" minutes "+ s +" seconds" );

    var result = h;
   
}


function pace(){
    var toSec = h * 3600 + m * 60 + s * 1;
    var toMin=toSec*60;
    var meter = kilometers;

    var c= toSec/kilometers/60;
 var d= parseInt((c%1).toFixed(4)*60);
 var e=parseInt(c);
$("#result").val(e +" min " + d + " sek")
 return e +" min " + d + " sek";
}




function emptyInp() {
    if (document.getElementById("km").value == "") {
        alert("Something is EMPTY");
    }
}

function reset() {
    location.reload();
}