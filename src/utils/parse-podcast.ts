import { type Podcast, type PodcastJson } from "~/types";

export const parsePodcast = (podcastJson: PodcastJson): Podcast => ({
  id: podcastJson.id.attributes["im:id"],
  artist: podcastJson["im:artist"].label,
  name: podcastJson["im:name"].label,
  title: podcastJson.title.label,
  description: podcastJson.summary.label,
  image: podcastJson["im:image"][0].label,
});
