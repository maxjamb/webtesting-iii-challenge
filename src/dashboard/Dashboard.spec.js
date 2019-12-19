// Test away
import Dashboard from "./Dashboard";
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);
let wrapper;
beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe("Gate", () => {
  it("its `open` at initial render", () => {
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
  });
  it("its `unlocked` at initial render", () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });
  it("cannot toggle closed or open if locked", () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/open gate/i));
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
  });
});

describe("Dashboard component", () => {
  it("Displays Controls", () => {
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
  });
  it("Shows display", () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
  });
});
