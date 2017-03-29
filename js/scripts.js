// business logic

var translateWord = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var charArray = word.split("");
  var consonants = [];
  if (charArray[0] === "y") {
    consonants.push(charArray.shift());
  }
  var i = 0;
  while ( !vowels.includes(charArray[i]) && i < charArray.length ) {
    consonants.push(charArray[i]);
    i++;
  }
  if(consonants[consonants.length - 1] === 'q') {
    consonants.push(charArray.shift());
  }
  translatedArray = charArray.splice(0, consonants.length);
  return charArray.concat(consonants).join('') + 'ay';
}

var translateString = function(string) {
  var wordArray = string.split(" ");
  var translated = [];
  wordArray.forEach(function(word){
    translated.push(translateWord(word));
  });
  return translated.join(' ');
}
// user interface logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var result = translateString(userInput);
    $("#result").show();
    $(".phrase").text(result);
  });
});
