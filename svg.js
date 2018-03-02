var r = 25, x = 250, y = 250;
increase = true;
var xplus = true;
var yplus = true;
frame = null;
var c = null;
var pic = document.getElementById("svg");
var btn = document.getElementById("clear");
var grow = document.getElementById('grow');
var bounceb = document.getElementById("bounce");

var circle = function(e){
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x + "");
    c.setAttribute("cy", y + "");
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

var bounce = function(){
    if (pic.hasChildNodes()){
	clear();
    }
    circle();
    frame = setInterval(bouncehelper, 10);
}
var bouncehelper= function(){
    if (x <= 25){
	xplus = true;
    }
    if (x >= 475){
	xplus = false;
    }
    if (y <= 25){
	yplus = true;
    }
    if (y >= 476){
	yplus = false;
    }
    if (xplus){
	x += 5;
    }
    else{
	x -= 5;
    }
    if (yplus){
	y += 5;
    }
    else{
	y -= 5;
    }
    c.setAttribute("cx", x + "");
    c.setAttribute("cy", y + "");
}

var clear = function() {
    x = 250;
    y = 250;
    r = 25;
    increase = true;
    pic.removeChild(pic.firstChild);
    clearInterval(frame)
}

grow.addEventListener("click",draw);
bounceb.addEventListener("click",bounce);
btn.addEventListener("click",clear);
