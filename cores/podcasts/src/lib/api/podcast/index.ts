import {
  ApiResponse,
  QueryParams,
  apiFetch,
  createApiResponse,
  createUrl,
} from '@podcaster/shared';
import type { Podcast, PodcastId } from '../../model';
import { podcastParser, podcastsParser } from './parser';

export const findPodcasts = (
  queryParams?: QueryParams
): Promise<ApiResponse<Podcast[]>> => {
  const url = createUrl('us/rss/toppodcasts/limit=100/genre=1310/json', {
    queryParams,
  });
  const response = apiFetch(url);
  return createApiResponse(response, podcastsParser);
};

export const getPodcastById = (
  podcastId: PodcastId
): Promise<ApiResponse<Podcast>> => {
  const url = createUrl('lookup', {
    queryParams: {
      id: `${podcastId}`,
      media: 'podcast',
      entity: 'podcastEpisode',
      limit: '20',
    },
  });
  const response = apiFetch(url);
  return createApiResponse(response, podcastParser);
};
