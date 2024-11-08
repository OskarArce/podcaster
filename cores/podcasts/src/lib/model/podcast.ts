import type { Episode } from './episode';

export type PodcastId = number;

export interface Podcast {
  id: PodcastId;
  author: string;
  name: string;
  title: string;
  image?: {
    small?: string;
    medium?: string;
    big?: string;
  };
  episodes?: Episode[];
}

export interface FilterPodcasts {
  query?: string;
}
