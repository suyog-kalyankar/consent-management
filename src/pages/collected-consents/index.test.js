import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mock_data } from "../../mock-data/consents";
import Consents from ".";

// Mock the Redux store
const mockStore = configureStore([]);

describe("Consents Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ConsentReducer: {
        consents: [mock_data],
        loadingConsent: false,
      },
    });
  });

  it("renders the component with data", async () => {
    render(
      <Provider store={store}>
        <Consents />
      </Provider>
    );
    expect(screen.getByText("All Consents")).toBeInTheDocument();

    expect(screen.getByLabelText("consent table")).toBeInTheDocument();

    expect(screen.getByLabelText("table-pagination")).toBeInTheDocument();
  });

  it("dispatches getConsents action on mount", async () => {
    render(
      <Provider store={store}>
        <Consents />
      </Provider>
    );

    // Wait for the useEffect to complete (dispatch getConsents)
    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual({ type: "GET_CONSENTS" });
    });
  });
});
