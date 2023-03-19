import { JSX } from "solid-js";
import { A, useLocation, useParams } from "solid-start";

interface PodcastDetailLinkProps {
  children: JSX.Element;
}

export default function PodcastDetailLink(props: PodcastDetailLinkProps) {
  const { podcastId } = useParams();
  const podcastUrl = `/podcast/${podcastId}`;
  const location = useLocation();
  const active = () =>
    location.pathname === podcastUrl
      ? "pointer-events-none cursor-default"
      : "";

  return (
    <A href={podcastUrl} class={`${active()} cursor-pointer`}>
      {props.children}
    </A>
  );
}
