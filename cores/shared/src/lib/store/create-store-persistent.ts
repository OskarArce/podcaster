import { persistentAtom } from '@nanostores/persistent';

export const createStorePersistent = <T>(name: string, state?: T) => ({
  $: persistentAtom<T | undefined>(name, state, {
    encode: JSON.stringify,
    decode: JSON.parse,
  }),

  update: function (state?: T) {
    this.$.set({
      ...this.$.get(),
      ...state,
    } as T);
  },

  initialize: function () {
    this.update(state);
    localStorage.removeItem(name);
  },
});
