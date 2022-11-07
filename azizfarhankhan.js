
// <!-- Script for Type-Writer -->

var i = 0;
var txt = '\"Focus on what you want,but never forget to be grateful of what you already have\"';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tw").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}