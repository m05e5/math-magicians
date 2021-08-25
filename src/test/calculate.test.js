// import operate from '../logic/operate';
// import { Link } from 'react-router-dom';
// import renderer from 'react-test-renderer';
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

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Link to="/calculator" className="navLink">calculator</Link>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
