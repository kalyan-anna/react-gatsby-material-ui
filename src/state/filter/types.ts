export const FILTER_BY_KEYWORD = 'filter/filterByKeyword';

export interface FilterState {
  filters: {
    keyword: string;
  };
}
