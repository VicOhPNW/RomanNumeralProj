import { ConvertToRomanNumeral } from './../src/Number.js';

describe('ConvertToRomanNumeral', function() {

    it('should test whether it returns the same number as input', function() {

      expect(ConvertToRomanNumeral(1)).toEqual(1);

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