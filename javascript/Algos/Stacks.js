// Stacks!

// functions for stacks - push , pop, peek , length

// We are doing Palindromes which are words that spelt the same forward or backwards
// Example: Tenet

var letters = []; // this is a stack

var word = "racecar"


var rword = "";

// Put letters of word into stack
for(var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(var i = 0; i < word.length; i++) {
    rword += letters.pop();
    console.log(rword)
}
// WWhen the letters are popped off they are being assigned to rword as they are being popped off. Since pop() starts from the last letter or index it takes that popped letter  to add to the beggining of the list in rword and then continues to add in index order


if(rword === word){
    console.log(word + " is a palidrome.");
}else{
    console.log(word + " is not a palindrome");
}

