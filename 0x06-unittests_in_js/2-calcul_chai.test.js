const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('handles adding tow rounded numbers when type is SUM', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });

  it('handles substracting two rounded numbers when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 5.9, 2.3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', -5.9, -2.3)).to.equal(-4);
  });

  it('handles dividing two rounded numbers when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
  });

  it('returns Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal(Error);
    expect(calculateNumber('DIVIDE', -4, 0)).to.equal(Error);
  });

  it('throws an error when an invalid type is provided', () => {
    expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
  });
});