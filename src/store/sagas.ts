import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchReports } from '../api';

export function* getLatestAllCountries() {
  //@ts-ignore
    const reports = yield call(fetchReports);
    yield put({ type: 'REPORTS', reports });
  }