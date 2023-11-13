import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DataTable from "./data-table";

const mockRows = [
  {
    fname: "Suyog",
    email: "suyog@example.com",
    consents: ["yes for email", "yes for ads"],
  },
  { fname: "sk", email: "sk@example.com", consents: ["yes for email", "test"] },
];

describe("DataTable Component", () => {
  it("renders the component with provided data", () => {
    render(<DataTable rows={mockRows} page={1} rowsPerPage={5} />);

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByLabelText("consent table")).toBeInTheDocument();

    // Check itable cells are rendered
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Consents")).toBeInTheDocument();

    // Check table rows are rendered
    expect(screen.getByText("Suyog")).toBeInTheDocument();
    expect(screen.getByText("sk@example.com")).toBeInTheDocument();
    expect(screen.getByText("yes for email, yes for ads")).toBeInTheDocument();
  });

  it("renders the correct number of rows based on rowsPerPage prop", () => {
    render(<DataTable rows={mockRows} page={1} rowsPerPage={1} />);

    // Check if only one row is rendered
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(2); // Header row + one data row
  });

  it("renders the correct content in cells", () => {
    render(<DataTable rows={mockRows} page={1} rowsPerPage={5} />);

    // Displaying correct data
    expect(screen.getByText("Suyog")).toBeInTheDocument();
    expect(screen.getByText("suyog@example.com")).toBeInTheDocument();
    expect(screen.getByText("yes for email, yes for ads")).toBeInTheDocument();
  });
});
