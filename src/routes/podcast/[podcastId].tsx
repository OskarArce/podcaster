import { Outlet, useParams } from "solid-start";
import { usePodcast } from "~/contexts/podcast";
import { usePodcastEpisode } from "~/contexts/podcast-episode";
import ResourceLoaderPodcastEpisode from "~/components/resource-loader/ResourceLoaderPodcastEpisode";
import PodcastDetailResume from "~/components/podcast-detail/PodcastDetailResume";
import Page from "~/components/page/Page";

export default function PodcastLayout() {
  const { podcastId } = useParams();
  const [_podcast, podcastActions] = usePodcast();
  const [_podcastEpisode, podcastEpisodeActions] = usePodcastEpisode();

  podcastActions.setSelected(podcastId);
  podcastEpisodeActions.setSelected(podcastId);

  return (
    <Page>
      <div class="flex h-full">
        <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div class="relative z-0 flex flex-1 overflow-hidden">
            <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none order-last">
              <ResourceLoaderPodcastEpisode>
                <Outlet />
              </ResourceLoaderPodcastEpisode>
            </main>
            <aside class="relative w-96 flex-shrink-0 overflow-y-auto border-gray-200 order-first flex flex-col">
              <PodcastDetailResume />
            </aside>
          </div>
        </div>
      </div>
    </Page>
  );
}
