import Cell from "~/components/Cell";
import PodcastItem from "~/components/PodcastItem";
import { createPodcastsQuery } from "~/client";
import { type Podcast } from "~/types";

export default function PodcastCell() {
  const query = createPodcastsQuery();

  return (
    <Cell
      query={query}
      class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {(podcast: Podcast) => <PodcastItem podcast={podcast} />}
    </Cell>
  );
}
