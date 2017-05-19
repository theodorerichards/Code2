var button;

function setup() {
	noCanvas();
	button = createButton('PUSH ME');
	button.mousePressed(changeColor);
	console.log('popup console log!');
}

function draw() {

}

function changeColor() {

	chrome.tabs.executeScript(null, 
		{
			//code: "document.body.style.backgroundColor='red';"
			file: "changeColor.js"
		}
	);
	//window.close();
}