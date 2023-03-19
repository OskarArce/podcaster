import { usePodcast } from "~/contexts/podcast";
import BaseCard from "~/components/base/base-card/BaseCard";

export default function PodcastDetailResume() {
  const [_podcasts, { getSelected }] = usePodcast();
  const podcast = getSelected();

  return (
    <BaseCard
      imageSrc={podcast?.image}
      title={podcast?.name}
      subtitle={podcast?.artist}
      description={podcast?.description}
    />
  );
}
