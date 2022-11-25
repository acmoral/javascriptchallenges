function rot13(str) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    var newString = '';
    for(const letter of str){
        const indexOldLetter = alphabet.indexOf(letter);
        if((/[^a-z0-9]/gi).test(letter)){
            newString+= letter;
        }else{
            newString+= alphabet[(indexOldLetter+13)%alphabet.length];
        }
    }
    return newString;
  }
  
console.log(rot13("SERR PBQR PNZC"));

