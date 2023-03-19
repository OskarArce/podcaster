import { createQuery } from "@tanstack/solid-query";
import { usePodcast } from "~/contexts/podcast";
import { usePodcastEpisode } from "~/contexts/podcast-episode";
import { type Podcast, type PodcastEpisode } from "~/types";

export const CONFIG = Object.freeze({
  CACHE_TIME: 86_400_000, // One day
});

export const QUERY_OPTIONS = Object.freeze({
  cacheTime: CONFIG.CACHE_TIME,
});

export const QUERY_KEYS = Object.freeze({
  PODCASTS: ["podcast"],
  PODCAST_EPISODES: ["podcast-episodes-{{id}}"],
});

export const fetchPodcasts = async (): Promise<Podcast[]> => {
  const [_podcast, { setTop, setSearch }] = usePodcast();
  const podcastTop = await fetch("/api/podcasts").then((res) => res.json());
  setTop(podcastTop);
  setSearch("");
  return podcastTop;
};

export const fetchPodcastEpisodes = async (
  id: string
): Promise<PodcastEpisode[]> => {
  const [_podcastEpisode, { setPodcastEpisodes }] = usePodcastEpisode();
  const podcastEpisodes = await fetch(`/api/podcasts/${id}/episodes`).then(
    (res) => res.json()
  );
  setPodcastEpisodes({ [id]: podcastEpisodes });
  return podcastEpisodes;
};

export const createPodcastsQuery = () =>
  createQuery(() => QUERY_KEYS.PODCASTS, fetchPodcasts, QUERY_OPTIONS);

export const createPodcastEpisodesQuery = (id: string) =>
  createQuery(
    () => QUERY_KEYS.PODCAST_EPISODES.map((key) => key.replace("{{id}}", id)),
    () => fetchPodcastEpisodes(id),
    QUERY_OPTIONS
  );
