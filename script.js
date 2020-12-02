var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElements = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

// toggle .done class 
for (let i = 0; i < listElements.length; i++) {
	listElements[i].onclick = function(e) {
		e.target.classList.toggle("done")
	}
	
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete!"))
	li.appendChild(delBtn)

	delBtn.onclick = removeItem;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Add delete button to list items
for (let i = 0; i < listElements.length; i++) {
	var delBtn = document.createElement("button")
	delBtn.appendChild(document.createTextNode("Delete!"))
	listElements[i].appendChild(delBtn)
	
	delBtn.onclick = removeItem
}

// Remove the selected item list by user
function removeItem(e) {
	e.target.parentNode.style.display = "none"
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
