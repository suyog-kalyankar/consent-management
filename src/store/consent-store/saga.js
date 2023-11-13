import { takeLatest, put, call } from "redux-saga/effects";
import { fetchConsents, postConsent } from "../../api/consent-api";
import { GET_CONSENTS, POST_CONSENT } from "./action-types";
import {
  getConsentsFailure,
  getConsentsSuccess,
  postConsentFailure,
  postConsentSuccess,
} from "./actions";

function* onPostConsent({ payload: consent }) {
  try {
    const response = yield call(postConsent, consent);
    yield put(postConsentSuccess(response));
  } catch (error) {
    yield put(postConsentFailure(error.response));
  }
}

function* onGetConsents() {
  try {
    const response = yield call(fetchConsents);
    yield put(getConsentsSuccess(response));
  } catch (error) {
    yield put(getConsentsFailure(error.response));
  }
}

function* ConsentSaga() {
  yield takeLatest(POST_CONSENT, onPostConsent);
  yield takeLatest(GET_CONSENTS, onGetConsents);
}

export default ConsentSaga;
