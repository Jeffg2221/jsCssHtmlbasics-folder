// If the separator is "", the returned array will be an array of single characters:

let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
}
document.getElementById("demo").innerHTML = text;