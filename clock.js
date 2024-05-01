var hours = document.getElementById("hours_handel");
var minnut = document.getElementById("minnut_handel");
var second = document.getElementById("second_handel");
var date ;


function datee()
{

 date = new Date(); // j.s bydefault method for new date and time
//console.log(date);

//----------------- for hours ------------------------------------------------------
var h = date.getHours(); // getinh hour 
console.log(h);

if (h > 12)
 {
  h = h % 12; // convertinh 24hours into 12 hours patreen
  console.log(h);
  h = h * 30; // converting into degree (radian vale)
  console.log(h);
}
hours.style.transform = `rotate(${h}deg)`;



//------------------------------- for minute --------------------------------------
var m = date.getMinutes();
console.log(m);
m=m*6;
console.log(m);
minnut.style.transform = `rotate(${m}deg)`;



//------------------------------- for second ----------------------------------------
var s = date.getSeconds();
console.log(s);
s=s*6;
second.style.transform = `rotate(${s}deg)`;
}


// --------------------------- for interval ------------------------------------------
setInterval( datee,1000)



