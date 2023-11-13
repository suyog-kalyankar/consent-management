import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConsentSelector from "./consent-selector";

// Mocking the constants
jest.mock("../../constants/app-constants", () => ({
  CONSENTS_LIST: { 1: "Consent 1", 2: "Consent 2" },
}));

describe("ConsentSelector component", () => {
  it("renders checkboxes with consent labels", () => {
    // Arrange
    render(<ConsentSelector />);

    // Assert
    expect(screen.getByText("Consent 1")).toBeInTheDocument();
    expect(screen.getByText("Consent 2")).toBeInTheDocument();
  });
});
