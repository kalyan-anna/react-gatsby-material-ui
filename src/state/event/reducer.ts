import { apiError, featuredEventsLoaded, loadEvents, popularEventsLoaded } from './actions';

import { EventState } from './types';
import { createReducer } from '@reduxjs/toolkit';
import keyBy from 'lodash.keyby';

const initialState: EventState = {
  loading: {
    loadingFeaturedEvents: false,
    loadingPopularEvents: false,
    popularEventsLoaded: false,
    featuredEventsLoaded: false,
    apiError: '',
  },
  popular: {},
  featured: {},
};

export const eventReducer = createReducer<EventState>(initialState, builder => {
  builder.addCase(loadEvents, state => {
    state.loading.loadingFeaturedEvents = true;
    state.loading.loadingPopularEvents = true;
    state.loading.popularEventsLoaded = false;
    state.loading.featuredEventsLoaded = false;
    state.loading.apiError = '';
  });

  builder.addCase(apiError, (state, { payload }) => {
    state.loading.loadingFeaturedEvents = false;
    state.loading.loadingPopularEvents = false;
    state.loading.apiError = payload;
  });

  builder.addCase(featuredEventsLoaded, (state, { payload }) => {
    state.loading.loadingFeaturedEvents = false;
    state.loading.featuredEventsLoaded = true;
    state.featured = {
      ...keyBy(payload, e => e.id)
    }
  });

  builder.addCase(popularEventsLoaded, (state, { payload }) => {
    state.loading.loadingPopularEvents = false;
    state.loading.popularEventsLoaded = true;
    state.popular = {
      ...keyBy(payload, e => e.id)
    }
  });
});
