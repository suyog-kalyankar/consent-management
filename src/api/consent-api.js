import { mock_data } from "../mock-data/consents";
const CONSENT_API_URL = "http://localhost:3000/consents";

// api call to fetch all consents
const fetchConsents = async () => {
    try {
        const response = await fetch(CONSENT_API_URL);
        return response.json();
    } catch (error) {
        return new Promise.resolve(mock_data);
    } finally {
        return mock_data;
    }
}

// api call to post a consent
const postConsent = async (data = {}) => {
    try {
        mock_data.data.unshift(data);
        const response = await fetch(CONSENT_API_URL, { method: "POST", body: JSON.stringify(data) });
        return response.json();
    } catch (error) {
        throw Promise.resolve(mock_data);
    }
}


export { fetchConsents, postConsent };