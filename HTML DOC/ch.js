var age = prompt("กรอกอายุ")
if(age > 18){
  document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/vd1qdnCX5RU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}else{
  document.getElementById("content").innerHTML = "denied"
}
for(var counter =0;counter <612;counter++){
    console.log("hello"+counter)
}