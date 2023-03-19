import { JSX } from "solid-js";
import ResourceLoader from "~/components/resource-loader/ResourceLoader";
import { createPodcastsQuery } from "~/client";

export default function ResourceLoaderPodcast({
  children,
}: {
  children: JSX.Element;
}) {
  const query = createPodcastsQuery();

  return <ResourceLoader query={query}>{children}</ResourceLoader>;
}
