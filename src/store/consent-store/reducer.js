import { GET_CONSENTS, GET_CONSENTS_FAIL, GET_CONSENTS_SUCCESS, POST_CONSENT, POST_CONSENT_FAIL, POST_CONSENT_SUCCESS } from "./action-types";

const initialState = {
    consents: [],
    loadingConsent: false,
    loadingPostConsent: false,
    error: {
        message: "",
    },
};

const ConsentReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_CONSENT:
            state = { ...state, consents: [action.payload, ...state.consents], loadingPostConsent: true };
            break;
        case POST_CONSENT_SUCCESS:
            state = { ...state, consents: [action.payload, ...state.consents], loadingPostConsent: false };
            break;
        case POST_CONSENT_FAIL:
            state = {
                ...state,
                error: {
                    message: "Failed to post consent",
                },
                loadingPostConsent: false,
            }
            break;
        case GET_CONSENTS:
            state = { ...state, loadingConsent: true };
            break;
        case GET_CONSENTS_SUCCESS:
            state = { ...state, consents: action.payload.data, loadingConsent: false };
            break;
        case GET_CONSENTS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Failed to get consents",
                },
                loadingConsent: false,
            }
            break;
        default: 
            state = { ...state };
    }
    return state;
}

export default ConsentReducer;