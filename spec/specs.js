describe('pigLatinConvert', function() {
  it("When the first letter in word is a vowel, we add 'ay' at the end: atom -> atomay", function() {
    expect(pigLatinConvert("Atom")).to.equal("atomay");
  });

  it("When the first letter is a consonant, move them to the end of the word and add \"ay\" to the end: -> duck -> uckday", function(){
    expect(pigLatinConvert("duck")).to.equal("uckday");
  });

  it("When more than one letter are consonants, move them to the end of the word and add \"ay\" to the end", function(){
    expect(pigLatinConvert("thick")).to.equal("ickthay");
  });

  it("When the vowel is a \"u\", check for a \"q\" right before it: quit -> itquay", function(){
    expect(pigLatinConvert("quit")).to.equal("itquay");
  });

  it("When the vowel is a \"u\", check for a \"q\" right before it: under -> underay", function(){
    expect(pigLatinConvert("under")).to.equal("underay");
  });

  it("When the vowel is a \"u\", check for a \"q\" right before it: wrtquedf -> edfwrtquay", function(){
    expect(pigLatinConvert("wrtquedf")).to.equal("edfwrtquay");
  });

  it("Squeal -> ealsquay", function(){
    expect(pigLatinConvert("squeal")).to.equal("ealsquay");
  });

  it("Test for \"y\" not being the first letter: style -> ylestay", function(){
    expect(pigLatinConvert("style")).to.equal("ylestay");
  });

  it("Test for \"y\" being the first letter: year-> earyay", function(){
    expect(pigLatinConvert("year")).to.equal("earyay");
  });

  //sentances
  it("Two words: The dog", function(){
    expect(pigLatinConvert("The dog")).to.equal("ethay ogday");
  });

  it("Two words: This dog", function(){
    expect(pigLatinConvert("This dog")).to.equal("isthay ogday");
  });

  it("Phrase: This dog is very quick and smelly =>>", function(){
    expect(pigLatinConvert("This dog is very quick and smelly")).to.equal("isthay ogday isay eryvay ickquay anday ellysmay");
  });



});
