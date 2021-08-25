import React from 'react';

import Home from '../Home';

const ReactTestRenderer = require('react-test-renderer');

it('Creates a snapshot of the home page and it should match the previous one', () => {
  const tree = ReactTestRenderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
