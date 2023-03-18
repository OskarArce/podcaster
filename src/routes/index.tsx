import Page from "~/components/Page";
import PageSearcher from "~/components/PageSearcher";
import Podcast from "~/components/Podcast";
import { PodcastProvider } from "~/contexts/podcast";

export default function Home() {
  return (
    <PodcastProvider>
      <Page header={PageSearcher}>
        <main class="text-center mx-auto text-gray-700 p-4">
          <Podcast />
        </main>
      </Page>
    </PodcastProvider>
  );
}
