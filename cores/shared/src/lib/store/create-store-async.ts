import { atom } from 'nanostores';
import type { Query, QueryError } from '.';

const INIT = {
  data: null,
  error: null,
  loading: false,
} as const;

export const createStoreAsync = <T>() => ({
  $: atom<Query<T>>(INIT),

  update: function (store: Query<T>) {
    this.$.set({
      ...this.$.get(),
      ...store,
    });
  },
  setLoading: function (loading?: boolean) {
    this.update({
      loading: loading ?? !this.$.value?.loading,
      error: null,
      data: null,
    });
  },
  setData: function (data: T) {
    this.update({
      data,
      loading: false,
      error: null,
    });
  },
  setError: function (error: QueryError) {
    this.update({
      error,
      loading: false,
      data: null,
    });
  },

  initialize: function () {
    this.update(INIT);
  },
});
