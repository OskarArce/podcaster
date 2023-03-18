import { A } from "@solidjs/router";
import Page from "~/components/Page";
import PageSearcher from "~/components/PageSearcher";
import Cell from "~/components/Cell";
import PodcastItem from "~/components/PodcastItem";
import { createPodcastsQuery } from "~/client";
import { Podcast } from "~/types";

export default function Home() {
  const query = createPodcastsQuery();

  return (
    <Page header={PageSearcher}>
      <main class="text-center mx-auto text-gray-700 p-4">
        <Cell
          query={query}
          class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {(podcast: Podcast) => <PodcastItem podcast={podcast} />}
        </Cell>
      </main>
    </Page>
  );
}
