// kata: https://www.codewars.com/kata/52685f7382004e774f0001f7
//my solutition
function humanReadable (seconds) {
  let hours=String("0" + Math.floor(seconds/3600)).slice(-2)
  let minutes=String("0" + Math.floor((seconds%3600)/60)).slice(-2)
  let sec=String("0" + seconds%3600%60).slice(-2)
  return hours + ":" + minutes +":" +sec
}

//best practice 

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
