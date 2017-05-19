// var date1 = new Date(1995, 11, 08);
// var date2 = Date.now();

// var hours = Math.abs(date1-date2) / 36e5;
// var days = Math.round(hours/24);
// hours = Math.round(hours);

// alert("GET BACK TO WORK! YOU ONLY HAVE " + hours + " HOURS (ONLY " + days + " DAYS) TO LIVE!");

//alert("eh");

// var images = document.getElementsByTagName('img');
// for (var i = 0; i < images.length; i++) {
// 	images[i].src = "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png";
// 	//images[i].src = "./icon.png";
// }

function getTextNodes() {
	var elements = document.querySelectorAll("body, body *");
	var results = [];

	for (var i = 0; i < elements.length; i++) {
		for (var j = 0; j < elements[i].childNodes.length; j++) {
			var child = elements[i].childNodes[0];
			if (elements[i].hasChildNodes() && child.nodeType == 3) {
				results.push(child);
			}
		}
	}

	return results;	
}

var textNodes = getTextNodes();
for (var i = 0; i < textNodes.length; i++) {
	var text = textNodes[i].nodeValue;
	textNodes[i].nodeValue = text.replace(/(\b\w)(\w+?\b\s)(\b\w?)(\w+?\b)/gi, "$3$2$1$4");
	//textNodes[i].nodeValue = text.replace(/[0-999]+?,?[0-999]+?,?[0-999]+?,?[0-999]+\sviews?/gi, "too many views" );
	
	// textNodes[i].nodeValue = text.replace(/[^,][0-999]+\sviews?/gi, "Don't Bother." );
	// textNodes[i].nodeValue = text.replace(/[^,][0-999]+,[0-999]+\sviews?/gi, "Probably Not Worth Your Time." );

// 777,273,823 views
// 6,732 views
// 4 views
// 1 view


// [0-9]?[0-9]?[0-9]?,?[0-9]?[0-9]?[0-9]?,?[0-9]?[0-9]?[0-9]?,?[0-9]?[0-9]?[0-9]\sviews



// add to cart
// add to shopping cart
// add to your shopping cart

// addToCart
// Add-to-shopping-cart
//add([ -_.])?to\1?(\w+)?\1?(\w+)?\1?cart





	//add\s(\w+\s)(\w+\s)?(\w+\s)?cart
}

