import { GET_CONSENTS, GET_CONSENTS_FAIL, GET_CONSENTS_SUCCESS, POST_CONSENT, POST_CONSENT_FAIL, POST_CONSENT_SUCCESS } from "./action-types";

export const postConsent = (consent) => {
    return {
        type: POST_CONSENT,
        payload: consent,
    };
};

export const postConsentSuccess = (consent) => {
    return {
        type: POST_CONSENT_SUCCESS,
        payload: consent,
    };
};

export const postConsentFailure = (error) => {
    return {
        type: POST_CONSENT_FAIL,
        payload: error,
    };
};

export const getConsents = () => {
    return {
        type: GET_CONSENTS,
    };
};

export const getConsentsSuccess = (consent) => {
    return {
        type: GET_CONSENTS_SUCCESS,
        payload: consent,
    };
};

export const getConsentsFailure = (error) => {
    return {
        type: GET_CONSENTS_FAIL,
        payload: error,
    };
};