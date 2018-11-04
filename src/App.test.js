import React from "react";
import ReactDOM from "react-dom";
// TODO this is very important - shallow
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

// TODO Create reuseable code
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

// Find by test attribute
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without errors", () => {
  const wrapper = setup();
  // <App /> = component-app
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("clicking button decrements counter display"),
  () => {
    const counter = 10;
    const wrapper = setup(null, { counter });
  };
