startCount()

var c = 10000;
var t;
var timer_is_on = 0;

function timedCount() {
   document.getElementById("enuncf").innerHTML = "Você fez uma pontuação total de " + c; 
    
  c = c - 10;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function final() {
    clearTimeout(t);
    timer_is_on = 0;
  }

  function descontar(){
      c = c-100
  }