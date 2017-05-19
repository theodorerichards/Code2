//concordances


//word paired with its frequency
//javascript object

var students = {
	theo: {
		name: "Theo",
		classes: [
			"code", "studio", "lab"
			]
	},

	santangelo: {
		name: Santangelo,
	}
}

students.theo.classes[1];

-------------------------------


var students = {};
students.code2 = {};
students.code2.theo = {};
students.code2.theo.name = "Theo Richards";
console.log(students);





var concordance = {
	//key: value
	the: 10,
	something: 5,
	things: 2
}

concordance['the'] = 10;







var concordance = {};

var data = "The first mythological film produced by their studio, Mayabazar marked a milestone for Nagi Reddy and Chakrapani. In addition to the technical crew, 400 studio workers – including light men, carpenters, and painters – participated in the development of the film. Director Reddy was meticulous with the pre-production and casting phases, which took nearly a year to complete. Though Rama Rao was initially reluctant to play the lead role, his portrayal of Krishna received acclaim and yielded more offers to reprise the same role in several unrelated films.[a] The soundtrack features twelve songs, with most of the musical score composed by Ghantasala. Telugu lyrics were written by Pingali Nagendrarao and Tamil lyrics were written by Thanjai N. Ramaiah Dass. Four of the songs were composed by S. Rajeswara Rao prior to his unexplained departure from the project. One of them was accompanied by the first illusion of moonlight in Indian cinema, shot by cinematographer Marcus Bartley."

var tokens = data.split(/\W+/);



var keys = [];
for (var i = 0; i < tokens.length; i ++) {
	var word = tokens[i];
	if (concordance[word] === undefined) {
		concordance[word] = 1;
	} else {
		concordance[word]++;
	}
}


keys.sort(function(a,b) {
	return (corcordance[a] - concordace[b]);

});




// // boolean
// var someBool = false;

// // array
// var num = [0, 86, .2, 3];
// console.log(num[1]);

// var arr = [0, "some\tstring", .2, 3];

// // concatenation
// var str1 = "hello";
// var str2 = "world";

// var str3 = str1 + " " + str2;

// // loop
// for (var i = 0; i <10; i++) {
// 	console.log("something");
// }

// // string methods
// // strings are objects not primitive data types - 'scalars'
// // objects have attributes/variables and functions
// var myString = "code2 is class";

// // charAt(); - specific character, accessed by ".charAt(0);"
// // indexOf(); - specific index of character, accessed by ".indexOf('c');"
// // substring(); - takes part of string, accessed by ".substring(5,15);"
// // concat(); - Concatenates without having to add - ".concat(variable);"
// // split(); - breaks into smaller strings, accessed by ".split(' ');"
// // replace(); - replaces part of string, accessed by ".replace('class', 'ass');"
// // slice(); - gives part of string, accessed by ".slice(-3,-1);"

// // DOM - Document Object Model
// // div id - "container" - all the content goes here - only 1 per page
// // div class - "images" - bunch of images - as many per page
// // divs and spans seperate space - spans are inline








// //WEEK 4

// //anonymous function

// button.mousePressed(function() {
// 	numPressed++;
// 	console.log("pressed " + numPressed + " times!");
// });


// // text area element
// function setup() {
// 	var area = createElement('textarea', "bla bla bla");
// }

// //HTML
// <div id="edittext" contenteditable = "true">
// 	booty
// </div>
// /

// var editDiv;
// function setup() {

// 	var fileSelect = createFileInput();

// 	editDiv = select('#edittext');
// 	editDiv.input(function() {
// 		console.log(editDiv.html());
// });








