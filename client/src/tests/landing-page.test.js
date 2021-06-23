import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../pages/landing-page/landing-page.js';

describe('<LandingPage>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it('sanity test', () => {
    expect(true).toBe(true);
  });

  it('renders LandingPage component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
