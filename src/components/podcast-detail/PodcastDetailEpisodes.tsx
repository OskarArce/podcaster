import { For } from "solid-js";
import { A, useParams } from "solid-start";
import { usePodcastEpisode } from "~/contexts/podcast-episode";
import BaseCard from "~/components/base/base-card/BaseCard";

export default function PodcastDetailEpisodes() {
  const { podcastId } = useParams();
  const [{ podcastEpisodes, selected }] = usePodcastEpisode();

  return (
    <>
      <BaseCard header={`Episodes: ${podcastEpisodes[selected]?.length}`} />
      <BaseCard>
        <div class="mt-6 mr-px overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Duration
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Play</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <For each={podcastEpisodes[selected]}>
                {(episode, i) => (
                  <tr class={i() % 2 ? "bg-gray-50" : ""}>
                    <td class="text-left py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      <A
                        href={`/podcast/${podcastId}/episode/${i()}`}
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        {episode.title}
                      </A>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {episode.date}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {episode.duration}
                    </td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <A
                        href={`/podcast/${podcastId}/episode/${i()}`}
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Play<span class="sr-only">, {episode.title}</span>
                      </A>
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </BaseCard>
    </>
  );
}
