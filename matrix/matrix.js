var canvas;
var ctx;

var backColor = "#000000";
var textColor = "#66ff66";
var textColorNew = "#ddffdd";
var shadowColor = "green";

var textSize = 30;
var lines;
var strLength;

var myRow;
var myRows;

function setValues() {
	canvas = document.getElementById("matrixCanvas");
	
	// Set Width and Hight of canvas
	canvas.width  = window.innerWidth-4;
	canvas.height = window.innerHeight-4;
	
	ctx = canvas.getContext("2d");	

	lines = Math.floor(window.innerWidth/textSize);
	strLength = Math.floor(window.innerHeight/textSize);

	ctx.textBaseline = "middle";
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 10;
	ctx.font = "bold "+textSize.toString() +"px Courier New"
	ctx.shadowColor = shadowColor;

	myRows = [lines];
	for (var i = 0; i < lines; i++) {
		myRows[i] = new Row(textSize*i+5);
	}
}

window.onload = function() {
	setValues();
	setInterval(rain, 50);
	//myRow = new Row(5);
}

function Row(x_pos) {
	this.x = x_pos;
	this.str = randomString(strLength);
	this.showLength = Math.floor(Math.random()*12+5);
	this.top = 0;
	this.bottom = Math.floor(Math.random()*-100); // Get a random start
	
	this.draw = function() {
		this.top = Math.max(0, this.bottom - this.showLength);
		for (var i = this.top; i < this.bottom; i++) {
			if (i>0 && i < this.str.length) {
				if (i+1 == this.bottom) {
					drawBlurText(this.str[i], this.x, i*textSize, textColorNew);	
					drawBlurText(this.str[i], this.x, i*textSize, textColorNew);	// Draw double for stronger effect
				} else {
					drawBlurText((this.str)[i], this.x, i*textSize, textColor);
				}	
			}
		}
		this.bottom++;
		if(this.top > strLength) {
			this.bottom = 0;
			this.str = randomString(strLength);
			return true;	// check if ended
		}
		else {
			return false;	// check if ended
		}
	}
}


function rain() {
	cleanBack();
	//myRow.draw();
	drawRows();
}

function drawRows() {
	for (var i = 0; i < myRows.length; i++) {
		myRows[i].draw();
	}
}


function cleanBack() {
	ctx.fillStyle = backColor;
	ctx.fillRect(0,0,canvas.width, canvas.height);
}


function randomChar() {
	var min = "!".charCodeAt(0);
	var max = "~".charCodeAt(0);
	var diff = max-min;
	var charkey = Math.round((Math.random() * diff)+min);
	return String.fromCharCode(charkey);
}

function randomString(len) {
	var str = "";
	for (var i = 0; i < len; i++) {
		str += randomChar();
	}
	return str;
}



function drawBlurText(string, x, y, midColor) {
	var text = string;
	ctx.fillStyle = midColor;
	ctx.fillText(text, x, y);
}
