import { useParams } from "solid-start";
import { usePodcastEpisode } from "~/contexts/podcast-episode";
import BaseAudioPlayer from "~/components/base/BaseAudioPlayer";

export default function PodcastDetailEpisodes() {
  const { episodeId } = useParams();
  const [{ podcastEpisodes, selected }] = usePodcastEpisode();
  const episodes = podcastEpisodes[selected];
  const episode = episodes ? episodes[parseInt(episodeId)] : null;

  return (
    <BaseAudioPlayer
      title={episode?.title}
      description={episode?.description}
      uri={episode?.uri}
    />
  );
}
