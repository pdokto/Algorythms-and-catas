// after kata https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url){
  
  if(url.indexOf("www")>-1) return url.substring(url.indexOf('www')+4,url.indexOf(".", url.indexOf('www')+4))
	if (url.indexOf('//') > -1) return url.substring(url.indexOf('//')+2,url.indexOf("."))
  return url.substring(0, url.indexOf("."))
}

//better solution is to unify the beginnings using .replace
