import { For } from "solid-js";
import { usePodcast } from "~/contexts/podcast";
import PodcastCell from "~/components/PodcastCell";
import PodcastList from "~/components/PodcastList";
import PodcastItem from "~/components/PodcastItem";

export default function Podcast() {
  const [_podcasts, { isExpired, getTopSearch }] = usePodcast();

  return (
    <>
      {isExpired() ? (
        <PodcastCell />
      ) : (
        <PodcastList>
          <For each={getTopSearch()}>
            {(podcast) => <PodcastItem podcast={podcast} />}
          </For>
        </PodcastList>
      )}
    </>
  );
}
