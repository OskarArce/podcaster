import { createQuery } from "@tanstack/solid-query";
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

export const fetchPodcasts = (): Promise<Podcast[]> =>
  fetch("/api/podcasts").then((res) => res.json());

export const createPodcastsQuery = () =>
  createQuery(() => QUERY_KEYS.PODCASTS, fetchPodcasts, QUERY_OPTIONS);
