export type PodcastJson = {
  "im:name": { label: string };
  "im:image": { label: string; attributes: { height: string } }[];
  summary: { label: string };
  title: { label: string };
  id: { label: string; attributes: { "im:id": string } };
  "im:artist": { label: string; attributes: { href: string } };
};

export type PodcastEpisodeJson = {
  kind: "podcast-episode" | "podcast";
  trackName: string;
  description: string;
  episodeUrl: string;
  releaseDate: string;
  trackTimeMillis: number;
};

export type Podcast = {
  id: string;
  artist: string;
  name: string;
  title: string;
  description: string;
  image: string | undefined;
};

export type PodcastEpisode = {
  title: string;
  description: string;
  uri: string;
  duration: string;
  date: string;
};
