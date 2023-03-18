import { Outlet, useParams } from "solid-start";

export default function PodcastLayout() {
  const { podcastId } = useParams();

  return (
    <div>
      <h1>Podcast Layput - {podcastId}</h1>
      <Outlet />
    </div>
  );
}
