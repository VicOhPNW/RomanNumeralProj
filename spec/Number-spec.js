import { ConvertToRomanNumeral } from './../src/Number.js';

describe('ConvertToRomanNumeral', function() {



    it('should test whether it returns corresponding first roman numerals1', function() {
        var number = ConvertToRomanNumeral(5);
        expect(number).toEqual("V");
      });

      it('should test whether it returns corresponding first roman numerals2', function() {
        var number = ConvertToRomanNumeral(1);
        expect(number).toEqual("I");
      });

      it('should test whether it returns corresponding first roman numerals3', function() {
        var number = ConvertToRomanNumeral(100);
        expect(number).toEqual("C");
      });

      it('should test whether it returns the entire roman numeral', function() {
        var number = ConvertToRomanNumeral(3);
        expect(number).toEqual("III");
      });    
      
      it('should test whether it returns a number too big for a roman numeral', function() {
        var number = ConvertToRomanNumeral(4011);
        expect(number).toEqual("Number too big.");
      });         
  
  });

//   describe('Triangle', function() {
//     var reusableTriangle;
  
//     beforeEach(function() {
//       reusableTriangle = new Triangle(5, 5, 5);
//     });
  
//     it('should show how beforeEach() works', function() {
//       console.log(reusableTriangle);
// //     });
//   });