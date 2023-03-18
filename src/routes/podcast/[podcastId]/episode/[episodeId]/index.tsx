import { useParams } from "solid-start";

export default function Home() {
  const { podcastId, episodeId } = useParams();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Podcast detail - {podcastId} Episode - {episodeId}
      </h1>
    </main>
  );
}
