module.exports={}
module.exports.sum=function sum(a,b){
    return a+b
}
module.exports.capitalize=function capitalize(str){
    return str.toUpperCase()
}
module.exports.reversestring=function reversestring(s){
    reversed=""
    for(i=s.length-1;i>=0;i--){
        reversed+=s.charAt(i)
    }
    return reversed
}




console.log(module.exports.reversestring("he"))