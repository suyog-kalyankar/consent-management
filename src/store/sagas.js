import { all, fork } from "redux-saga/effects";
import ConsentSaga from "./consent-store/saga";

export default function* rootSaga() {
    yield all([fork(ConsentSaga)]);
}