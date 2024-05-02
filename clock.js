var hours = document.getElementById("hours_handel");
var minnut = document.getElementById("minnut_handel");
var second = document.getElementById("second_handel");
var today = document.getElementById("today_date")
var date;

function myFunction() {
  date = new Date(); // j.s bydefault method for new date and time
  //console.log(date);
  var h = date.getHours(); // getinh hour
  var m = date.getMinutes(); // getting minute
  var s = date.getSeconds(); // getting second
  var d = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear()
  var day = date.getDay();

  if(day==0){ day = "Saturday"}
  if(day==1){ day = "Monday"}
  if(day==2){ day = "Tuesday"}
  if(day==3){ day = "Wednesday"}
  if(day==4){ day = "Thrusday"}
  if(day==5){ day = "Friday"}
  if(day==0){ day = "Saturday"}

  today.innerText =`it's ${day} \n ${d} - ${month} - ${year}`

 

  //----------------- for hours ------------------------------------------------------

  if (h > 12) {
    h = h % 12; // convertinh 24hours into 12 hours patreen
    h = h * 30; // converting into degree (radian vale)
    hours.style.transform = `rotate(${h}deg)`;
  } else if (h <= 12 && m <= 14) {
    // h = h + 0.2;
    h = h * 30;
    hours.style.transform = `rotate(${h}deg)`;
    console.log(h);
  } else if (h <= 12 && m <= 30) {
    h = h + 0.4;
    h = h * 30;
    hours.style.transform = `rotate(${h}deg)`;
    console.log(h);
  } else if (h <= 12 && m <= 40) {
    h = h + 0.6;
    h = h * 30;
    hours.style.transform = `rotate(${h}deg)`;
    console.log(h);
  } else if (h <= 12 && m <= 47) {
    h = h + 0.8;
    h = h * 30;
    hours.style.transform = `rotate(${h}deg)`;
    console.log(h);
  } else if (h <= 12 && m <= 60) {
    h++;
    h = h * 30;
    hours.style.transform = `rotate(${h}deg)`;
    console.log(h);
  }

  //------------------------------- for minute --------------------------------------

  m = m * 6;
  console.log(m);
  minnut.style.transform = `rotate(${m}deg)`;

  //------------------------------- for second ----------------------------------------

  console.log(s);
  s = s * 6;
  second.style.transform = `rotate(${s}deg)`;
}


//-------------------------------- for ate -------------------------------------------




// --------------------------- for interval ------------------------------------------
setInterval(myFunction, 1000);
