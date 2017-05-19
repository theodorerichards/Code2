// Listen for messages and run receiver() when message is received.
chrome.runtime.onMessage.addListener(receiver);


// this is a slightly simpler version than that found in 09-script_to_popup.
// it doesn't check to make sure of the message id first and just grabs the data directly.
// but its the same idea.
function receiver(request, sender, sendResponse) {
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
    elements[i].style['color'] = request.color;
    elements[i].style['font-size'] = request.size + '%';
  }
}

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
  }
