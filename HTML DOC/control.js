console.log("hello")
var x = 1
var y = 1
{
    let y = 4 
}
y = prompt("กรอกเลข")
document.getElementById("get").innerHTML = y
x = Math.floor(Math.random()*100)
console.log(x)
document.getElementById("result").innerHTML = x
if(x == y){
    console.log("คุณถูก")
}else{
    console.log("คุณผิด")
}
console.log("12" === 12)
console.log("12" == 12)