var mouseX, mouseY;

window.addEventListener('mousemove',function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
});

var printLocation = function(){
    console.log(""+mouseX+","+mouseY);
}
