var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var romanNumeral = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

export function ConvertToRomanNumeral (number) {
    var outputVar = '';
    var remainder;
    if (number >= 4000) {
      return "Number too big.";
    } else {
      for(;remainder !== 0;) {
        for (var i= romanNumeral.length; i >= 0; i--){
          if (number >= decimalValue[i]){
            outputVar = outputVar + romanNumeral[i];
            remainder = number - decimalValue[i];
            i = 0;
          }
        }
        number = remainder;
      }
    }
    return outputVar;
}
