import { atom } from 'nanostores';

export const createStore = <T>(state: T) => ({
  $: atom<T>(state),

  update: function (state: T) {
    this.$.set({
      ...this.$.get(),
      ...state,
    } as T);
  },

  initialize: function () {
    this.update(state);
  },
});
