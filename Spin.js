function rotateWheel(){
    var n=Math.floor(Math.random()*360)
    document.getElementById("wheel").style.transition="rotate 15s"
    document.getElementById("wheel").style.rotate=n*10+"deg"

}