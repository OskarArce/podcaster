import {
  createStoreAsync,
  createStoreFilter,
} from '@podcaster/shared';
import type { Podcast, PodcastId, FilterPodcasts } from '../../model';

export const store = {
  ...createStoreAsync<Podcast[]>(),
  ...createStoreFilter<Partial<FilterPodcasts>>(),
  getById: function (podcastId: PodcastId) {
    return this.$.value?.data?.find((podcast: Podcast) => podcast.id === podcastId);
  },
  // TODO: uncomment when overriding is required (because of validation or something else)
  // toQueryParamsFilter: function () {
  //   return this.$filter.get() as QueryParams;
  // },
};
