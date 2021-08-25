// import operate from '../logic/operate';
import calculate from '../logic/calculator';

describe('checking operators', () => {
  let myObject = {
    total: null,
    next: null,
    operation: null,
  };

  it('test the result of + operation', () => {
    myObject = {
      total: 5,
      next: 9,
      operation: '+',
    };

    const result = calculate(myObject, '=');

    expect(result).toMatchSnapshot({
      total: '14',
      next: null,
      operation: null,
    });
  });
  it('test the result of - operation', () => {
    myObject = {
      total: 5,
      next: 9,
      operation: '-',
    };

    const result = calculate(myObject, '=');

    expect(result).toMatchSnapshot({
      total: '-4',
      next: null,
      operation: null,
    });
  });
  it('test the result of +/-', () => {
    myObject = {
      total: 5,
      next: 9,
      operation: '-',
    };

    const result = calculate(myObject, '+/-');

    expect(result).toMatchSnapshot({
      next: '-9',
    });
  });
});
