//https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = function(morseCode){
  return morseCode.trim().split(" ").map(x => x==""? " " : MORSE_CODE[x])
                             .join("")
                             .replace(/ {2,}/g, ' ')
}
