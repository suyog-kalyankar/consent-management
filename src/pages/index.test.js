// Home.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Home from ".";

describe("Home Component", () => {
  it("renders the component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByRole("button", { name: "Give Consent" })
    ).toBeInTheDocument();
  });

  it('navigates to "give-consent" when the component is mounted', () => {
    render(
      <Provider store={store}>
        <BrowserRouter initialEntries={["/"]}>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("I agree to:")).toBeInTheDocument();
  });

  it('switches tabs and renders "ConsentForm" component when "Give Consent" tab is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: "Give Consent" }));

    expect(screen.getByText("I agree to:")).toBeInTheDocument();
  });

  it('switches tabs and renders "Consents" component when "Collected Consent" tab is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole("tab", { name: "Collected consents" }));

    expect(
      screen.getByText("Loading ...")
    ).toBeInTheDocument();
  });
});
