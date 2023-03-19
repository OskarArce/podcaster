import Page from "~/components/Page";
import PodcastSearcher from "~/components/PodcastSearcher";
import Podcast from "~/components/Podcast";
import { PodcastProvider } from "~/contexts/podcast";

export default function Home() {
  return (
    <PodcastProvider>
      <Page header={PodcastSearcher}>
        <main class="text-center mx-auto text-gray-700 p-4">
          <Podcast />
        </main>
      </Page>
    </PodcastProvider>
  );
}
