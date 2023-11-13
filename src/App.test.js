import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";
import { CONSENTS_URL, GIVE_CONSENT_URL } from "./constants/app-constants";
import { Provider } from "react-redux";
import store from "./store";

describe("App component", () => {
  it('renders Home component for "/" path', () => {
    // Arrange
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Assert
    expect(
      screen.getByRole("tab", { name: "Give Consent" })
    ).toBeInTheDocument(); // Adjust this based on the content of your Home component
  });

  it('renders Home component for "/give-consent" path', () => {
    // Arrange
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[GIVE_CONSENT_URL]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Assert
    expect(
      screen.getByRole("tab", { name: "Give Consent" })
    ).toBeInTheDocument();
  });

  it('renders Home component for "/consents" path', () => {
    // Arrange
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[CONSENTS_URL]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Assert
    expect(
      screen.getByRole("tab", { name: "Collected consents" })
    ).toBeInTheDocument();
  });
});
