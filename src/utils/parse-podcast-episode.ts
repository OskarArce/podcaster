import { type PodcastEpisode, type PodcastEpisodeJson } from "~/types";
import { stringifyDuration } from "~/utils";

export const isPodcast = (podcastEpisodeJson: PodcastEpisodeJson) =>
  podcastEpisodeJson.kind === "podcast";

export const isPodcastEpisode = (podcastEpisodeJson: PodcastEpisodeJson) =>
  podcastEpisodeJson.kind === "podcast-episode";

export const parsePodcastEpisode = (
  podcastEpisodeJson: PodcastEpisodeJson
): PodcastEpisode => ({
  title: podcastEpisodeJson.trackName,
  description: podcastEpisodeJson.description,
  uri: podcastEpisodeJson.episodeUrl,
  date: new Date(podcastEpisodeJson.releaseDate).toLocaleDateString(),
  duration: stringifyDuration(podcastEpisodeJson.trackTimeMillis),
});
