var from_str = ["you","your","you're","my","myself","them","and","to","for","into","about","of","been","right"];
var to_str  = ["yeh","yer","yeh're","me","meself","'em","an'","ter","fer","inter","'bout","o'","bin","righ'"];

function makeScottish(){
  var input_str = document.getElementById("input").value;       								//input string by user
  var output_str = "";                                          								//output string
  var word_str = "";                                            								//current word
  var output = document.getElementById("output");
  input_str += " ";                                             								//add empty space at end of input
  for (i = 0; i <input_str.length; i++){
    if (input_str[i] != " " && input_str[i] != "." && input_str[i] != "!" && input_str[i] != "?"){word_str += input_str[i];}
    else{
			if (word_str.slice(-3,100).toLowerCase() == "ing"){
				word_str = word_str.slice(0,-1)+"'"																			//remove ing , ex. doing -> doin'
			}
      if (word_str.slice(-2,100).toLowerCase() == "'t"){
				word_str = word_str.slice(0,-1)																					//remove 't , ex. doesn't -> doesn'
			}
      for (j = 0; j<from_str.length; j++){    																	//look for translation in lists
        if (word_str.toLowerCase() == from_str[j]){
					word_str = to_str[j]
				}
      }
      output_str += word_str;     //add new word to output
      word_str = "";              //reset next word to nothing
      output_str += input_str[i];	//add charachter in between words (space , dot., exlamation!, questionmark?)
    }
    //output_str += "<br>" + input_str[i]
    }
  output.innerHTML = output_str;
}

function setExample1(){
  document.getElementById("input").value = "You're a wizard Harry.";
  makeScottish();
}
function setExample2(){
  document.getElementById("input").value = "They don't make them like that anymore.";
  makeScottish();
}
function setExample3(){
  document.getElementById("input").value = "Me and my friend been into the forbidden forrest.";
  makeScottish();
}
function setExample4(){
  document.getElementById("input").value = "I made this website myself. It's the only way to do it right.";
  makeScottish();
}
