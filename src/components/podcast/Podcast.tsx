import { For } from "solid-js";
import { usePodcast } from "~/contexts/podcast";
import PodcastList from "~/components/podcast/PodcastList";
import PodcastItem from "~/components/podcast/PodcastItem";

export default function Podcast() {
  const [_podcasts, { getTopSearch }] = usePodcast();

  return (
    <PodcastList>
      <For each={getTopSearch()}>
        {(podcast) => <PodcastItem podcast={podcast} />}
      </For>
    </PodcastList>
  );
}
