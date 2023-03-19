import { JSX } from "solid-js";
import { useParams } from "solid-start";
import ResourceLoader from "~/components/resource-loader/ResourceLoader";
import { createPodcastEpisodesQuery } from "~/client";

export default function ResourceLoaderPodcastEpisode({
  children,
}: {
  children: JSX.Element;
}) {
  const { podcastId } = useParams();
  const query = createPodcastEpisodesQuery(podcastId);

  return <ResourceLoader query={query}>{children}</ResourceLoader>;
}
