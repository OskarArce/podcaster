import Page from "~/components/page/Page";
import PodcastSearcher from "~/components/podcast/PodcastSearcher";
import Podcast from "~/components/podcast/Podcast";

export default function Home() {
  return (
    <Page header={PodcastSearcher}>
      <main class="text-center mx-auto text-gray-700 p-4">
        <Podcast />
      </main>
    </Page>
  );
}
