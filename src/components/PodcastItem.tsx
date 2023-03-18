import { A } from "@solidjs/router";
import { type Podcast } from "~/types";

export default function PodcastItem({ podcast }: { podcast: Podcast }) {
  return (
    <li class="relative">
      <A href={`/podcast/${podcast.id}`}>
        <div class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img
            src={podcast.image}
            alt={podcast.name}
            class="pointer-events-none object-cover group-hover:opacity-75"
          />
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for {podcast.name}</span>
          </button>
        </div>
      </A>
      <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {podcast.name}
      </p>
      <p class="pointer-events-none block text-sm font-medium text-gray-500">
        {podcast.artist}
      </p>
    </li>
  );
}
