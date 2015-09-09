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


  for (var i = 0; i < (word.length); i++) {
    var letter = word.slice(i, i+1);
    // check if the first letter is a vowel
    //if ((letter === 'a') || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    if ((letter.match(/[aeiou]/)) || (letter.match(/[y]/) && (letters_to_cut))) {
      // if the letter is a 'u', check if previous letter was a q
      if (letter === "u"){
        // if a 'u', take the u and q
        if (letters_to_cut[i-1] === "q") {
          letters_to_cut += word.substr(i, 1);
          word = word.slice(1,word.length);
        }
      }// if not, treat as normal
      word = word.slice(i,word.length);
      word += letters_to_cut;
      word += 'ay';
      return word;
    }
    else { // if letter is a consonant, put letter into letters_to_cut and shorten word by that letter
      letters_to_cut += word.substr(i, 1);

      console.log("letters_to_cut = " + letters_to_cut + ". word = " + word + ". letter = " + letter + " word length = " + word.length);
    }
  }

  return word;
}
$(document).ready(function(){
  $("form#pigLatinConvert").submit(function(event){
    var phrase = $("input#phrase").val();
    var result = pigLatinConvert(phrase);
    $("input#phrase").val('');

    $(".pig_latin_words").text(result);
    $(".pig_latin").show();
    event.preventDefault();
  });
});
