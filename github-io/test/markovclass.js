//infinite monkey theorem
var alphabet = 'abcdefghijklmnopqrstuvwxyz .';
// var result = '';
// for(var i = 0; i < 20; i++) {
// 	var char = letters.charAt(Math.floor(Math.random() * letters.length));
// 	//var char = letters.charAt(floor(random(0, letters.length)));   //p5
// 	result += char;
// }

var letters = {
	a : 8.167,
	b : 1.492,
	c : 2.782,
	d : 4.253,
	e : 12.702,
	f : 2.228,
	g : 2.015,
	h : 6.094,
	i : 6.966,
	j : 0.153,
	k : 0.772,
	l : 4.025,
	m : 2.406,
	n : 6.749,
	o : 7.507,
	p : 1.929,
	q : 0.095,
	r : 5.987,
	s : 6.327,
	t : 9.056,
	u : 2.758,
	v : 0.978,
	w : 2.360,
	x : 0.150,
	y : 1.974,
	z : 0.074,
};

var possibilities = [];

for (var i = 0; i < alphabet.length; i ++) {
	var letter = alphabet.charAt(i);
	var probability = letters[letter];
	var n = Math.floor(probability*1000);
	for (var j = 0; j < n; j++) {
		possibilities.push(letter);
	}
}



_____________________

var sentence = "nietzsche said god is dead freud said god is dad";

//ngrams

ni
ie
et
tz
zs
sc
ch
he
e 
 s
sa
ai
