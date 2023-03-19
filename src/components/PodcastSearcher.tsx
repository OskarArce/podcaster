import { Show } from "solid-js";
import { usePodcast } from "~/contexts/podcast";

export default function PageSearcher() {
  const [podcasts, { setSearch, getTopSearch }] = usePodcast();

  return (
    <form class="flex w-full lg:ml-0">
      <label for="search-field" class="sr-only">
        Filter podcasts...
      </label>
      <div class="relative w-full text-gray-400 focus-within:text-gray-600">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search-field"
          class="block h-full w-full border-transparent py-2 pl-8 pr-16 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 text-sm"
          placeholder="Filter podcasts..."
          type="search"
          name="search"
          value={podcasts.search}
          onInput={(e) => setSearch(e.currentTarget.value)}
        />
        <div
          onClick={() => setSearch("")}
          class={`${
            podcasts.search ? "group cursor-pointer" : "pointer-events-none"
          } absolute inset-y-0 right-0 flex items-center`}
        >
          <span class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
            <Show when={!podcasts.search}>
              <svg
                class="-ml-1 mr-1.5 h-2 w-2 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
            </Show>
            {getTopSearch().length}
            <Show when={podcasts.search}>
              <button
                type="button"
                class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 group-hover:bg-indigo-200 group-hover:text-indigo-500 group-focus:bg-indigo-500 group-focus:text-white group-focus:outline-none"
              >
                <span class="sr-only">Remove large option</span>
                <svg
                  class="h-2 w-2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 8 8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M1 1l6 6m0-6L1 7"
                  />
                </svg>
              </button>
            </Show>
          </span>
        </div>
      </div>
    </form>
  );
}
