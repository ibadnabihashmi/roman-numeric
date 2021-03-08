import RomanNumericService from "./roman-numeric.service";

describe('RomanNumericService', () => {
  it('converts number to roman', () => {
    expect(RomanNumericService.toRoman(123)).toEqual('CXXIII');
  });
  
  it('returns error when tries to converts number to roman', () => {
    expect(RomanNumericService.toRoman(5000)).toEqual(-1);
  });
  
  it('converts roman to number', () => {
    expect(RomanNumericService.toNumeric('CXXIII')).toEqual(123);
  });
});