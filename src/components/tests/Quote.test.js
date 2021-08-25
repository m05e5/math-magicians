import React from 'react';

import Quote from '../Quote';

const ReactTestRenderer = require('react-test-renderer');

it('Creates a snapshot of the quote page and it should match the previous one', () => {
  const tree = ReactTestRenderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
