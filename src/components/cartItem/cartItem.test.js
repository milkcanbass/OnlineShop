import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cartItem.component';
import { mockItem } from '../../../__mocks__/itemMock';

it('takeSnapshot', () => {
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
