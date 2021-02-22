import {
  API_ERROR,
  Event,
  FEATURED_EVENTS_LOADED,
  LOAD_EVENTS,
  POPULAR_EVENTS_LOADED,
} from './types';

import { createAction } from '@reduxjs/toolkit';

export const featuredEventsLoaded = createAction<Event[]>(
  FEATURED_EVENTS_LOADED,
);

export const popularEventsLoaded = createAction<Event[]>(POPULAR_EVENTS_LOADED);

export const loadEvents = createAction<void>(LOAD_EVENTS);

export const apiError = createAction<any>(API_ERROR);
