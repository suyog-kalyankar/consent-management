import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TabPanel } from "./tab-panel";

describe("TabPanel component", () => {
  const childrenContent = "This is children comp";

  it("renders children when the value is equal to the index", () => {
    // Arrange
    render(
      <TabPanel value={0} index={0}>
        {childrenContent}
      </TabPanel>
    );

    // Assert
    expect(screen.getByText(childrenContent)).toBeInTheDocument();
  });

  it("does not render children when the value is not equal to the index", () => {
    // Arrange
    render(
      <TabPanel value={0} index={1}>
        {childrenContent}
      </TabPanel>
    );

    // Assert
    expect(screen.queryByText(childrenContent)).toBeNull();
  });

  it("applies the correct aria attributes", () => {
    // Arrange
    render(
      <TabPanel value={0} index={0}>
        {childrenContent}
      </TabPanel>
    );

    // Assert
    expect(screen.getByRole("tabpanel")).toHaveAttribute(
      "aria-labelledby",
      "vertical-tab-0"
    );
  });

  it("applies the correct styles", () => {
    // Arrange
    render(
      <TabPanel value={0} index={0}>
        {childrenContent}
      </TabPanel>
    );

    // Assert
    expect(screen.getByRole("tabpanel")).toHaveStyle("width: 100%");
  });
});
