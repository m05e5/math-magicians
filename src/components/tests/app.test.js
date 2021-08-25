import React from 'react';

import App from '../../App';

const ReactTestRenderer = require('react-test-renderer');

it('should render the Calculator App  component', () => {
  const tree = ReactTestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
