import { For } from "solid-js";
import { usePodcast } from "~/contexts/podcast";
import CellPodcast from "~/components/cell/CellPodcast";
import PodcastList from "~/components/podcast/PodcastList";
import PodcastItem from "~/components/podcast/PodcastItem";

export default function PodcastDetail() {
  const [_podcasts, { getSelected }] = usePodcast();

  return <>¿¿¿¿{JSON.stringify(getSelected())}????</>;
}
