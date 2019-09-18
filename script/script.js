// console.log("WORKS");

var kilometers="";


var h;
var m;
var s;


var resM;
var resH;
var resS;

function calc(){
kilometers=document.getElementById("km").value; 
h=document.getElementById("hour").value;
m=document.getElementById("min").value;
s=document.getElementById("sec").value;


emptyInp();
calcTime();
}




function calcTime(){
    console.log(kilometers +" kilometers");
    console.log(h+" hours "+m  +" minutes "+ s +" seconds" );
   
    if(h>=1){
    resH=Math.floor(60*(60*h));
        // console.log("HOURS TO MIN = "+ resH);
       }

    if(m>=1){
resM=Math.floor(60*m);
 
//  console.log("Minutes To SEC = "+ resM);
}
if(s>=1){
    resS=Math.floor(1*s);
     
    //  console.log("Minutes To SEC = "+ resS);
    }


var result =resH+resM+resS;
console.log(result +" Seconds");
}







function emptyInp(){
    if(document.getElementById("km").value == ""){
        alert("Something is EMPTY");
    } 
}
function reset(){
    location.reload();
}


