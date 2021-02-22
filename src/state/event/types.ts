export const LOAD_EVENTS = 'event/loadEvents';
export const POPULAR_EVENTS_LOADED = 'event/popularEventsLoaded';
export const FEATURED_EVENTS_LOADED = 'event/featuredEventsLoaded';
export const API_ERROR = 'event/apiError';

export interface EventDetails {
  title: string;
  img: string;
  location: string;
  id: string;
}

export interface EventState {
  loading: {
    loadingPopularEvents: boolean;
    loadingFeaturedEvents: boolean;
    popularEventsLoaded: boolean;
    featuredEventsLoaded: boolean;
    apiError: string;
  };
  popular: {
    [id: string]: EventDetails;
  };
  featured: {
    [id: string]: EventDetails;
  };
}
