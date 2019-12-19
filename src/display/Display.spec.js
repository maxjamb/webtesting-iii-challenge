// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

afterEach(rtl.cleanup);

describe("Display component", () => {
  it("Displays if gate is closed", () => {
    const wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText(/open/i)).not.toBeInTheDocument();
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
  });
  it("Displays if gate is unlocked", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });
  it("Uses the red-led class when locked", () => {
    const wrapper = rtl.render(<Display locked={true} />);
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/locked/i)).toHaveClass("red-led");
    expect(wrapper.queryByText(/locked/i)).not.toHaveClass("green-led");
  });
  it("Uses the green-led class when open", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toHaveClass("green-led");
    expect(wrapper.queryByText(/open/i)).not.toHaveClass("red-led");
  });
  it("Displays if gate is open", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument();
  });
  it("Displays if gate is locked", () => {
    const wrapper = rtl.render(<Display locked={true} />);
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).not.toBeInTheDocument();
  });
  it("Uses the red-led class when closed", () => {
    const wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/closed/i)).toHaveClass("red-led");
    expect(wrapper.queryByText(/closed/i)).not.toHaveClass("green-led");
  });

  it("Uses the green-led class when unlocked", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).toHaveClass("green-led");
    expect(wrapper.queryByText(/unlocked/i)).not.toHaveClass("red-led");
  });
});
