var str = "i like to replace strings";
var str2 = "he likes to replace strings";

/*


REGULAR EXPRESSIONS
rules for matching text

metacharacter - instruction for a generalization of text matching
\w - word character- any character that could be in a word
\W - non-word character
\w+ - an entire word
\s - space - white space (spaces and newlines)
\d - digit - return any number
\b - word boundary
^ - start of line
$ - end of line

regex literal - finds whatever you type in

"Find a Phone Number"
\d{3}-\d{3}-\d{4}

\(?\d{3}[).-]\d{3}[.-]\d{4} - this allows for (435)632-5433 or 343.343-2455 or any combination of these 


Quantifiers
+ - finishes word

? - optional
"like or likes" - like with optional s
				with an optional capital L
likes?

{min, max}

"color colour
colors colours"
colou?rs?

^\w+ - first word of each line
\w+$ - last word of each line


flesch index - need to find number of vowels
return instances of a,e,i,o,u,A,E,I,O,U

OR syntax 
[aeiouAEIOU] - characters
[a-zA-Z] - searches all letter between them
[^z] - every character except z
(word|something|true) - words


"me@email.com"
\w+@\w+.(com|net|edu|org)


"https://www.something.com/"
http://regu.aregreat.net

https?://\w+.\w+.(com|edu|net|org|co)/?
OR
https?://[^\s<>"']+

matching groups
(\w+) - captures a back-reference
1 - refers to first back-referenced capture

something something hello hello there you you
\s(\w+)\s\1

replace with something like:
 $1s 
*/

function isVowel(c) {
	var vowelRegex = new RegExp('[aeiouAEIOU]');
	var vowelRegex2 = /[aeiouAEIOU]/;
	return vowelRegex.test(c);
}


/*
manifest.json - tell browser what we're doing
script.js - write the logic


<div class="score likes" title="18293">18.3k</div>
