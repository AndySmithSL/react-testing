import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from '../src/client/components/welcome.jsx';

describe('Welcome (Snapshot)', () => {

  it('Welcome renders hello world', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});

configure({adapter: new Adapter()});

describe('Welcome (shallow)', () => {
  it('Welcome renders hello world', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello world');
  });
});

describe('Welcome (mount)', () => {
  it('Welcome renders hello world', () => {
    const welcome = mount(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello world');
  });
});

describe('Welcome (render)', () => {
  it('Welcome renders hello world', () => {
    const welcome = render(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello world');
  });
});