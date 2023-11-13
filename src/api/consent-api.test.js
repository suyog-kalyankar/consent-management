import { mock_data } from "../mock-data/consents";
import { fetchConsents, postConsent } from "./consent-api";

// Mocking the fetch function
global.fetch = jest.fn();

describe('API Functions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('fetchConsents', () => {
    it('should fetch consents successfully', async () => {
      const mockResponse = mock_data;

      // Mocking the fetch function to return a successful response
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const result = await fetchConsents();

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/consents');
    });

    it('should handle fetch error and return mock data', async () => {
      const mockResponse = mock_data;

      // Mocking the fetch function to throw an error
      global.fetch.mockRejectedValue(new Error('Fetch error'));

      const result = await fetchConsents();

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/consents');
    });
  });

  describe('postConsent', () => {
    it('should post consent successfully', async () => {
      const inputData = {fname: "SUYOG k", email: "suyog.kalyankar@gmail.com", consents: ["Receive newsletter"]};
      const mockResponse = mock_data;

      // Mocking the fetch function to return a successful response
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const result = await postConsent(inputData);

      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/consents', {
        method: 'POST',
        body: JSON.stringify(inputData),
      });
    });
  });
});
