import operate from '../logic/operate';

describe('checking operators', () => {
  const firstNumber = 8;
  const secondNumber = 7;
  it('test the result of + operation', () => {
    const result = operate(firstNumber, secondNumber, '+');
    expect(result).toBe('15');
  });
  it('test the result of - operation', () => {
    const result = operate(firstNumber, secondNumber, '-');
    expect(result).toBe('1');
  });
  it('test the result of x operation', () => {
    const result = operate(firstNumber, secondNumber, 'x');
    expect(result).toBe('56');
  });
  it('test the result of  ÷ operation', () => {
    const result = operate(secondNumber, firstNumber, '÷');
    expect(result).toBe('0.875');
  });
});
