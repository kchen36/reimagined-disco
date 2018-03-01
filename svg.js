var r = 1;
increase = true;
frame = null;
var c = null;
var pic = document.getElementById("svg");
var btn = document.getElementById("clear");
var grow = document.getElementById('grow');
var bounce = document.getElementById("bounce");

var circle = function(e){
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx","250");
    c.setAttribute("cy", "250");
    c.setAttribute("r", r + "");
    c.setAttribute("fill", "black");
    c.setAttribute("stroke","black");
    pic.appendChild(c);    
}

var resize = function(){
    if (r <= 0){
	increase = true;
    }
    if (r >= 250){
	increase = false;
    }
    if (increase){
	r += 1;
	c.setAttribute("r", r + "");
    }
    else{
	r -= 1;
	c.setAttribute("r", r + "");
    }
}

var draw = function(e){
    if (pic.hasChildNodes()){
	clear();
    }
    circle();
    frame = setInterval(resize, 10);
}

var clear = function() {
    r = 1;
    increase = true;
    pic.removeChild(pic.firstChild);
    clearInterval(frame)
}

grow.addEventListener("click",draw);
bounce.addEventListener("click",bounce);
btn.addEventListener("click",clear);
