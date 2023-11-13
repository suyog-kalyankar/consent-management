import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserInfo from "./user-info";

describe("UserInfo component", () => {
  it("renders TextField components", () => {
    // Arrange
    render(
      <UserInfo name="" email="" onFullName={() => {}} onEmail={() => {}} />
    );

    // Assert
    expect(screen.getByText("Full name")).toBeInTheDocument();
    expect(screen.getByText("Email Address")).toBeInTheDocument();
  });

  it("handles user input changes for full name", () => {
    // Arrange
    const setFullNameMock = jest.fn();
    render(
      <UserInfo
        name=""
        email=""
        onFullName={setFullNameMock}
        onEmail={() => {}}
      />
    );

    // Act
    const fname = screen.getByTestId("f-name");
    fireEvent.change(fname, {
      target: { value: "Suyog K" },
    });

    // Assert
    expect(setFullNameMock).toHaveBeenCalledWith("Suyog K");
  });

  it("handles user input changes for email", () => {
    // Arrange
    const setEmailMock = jest.fn();
    render(
      <UserInfo
        name=""
        email=""
        onFullName={() => {}}
        onEmail={setEmailMock}
      />
    );

    // Act
    const email = screen.getByTestId("email");
    fireEvent.change(email, {
      target: { value: "suyog@gmail.com" },
    });

    // Assert
    expect(setEmailMock).toHaveBeenCalledWith("suyog@gmail.com");
  });

  it("does not set full name when input is a single space", () => {
    // Arrange
    const setFullNameMock = jest.fn();
    render(
      <UserInfo
        name=""
        email=""
        onFullName={setFullNameMock}
        onEmail={() => {}}
      />
    );

    // Act
    const fname = screen.getByTestId("f-name");
    fireEvent.change(fname, {
      target: { value: " " },
    });

    // Assert
    expect(setFullNameMock).not.toHaveBeenCalled();
  });
});
