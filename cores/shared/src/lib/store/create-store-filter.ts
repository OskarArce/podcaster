import { atom } from 'nanostores';
import type { Filter, QueryParams } from '../model';

const INIT: Filter = {} as const;

export const createStoreFilter = <T>(state?: T) => ({
  $filter: atom<T>(state ?? (INIT as T)),

  setFilter: function (state: T) {
    this.$filter.set({
      ...this.$filter.get(),
      ...state,
    } as T);
  },

  initFilter: function () {
    this.$filter.set(state ?? (INIT as T));
  },

  toQueryParamsFilter: function () {
    return this.$filter.get() as QueryParams;
  },

  clearFilter: function () {
    this.$filter.set(INIT as T);
  },
});
