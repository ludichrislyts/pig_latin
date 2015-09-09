function pigLatinConvert(phrase) {
  phrase = phrase.toLowerCase();
  var alphaPhrase = phrase.replace(/[^A-Za-z\s]/g, "");
  console.log("phrase to lower with regex and keep spaces? " + alphaPhrase);
  var array_of_converted_words = [];

  if (phrase.match(/\s/)) {
    console.log("it matched");
    var array_of_words = phrase.split(" ");

    for (var i = 0; i < array_of_words.length; i++) {
      array_of_converted_words[i] = pigLatinConvertWord(array_of_words[i]);
    }
    phrase = array_of_converted_words.join(" ");
  }
  else {
    phrase = pigLatinConvertWord(phrase);
  }
  return phrase;
}

function pigLatinConvertWord(word) {
  var letters_to_cut = "";


  for (var i = 0; i <= (word.length + 1); i++) {
    var letter = word.slice(0, 1);
    //debugger;
    console.log("letter = " + letter + ". i = " + i);
    if ((letter === 'a') || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      console.log("hi");
      if (letter === "u"){
        if (letters_to_cut[i-1] === "q") {
          console.log("we are inside. letters_to_cut[i-1] = " + letters_to_cut[i-1]);
          letters_to_cut += word.substr(0, 1);
          word = word.slice(1,word.length);
        }
      }
      word += letters_to_cut;
      word += 'ay';
      return word;
    }
    else {
      letters_to_cut += word.substr(0, 1);
      word = word.slice(1,word.length);
      console.log("letters_to_cut = " + letters_to_cut + ". word = " + word + ". letter = " + letter + " word length = " + word.length);
    }
}

  return word;
}
$(document).ready(function(){
  
})
