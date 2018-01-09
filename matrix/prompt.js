
var lastKey = 0;
var newKey = false;


window.onload = function() {
	setValues();
	myPrompt = new prompt()
	setInterval(myPrompt.draw, 30);
	//setInterval(rain, 50);
	//myRow = new Row(5);
}




function prompt() {
	this.num = 0;
	this.str = "f";

	this.draw = function() {
		
		console.log(this.str);
		var promptStr = ">: ".concat(this.str);
		cleanBack();
		drawBlurText(promptStr, 5,40, textColor);
		
		if (newKey) {
			if("!".charCodeAt(0) < lastKey < "~".charCodeAt(0)) {
				this.str += String.fromCharCode(lastKey);	
			}
			else if (lastKey == 8) { 	// Backspace
				this.str = this.str.slice(0, -1);
			}
			newKey = false;
		}
	}
	
}


document.addEventListener('keydown', function(event) {
   	console.log(event.keyCode);
    lastKey = event.keyCode;
    newKey = true;
});