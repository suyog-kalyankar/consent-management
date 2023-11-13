import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import ConsentForm from ".";
import store from "../../store";

// Mocking dependencies
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock the postConsent function
jest.mock("../../store/consent-store/actions", () => ({
  postConsent: jest.fn(),
}));

describe("ConsentForm component", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("renders UserInfo and ConsentSelector components", () => {
    // Arrange
    render(
      <Provider store={store}>
        <ConsentForm />
      </Provider>
    );
    // Assert
    expect(screen.getByText("Full name")).toBeInTheDocument();
    expect(screen.getByText("Email Address")).toBeInTheDocument();
    expect(screen.getByText("I agree to:")).toBeInTheDocument();
    expect(screen.getByText("Give Consent")).toBeInTheDocument();
  });

  it("handles user input changes", () => {
    render(
      <Provider store={store}>
        <ConsentForm />
      </Provider>
    );
    // Act
    const fname = screen.getByTestId("f-name");
    const email = screen.getByTestId("email");
    fireEvent.change(fname, {
      target: { value: "Suyog K" },
    });
    fireEvent.change(email, {
      target: { value: "suyog@gmail.com" },
    });

    // Assert
    expect(screen.getByTestId("f-name").value).toBe("Suyog K");
    expect(screen.getByTestId("email").value).toBe("suyog@gmail.com");
  });

  it("handles consent selection", () => {
    // Act
    render(
      <Provider store={store}>
        <ConsentForm />
      </Provider>
    );
    const fname = screen.getByTestId("f-name");
    const email = screen.getByTestId("email");
    fireEvent.change(fname, {
      target: { value: "Suyog K" },
    });
    fireEvent.change(email, {
      target: { value: "suyog@gmail.com" },
    });
    fireEvent.click(screen.getByText("Receive newsletter"));
  });

  it("disables the button when no consents are selected", () => {
    render(
      <Provider store={store}>
        <ConsentForm />
      </Provider>
    );
    // Assert
    expect(screen.getByRole("button", { name: "Give Consent" })).toBeDisabled();
  });
});
