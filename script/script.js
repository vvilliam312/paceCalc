// console.log("WORKS");

var kilometers="";


var h;
var m;
var s;





function calc(){
kilometers=document.getElementById("km").value; 
h=document.getElementById("hour").value;
m=document.getElementById("min").value;
s=document.getElementById("sec").value;


// console.log(time);
score();
}

function score(){
    console.log(kilometers +" kilometers");
    console.log(h+" hours "+m  +" minutes "+ s +" seconds" );

}







