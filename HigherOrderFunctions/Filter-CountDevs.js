//https://www.codewars.com/kata/582746fa14b3892727000c4f

function countDevelopers(list) {
  return list.filter(dev => dev.continent==="Europe" && dev.language==="JavaScript").length
}
