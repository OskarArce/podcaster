import { createQuery } from "@tanstack/solid-query";
import { usePodcast } from "~/contexts/podcast";
import { type Podcast } from "~/types";

export const CONFIG = Object.freeze({
  CACHE_TIME: 86_400_000, // One day
});

export const QUERY_OPTIONS = Object.freeze({
  cacheTime: CONFIG.CACHE_TIME,
});

export const QUERY_KEYS = Object.freeze({
  PODCASTS: ["podcast"],
});

export const fetchPodcasts = async (): Promise<Podcast[]> => {
  const [_podcast, { setTop, setSearch }] = usePodcast();
  const podcastTop = await fetch("/api/podcasts").then((res) => res.json());
  setTop(podcastTop);
  setSearch("");
  return podcastTop;
};

export const createPodcastsQuery = () =>
  createQuery(() => QUERY_KEYS.PODCASTS, fetchPodcasts, QUERY_OPTIONS);
