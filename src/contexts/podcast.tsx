import { createContext, useContext, ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { searchPodcast } from "~/utils";
import { CONFIG } from "~/client";
import { type Podcast } from "~/types";

export type PodcastContextState = {
  readonly top: Podcast[];
  readonly search: string;
  readonly expiration: number;
};
export type PodcastContextValue = [
  state: PodcastContextState,
  actions: {
    setTop: (top: Podcast[]) => void;
    setSearch: (search: string) => void;
    getTopSearch: () => Podcast[];
    isExpired: () => boolean;
  }
];

const defaultState = {
  top: [],
  search: "",
  expiration: Date.now(),
};

const PodcastContext = createContext<PodcastContextValue>([
  defaultState,
  {
    setTop: () => undefined,
    setSearch: () => undefined,
    getTopSearch: () => [],
    isExpired: () => true,
  },
]);

export const PodcastProvider: ParentComponent<{
  top?: Podcast[];
  search?: string;
  expiration?: number;
}> = (props) => {
  const [state, setState] = createStore({
    top: props.top ?? defaultState.top,
    search: props.search ?? defaultState.search,
    expiration: props.expiration ?? defaultState.expiration,
  });

  const setTop = (top: Podcast[]) => {
    setState("top", top);
    setState("expiration", Date.now() + CONFIG.CACHE_TIME);
  };
  const setSearch = (search: string) => {
    setState("search", search);
  };
  const getTopSearch = () =>
    state.top.filter((podcast) => searchPodcast(podcast, state.search));
  const isExpired = () => state.expiration <= Date.now();

  return (
    <PodcastContext.Provider
      value={[state, { setTop, setSearch, getTopSearch, isExpired }]}
    >
      {props.children}
    </PodcastContext.Provider>
  );
};

export const usePodcast = () => useContext(PodcastContext);
