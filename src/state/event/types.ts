export const LOAD_EVENTS = 'todos/loadEvents';
export const POPULAR_EVENTS_LOADED = 'todos/popularEventsLoaded';
export const FEATURED_EVENTS_LOADED = 'todos/featuredEventsLoaded';
export const API_ERROR = 'todos/apiError';

export interface Event {
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
    [id: string]: Event;
  };
  featured: {
    [id: string]: Event;
  };
}
