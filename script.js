var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createDelBtn(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("delete");
  return btn;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDelBtn());
	li.addEventListener("click", toggleDoneAfterClick);
	li.children[0].addEventListener("click", deleteAfterClick);
	ul.appendChild(li);
	input.value = "";
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

function toggleDoneAfterClick(){
	this.classList.toggle("done");
}

function deleteAfterClick(){
	ul.removeChild(this.parentElement);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", toggleDoneAfterClick);
	lis[i].appendChild(createDelBtn());
}

var btns = document.querySelectorAll(".delete");

for (var i = 0; i < btns.length; i++){
	//btns[i].removeEventListener("click", toggleDoneAfterClick);
	btns[i].addEventListener("click", deleteAfterClick);
}
