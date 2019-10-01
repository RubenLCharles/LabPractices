document.getElementById("textBox").addEventListener("click", createTodo;

function createTodo() {
    var textBox = document.getElementById("textBox").value;
    document.getElementById("TodoDiv").innerHTML += textBox;
}