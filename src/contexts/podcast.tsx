import { createContext, useContext, ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { searchPodcast } from "~/utils";
import { CONFIG } from "~/client";
import { type Podcast } from "~/types";

export type PodcastContextState = {
  readonly top: Podcast[];
  readonly search: string;
  readonly selected: string;
  readonly expiration: number;
};

export type PodcastContextValue = [
  state: PodcastContextState,
  actions: {
    setTop: (top: Podcast[]) => void;
    setSearch: (search: string) => void;
    setSelected: (selected: string) => void;
    getTopSearch: () => Podcast[];
    getSelected: () => Podcast | undefined;
    isExpired: () => boolean;
  }
];

const defaultState = {
  top: [],
  search: "",
  selected: "",
  expiration: Date.now(),
};

const PodcastContext = createContext<PodcastContextValue>([
  defaultState,
  {
    setTop: () => undefined,
    setSearch: () => undefined,
    setSelected: () => undefined,
    getTopSearch: () => [],
    getSelected: () => undefined,
    isExpired: () => true,
  },
]);

export const PodcastProvider: ParentComponent<{
  top?: Podcast[];
  search?: string;
  selected?: string;
  expiration?: number;
}> = (props) => {
  const [state, setState] = createStore({
    top: props.top ?? defaultState.top,
    search: props.search ?? defaultState.search,
    selected: props.selected ?? defaultState.selected,
    expiration: props.expiration ?? defaultState.expiration,
  });

  const setTop = (top: Podcast[]) => {
    setState("top", top);
    setState("expiration", Date.now() + CONFIG.CACHE_TIME);
  };

  const setSearch = (search: string) => {
    setState("search", search);
  };

  const setSelected = (selected: string) => {
    setState("selected", selected);
  };

  const getTopSearch = () =>
    state.top.filter((podcast) => searchPodcast(podcast, state.search));

  const getSelected = () => state.top.find(({ id }) => id === state.selected);

  const isExpired = () => state.expiration <= Date.now();

  return (
    <PodcastContext.Provider
      value={[
        state,
        {
          setTop,
          setSearch,
          setSelected,
          getTopSearch,
          getSelected,
          isExpired,
        },
      ]}
    >
      {props.children}
    </PodcastContext.Provider>
  );
};

export const usePodcast = () => useContext(PodcastContext);
