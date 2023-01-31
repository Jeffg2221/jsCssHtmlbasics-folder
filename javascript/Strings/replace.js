let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft","W3Schools");

console.log(newText)


let text2 = "Please visit Microsoft and Microsoft!";
// the Microsoft/g replaces all matches 
let newText2 = text2.replace(/Microsoft/g,"W3Schools");

console.log(newText2)