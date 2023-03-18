import { type APIEvent, json } from "solid-start/api";
import { parsePodcastEpisode, isPodcast, isPodcastEpisode } from "~/utils";
import { type PodcastEpisode, type PodcastEpisodeJson } from "~/types";

export async function GET({ params }: APIEvent) {
  const url = new URL("https://itunes.apple.com/lookup");
  url.searchParams.set("media", "podcast");
  url.searchParams.set("entity", "podcastEpisode");
  url.searchParams.set("id", params.id);
  const response = await fetch(url.href);
  let podcastEpisodesJson: PodcastEpisodeJson[];

  try {
    podcastEpisodesJson = JSON.parse(await response.text())?.results ?? [];
  } catch {
    return new Response("Error fetching podcast episodes from itunes", {
      status: 500,
    });
  }
  const podcast = podcastEpisodesJson.find(isPodcast);

  if (!podcast) return new Response("Not found", { status: 404 });

  const podcastEpisodes = podcastEpisodesJson
    .filter(isPodcastEpisode)
    .map(parsePodcastEpisode);

  return json(podcastEpisodes);
}
