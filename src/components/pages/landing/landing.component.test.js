import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from './landing.component';

it('take initial snapshot', () => {
  expect(shallow(<LandingPage />)).toMatchSnapshot();
});
