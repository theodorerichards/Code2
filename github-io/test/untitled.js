//divide text into words using deliminators
//inspect each word for particular string eg. "ea"
//if word does not have string, draw it, then move to next one
//once word is found, the number of chars between delims are counted and added to variable x
//the word is then drawn as many times as there are chars
//every time a word is repeated, variable y counts up
//x*y=poem score


var button;
var textarea;
var savedText;




function setup() {
  noCanvas();
  textarea = createElement('textarea', 'Paste Something Here.');
  textarea.size(300,400);
  createElement('br');
  button = createButton('Turn Into Poetry');
  button.mousePressed(saveText);
  
}


function saveText() {
  savedText = textarea.value();
  //createP("ORIGINAL TEXT: " + savedText);

  // get the array of all the words from the savedText variable

  var textArr = splitTokens(savedText, " \n");
  var length = textArr.length;

  var numToRemove = textArr.length/4;

  // loop through the array, pick a random index, remove it from the array
  for (var j = 0; j < numToRemove; j++) {
    var whichIndex = int(random(textArr.length));
    textArr.splice(whichIndex, 1);
  }


  // loop through the array, if the word found is 'I' or 'i', replace it with 'you', etc.
  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i] === "love" || textArr[i] === "Love") {
      textArr[i] = "lo<br>(real love)<br>ve";
    }
    if (textArr[i] === "beautiful" || textArr[i] === "Beautiful") {
      textArr[i] = "be(<br>th<br>ede<br>atho<br>f<br>m<br>e)a<br>uti<br>ful";
    }
    if (textArr[i] === "the" || textArr[i] === "this" || textArr[i] === "This" || textArr[i] === "a" || textArr[i] === "A" || textArr[i] === "that" || textArr[i] === "That" || textArr[i] === "each" || textArr[i] === "Each" || textArr[i] === "every" || textArr[i] === "Every") {
      textArr[i] = ",<br>";
    }
    if (textArr[i] === "and" || textArr[i] === "And") {
      textArr[i] = "and".repeat(random(5)) + ",<br>";
  	}
  	if (textArr[i] === "but" || textArr[i] === "But") {
      textArr[i] = "but".repeat(random(5)) + ",<br>";
  	}

  if (textArr[i] === "me" || textArr[i] === "Me") {
      textArr[i] = "(the on<br>e i pret<br>end to un<br>derst<br>and)";
  	}
  if (textArr[i] === "you" || textArr[i] === "You") {
      textArr[i] = "(th<br>e one<br> i wi<br>ll never unde<br>rstand)";
  	}	
  if (textArr[i] === "it" || textArr[i] === "It") {
      textArr[i] = "(ever<br>ythin<br>g el<br>se)";
  	}	
  }

  // join the array into a single string, separated by spaces
  var newString = join(textArr, ' ');
  createDiv(newString);
  console.log(newString);
}






//WEEK4 IN-CLass
/*var button;
var textarea;
var savedText;

function setup() {
  noCanvas();
  textarea = createElement('textarea', 'Enter text here!');
  textarea.size(300,400);
  createElement('br');
  button = createButton('push to save');
  button.mousePressed(saveText);
}

function saveText() {
  savedText = textarea.value();
  createP("ORIGINAL TEXT: " + savedText);

  // get the array of all the words from the savedText variable
  var textArr = splitTokens(savedText, '.:;?! !@#$%^&*()+');
  var length = textArr.length;

  // loop through the array, if the word found is 'I' or 'i', replace it with 'you', etc.
  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i] === "I" || textArr[i] === "i") {
      textArr[i] = "you";
    }
    if (textArr[i] === "My" || textArr[i] === "my") {
      textArr[i] = "your";
    }
    if (textArr[i] === "Our" || textArr[i] === "our") {
      textArr[i] = "your";
    }
  }

  // join the array into a single string, separated by spaces
  var newString = join(textArr, ' ');
  createP("NEW TEXT: " + newString);
}*/





/*var inputText;
var area;
var allWords;
var allSentences;
var totalSyllables = 0;


function buttonPressed() {
	inputText = area.value();

	var delim = ".:;?! ,@#$%^&*()[]+";

	allWords = splitTokens(inputText, delim);
	createP("Word Count:" + allWords.length);

	var sentDelim = ".?!";
	allSentences = splitTokens(inputText, sentDelim);
	createP("Sentence Count:" + allSentences.length);

	for (var i = 0; i < allWords.length; i++) {
		totalSyllables += countSyllables(allWords[i]);
	}

	createP("Syllable Count:" + totalSyllables);
}

function countSyllables(word) {
	var syl = 0;

	for (var i = 0; i < word.length; i++) {
		if (isVowel(word.charAt(i))) {
			syl++;
		}
	}
	return syl;
}

function isVowel(c) {
	if ((c =='a') || (c =='e') || (c =='i') || (c =='o') || (c =='u') || (c =='A') || (c =='E') || (c =='I') || (c =='O') || (c =='U')) {
		return true;
	} else {
		return false;
	}
}

function buttonPressed() {
	inputText = area.value();

	var delim = ".:;?! ,@#$%^&*()[]+";

	allWords = splitTokens(inputText, delim);
	createP("Word Count:" + allWords.length);

	var sentDelim = ".?!";
	allSentences = splitTokens(inputText, sentDelim);
	createP("Sentence Count:" + allSentences.length);

	for (var i = 0; i < allWords.length; i++) {
		totalSyllables += countSyllables(allWords[i]);
	}
	createP("Syllable Count:" + totalSyllables);
}

function setup() {
	area = createElement('textarea', "write here");
	area.size(500,300);
	var button = createButton('save');
	button.mousePressed(buttonPressed);
}

function draw() {
	
}*/