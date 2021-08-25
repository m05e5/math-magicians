import React from 'react';

import CalculatorPage from '../CalculatePage';

const ReactTestRenderer = require('react-test-renderer');

it('Creates a snapshot of the Calculate page and it should match the previous one', () => {
  const tree = ReactTestRenderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
