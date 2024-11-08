import type { QueryError } from '@podcaster/shared';
import type { Podcast, FilterPodcasts } from '../model';
import { findPodcasts, getPodcastById } from '../api/podcast';
import { podcastStore, podcastsStore } from '../store';

export const listPodcastsUseCase = async (): Promise<Podcast[]> => {
  podcastsStore.setLoading();

  const { data: podcasts, error } = await findPodcasts(
    podcastsStore.toQueryParamsFilter()
  );

  if (error) {
    podcastsStore.setError({ error: error as QueryError });
    return [];
  }

  podcastsStore.setData(podcasts ?? []);
  return podcastsStore.$.get().data ?? [];
};

export const selectPodcastUseCase = async (
  podcastId: number,
  options: { refresh: boolean } = { refresh: true }
): Promise<Podcast> => {
  podcastsStore.setLoading();
  const { data, error } = options.refresh
    ? await getPodcastById(podcastId)
    : { data: podcastsStore.getById(podcastId), error: null };

  if (error || !data) {
    podcastsStore.setError({ error: error as QueryError });
    return {} as Podcast;
  }
  podcastStore.setData(data);
  return podcastStore.$.get().data ?? data;
};

export const filterPodcastsUseCase = async (
  filter: FilterPodcasts
): Promise<Podcast[]> => {
  podcastsStore.setFilter(filter);
  return listPodcastsUseCase();
};

export const initPodcastsUseCase = async (): Promise<Podcast[]> => {
  podcastsStore.initFilter();
  return listPodcastsUseCase();
};
