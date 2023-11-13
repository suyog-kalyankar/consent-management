import { mock_data } from '../../mock-data/consents';
import {
    postConsent,
    postConsentSuccess,
    postConsentFailure,
    getConsents,
    getConsentsSuccess,
    getConsentsFailure,
  } from './actions';
  
  describe('Redux Action Creators', () => {
    const mockConsent = mock_data
    const mockError = new Error('Test error');
  
    it('creates a POST_CONSENT action with the provided consent', () => {
      const action = postConsent(mockConsent);
      expect(action).toEqual({
        type: 'POST_CONSENT',
        payload: mockConsent,
      });
    });
  
    it('creates a POST_CONSENT_SUCCESS action with the provided consent', () => {
      const action = postConsentSuccess(mockConsent);
      expect(action).toEqual({
        type: 'POST_CONSENT_SUCCESS',
        payload: mockConsent,
      });
    });

    it('creates a POST_CONSENT_FAIL action with the provided error', () => {
      const action = postConsentFailure(mockError);
      expect(action).toEqual({
        type: 'POST_CONSENT_FAIL',
        payload: mockError,
      });
    });
  
    it('creates a GET_CONSENTS action', () => {
      const action = getConsents();
      expect(action).toEqual({
        type: 'GET_CONSENTS',
      });
    });
  
    it('creates a GET_CONSENTS_SUCCESS action with the provided consent', () => {
      const action = getConsentsSuccess(mockConsent);
      expect(action).toEqual({
        type: 'GET_CONSENTS_SUCCESS',
        payload: mockConsent,
      });
    });
  
    it('creates a GET_CONSENTS_FAIL action with the provided error', () => {
      const action = getConsentsFailure(mockError);
      expect(action).toEqual({
        type: 'GET_CONSENTS_FAIL',
        payload: mockError,
      });
    });
  });
  