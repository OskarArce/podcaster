import { APIEvent, json } from "solid-start/api";
import { parsePodcast } from "~/utils";
import { type Podcast, type PodcastJson } from "~/types";

export async function GET({ params }: APIEvent) {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  let podcastsJson: PodcastJson[];
  try {
    podcastsJson = JSON.parse(await response.text()).feed?.entry ?? [];
  } catch {
    return new Response("Error fetching podcasts from itunes", { status: 500 });
  }
  const podcasts: Podcast[] = podcastsJson.map(parsePodcast);

  return json(podcasts);
}
