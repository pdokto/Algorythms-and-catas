//https://www.codewars.com/kata/58279e13c983ca4a2a00002a

function greetDevelopers(list) {
  return list.map(dev => ((dev.greeting = "Hi "+dev.firstName+", what do you like the most about "+dev.language+"?"),dev))
}
