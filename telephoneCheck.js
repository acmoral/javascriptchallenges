function telephoneCheck(str) {
    //first check if lenght is appropiate
    // 
    var Opens =/\(+/;
    var Closes = /\)+/;
    var re = /^1?[- ]?\(+(\d{3})\)+[- ]?(\d{3})[- ]?(\d{4})$/;
    var re2 = /^1?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    if(Opens.test(str) && Closes.test(str) ){
        var Bool = re.test(str);
    }else{
        var Bool = re2.test(str);
    }
    return Bool;
  }
  
console.log(telephoneCheck("1 (555)555-5555"));
