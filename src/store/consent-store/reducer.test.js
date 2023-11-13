import {
  POST_CONSENT,
  POST_CONSENT_SUCCESS,
  POST_CONSENT_FAIL,
  GET_CONSENTS,
  GET_CONSENTS_SUCCESS,
  GET_CONSENTS_FAIL,
} from "./action-types";
import ConsentReducer from "./reducer";

describe("ConsentReducer", () => {
  it("should handle POST_CONSENT", () => {
    const action = {
      type: POST_CONSENT,
      payload: {
        fname: "Suyog",
        email: "suyog@gmail.com",
        consents: ["Receive newsletter"],
      },
    };

    const newState = ConsentReducer(undefined, action);

    expect(newState.consents).toEqual([action.payload]);
    expect(newState.loadingPostConsent).toBe(true);
    expect(newState.error.message).toBe("");
  });

  it("should handle POST_CONSENT_SUCCESS", () => {
    const initialState = {
      consents: [],
      loadingPostConsent: true,
      error: { message: "" },
    };

    const action = {
      type: POST_CONSENT_SUCCESS,
      payload: {
        fname: "Suyog",
        email: "suyog@gmail.com",
        consents: ["Receive newsletter"],
      },
    };

    const newState = ConsentReducer(initialState, action);

    expect(newState.consents).toEqual([action.payload]);
    expect(newState.loadingPostConsent).toBe(false);
    expect(newState.error.message).toBe("");
  });

  it("should handle POST_CONSENT_FAIL", () => {
    const initialState = {
      consents: [],
      loadingPostConsent: true,
      error: { message: "" },
    };

    const action = {
      type: POST_CONSENT_FAIL,
    };

    const newState = ConsentReducer(initialState, action);

    expect(newState.consents).toEqual([]);
    expect(newState.loadingPostConsent).toBe(false);
    expect(newState.error.message).toBe("Failed to post consent");
  });

  it("should handle GET_CONSENTS", () => {
    const action = { type: GET_CONSENTS };

    const newState = ConsentReducer(undefined, action);

    expect(newState.loadingConsent).toBe(true);
    expect(newState.error.message).toBe("");
  });

  it("should handle GET_CONSENTS_SUCCESS", () => {
    const initialState = {
      consents: [],
      loadingConsent: true,
      error: { message: "" },
    };

    const action = {
      type: GET_CONSENTS_SUCCESS,
      payload: [
        {
          fname: "Suyog",
          email: "suyog@gmail.com",
          consents: ["Receive newsletter"],
        },
      ],
    };

    const newState = ConsentReducer(initialState, action);

    expect(newState.consents).toEqual(action.payload.data);
    expect(newState.loadingConsent).toBe(false);
    expect(newState.error.message).toBe("");
  });

  it("should handle GET_CONSENTS_FAIL", () => {
    const initialState = {
      consents: [],
      loadingConsent: true,
      error: { message: "" },
    };

    const action = { type: GET_CONSENTS_FAIL };

    const newState = ConsentReducer(initialState, action);

    expect(newState.consents).toEqual([]);
    expect(newState.loadingConsent).toBe(false);
    expect(newState.error.message).toBe("Failed to get consents");
  });
});
