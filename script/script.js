// console.log("WORKS");

var kilometers;
var meter;

var h;
var m;
var s;
var a;

var hour = 0;
var mins = 0;




function calc() {
    kilometers = document.getElementById("km").value;
    h = document.getElementById("hour").value;
    m = document.getElementById("min").value;
    s = document.getElementById("sec").value;
    meter=document.getElementById("meter").value;

    

    
    emptyInp();
    calcTime();
    var x= pace();
    //  console.log(x );
}



    
    // console.log("hours: " + hour + " minutes: " + mins + " seconds: " + seconds);
     


function calcTime() {

    

    
   
}


function pace(){
    // console.log(h,m,s);
    var totalMeter =parseInt(kilometers,10)*1000+parseInt(meter,10);
    console.log(kilometers+meter)
    console.log(totalMeter)
    var toSec = h * 3600 + m * 60 + s * 1;
   var pace=toSec/totalMeter;
console.log(toSec+ " sek "+totalMeter +" meter");
    
console.log("pase "+ pace)
    var c= toSec/kilometers/60;
 var d= parseInt((c%1).toFixed(4)*60);
 var e=parseInt(c);
 
 
$("#result").val(e +" min " + d + " sek" +" (per km)");




// if (h >= 3600 ) {
//         h++;
//         // e=-60;
//     }else if (result >= 60) {
//         mins++;
// if(m >=60){
//  h=-1;   
// }

 return  e +" min " + d + " sek";
}




function emptyInp() {
    if (document.getElementById("km").value == "") {
        alert("Something is EMPTY");
    }
}

// function reset() {
//     location.reload();
// }