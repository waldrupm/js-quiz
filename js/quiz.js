// Create a 2-dimensional array with 5 questions and 5 answers
let questions = [
  ["Which side of a chicken has more feathers?", "The outside"],
  ["What do you call a magician who has lost all their magic?", "Ian"],
  ["How many hipsters does it take to change a lightbulb?", "Oh it's a really obscure number, you've probably never heard of it"],
  ["How do you make Lady Gaga cry?", "Poker face"],
  ["Why can't your nose be 12 inches long?", "Because then it'd be a foot"]
];

// This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML += message;
}

// This code snippet builds out the HTML list. 
function buildList(arr) {
  var listHTML = "<ol style='color:gray'>";
    for(var i=0;i<arr.length;i++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

let correct = [];
let wrong = [];
// Create a FOR loop that loops through your 2-dimensional array. Create variables for quesions, answers and reponses respectively. Make sure the
// questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
// correct and how many answers you have wrong. 
//
// EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
// to accomplish this is very beneficial. Do your best!
questions.forEach(question => {
  let answer = prompt(question[0]).toLowerCase();
  if (answer === question[1].toLowerCase()) {
    correct.push(question[0]);
  } else {
    wrong.push(question[0]);
  }
});

// For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.
let correctNumber = `<h4 style="color:gray">You got ${correct.length} questions right.`;
let correctHeader = "<h4>You got these questions correct:</h4>";
let wrongHeader = "<h4>You got these questions wrong:</h4>";

print(correctNumber);
print(correctHeader);
print(buildList(correct));
print(wrongHeader);
print(buildList(wrong))