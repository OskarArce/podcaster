import type { Podcast, Episode } from '../../model';

export type Response = {
  feed: {
    entry: Data[];
  };
};

export type Data = {
  id: {
    label: string;
    attributes: { 'im:id': string };
  };
  'im:artist': {
    label: string;
    attributes: { href: string };
  };
  'im:image': { label: string; attributes: { height: string } }[];
  'im:name': { label: string };
  title: { label: string };
  episodes?: Episode[];
};

export const podcastParser = (data: Data): Podcast => ({
  id: +data.id.attributes['im:id'],
  name: data['im:name'].label,
  title: data.title.label,
  author: data['im:artist'].label,
  image: Array.isArray(data['im:image'])
    ? {
        small: data['im:image'][0]?.label,
        medium: data['im:image'][1]?.label,
        big: data['im:image'][2]?.label,
      }
    : {},
  ...(data.episodes ? { episodes: data.episodes } : {}),
});

export const podcastsParser = (res: string): Podcast[] => {
  const {
    feed: { entry: data },
  }: Response = JSON.parse(res);
  let podcasts: Podcast[] = [];

  try {
    podcasts = data.map(podcastParser);
  } catch (error) {
    console.error('Unexpected error retrieving podcasts', error);
  }

  return podcasts;
};
