import { Event, LOAD_EVENTS } from './types';
import { apiError, featuredEventsLoaded, popularEventsLoaded } from './actions';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../services/api';
import snakecase from 'lodash.snakecase';

function addIdToEvent(data: any): Event[] {
  return data.map((item: any) => ({ ...item, id: snakecase(item.title) }));
}

function* loadFeatureEvents() {
  yield delay(2000); // just for demo

  try {
    const data = yield call(api.fetchFeatureEvents);
    const improvedData = addIdToEvent(data);
    yield put(featuredEventsLoaded(improvedData));
  } catch (error) {
    console.error(error);
    yield put(apiError(error));
  }
}

function* loadPopularEvents() {
  yield delay(3000); // just for demo

  try {
    const data = yield call(api.fetchPopularEvents);
    const improvedData = addIdToEvent(data);
    yield put(popularEventsLoaded(improvedData));
  } catch (error) {
    yield put(apiError(error));
  }
}

export const eventSaga = [
  takeLatest(LOAD_EVENTS, loadFeatureEvents),
  takeLatest(LOAD_EVENTS, loadPopularEvents),
];
