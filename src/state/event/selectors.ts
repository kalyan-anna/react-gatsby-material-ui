import { Event } from './types';
import { RootState } from 'state/store';
import { createSelector } from '@reduxjs/toolkit';
import { filterSelectors } from '@state/filter';

const selectEventState = (state: RootState) => state.event;

const isAlreadyLoaded = createSelector(
  selectEventState,
  ({ loading }) => loading.featuredEventsLoaded && loading.popularEventsLoaded,
);

const isLoading = createSelector(
  selectEventState,
  ({ loading }) =>
    loading.loadingFeaturedEvents || loading.loadingPopularEvents,
);

const apiError = createSelector(
  selectEventState,
  ({ loading }) => loading.apiError,
);

const featuredEvents = createSelector(selectEventState, ({ featured }) =>
  Object.values(featured),
);

const popularEvents = createSelector(selectEventState, ({ popular }) =>
  Object.values(popular),
);

const filteredFeatureEvents = createSelector(
  featuredEvents,
  filterSelectors.selectKeyword,
  (events, keyword) => filterEvents(events, keyword),
);

const filteredPopularEvents = createSelector(
  popularEvents,
  filterSelectors.selectKeyword,
  (events, keyword) => filterEvents(events, keyword),
);

function filterEvents(events: Event[], keyword: string): Event[] {
  const trimedKeyword = (keyword && keyword.trim()) || '';
  if (!trimedKeyword) {
    return events;
  }

  return events.filter(
    e => e.title.includes(trimedKeyword) || e.location.includes(trimedKeyword),
  );
}

export const eventSelectors = {
  isAlreadyLoaded,
  isLoading,
  apiError,
  featuredEvents,
  popularEvents,
  filteredFeatureEvents,
  filteredPopularEvents,
};
