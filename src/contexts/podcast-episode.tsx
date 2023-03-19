import { createContext, useContext, ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { CONFIG } from "~/client";
import { type PodcastEpisode } from "~/types";

export type PodcastEpisodeContextState = {
  readonly podcastEpisodes: Record<string, PodcastEpisode[]>;
  readonly selected: string;
  readonly expiration: Record<string, number>;
};

export type PodcastEpisodeContextValue = [
  state: PodcastEpisodeContextState,
  actions: {
    setPodcastEpisodes: (
      podcastEpisodes: Record<string, PodcastEpisode[]>
    ) => void;
    setSelected: (selected: string) => void;
    isSelectedExpired: () => boolean | null;
  }
];

const defaultState = {
  podcastEpisodes: {},
  selected: "",
  expiration: {},
};

const PodcastEpisodeContext = createContext<PodcastEpisodeContextValue>([
  defaultState,
  {
    setPodcastEpisodes: () => undefined,
    setSelected: () => undefined,
    isSelectedExpired: () => true,
  },
]);

export const PodcastEpisodeProvider: ParentComponent<{
  podcastEpisodes?: Record<string, PodcastEpisode[]>;
  selected?: string;
  expiration?: Record<string, number>;
}> = (props) => {
  const [state, setState] = createStore({
    podcastEpisodes: props.podcastEpisodes ?? defaultState.podcastEpisodes,
    selected: props.selected ?? defaultState.selected,
    expiration: props.expiration ?? defaultState.expiration,
  });

  const setPodcastEpisodes = (
    podcastEpisodes: Record<string, PodcastEpisode[]>
  ) => {
    setState("podcastEpisodes", {
      ...state.podcastEpisodes,
      ...podcastEpisodes,
    });
    setState(
      "expiration",
      Object.keys(podcastEpisodes).reduce(
        (expiration, id) => ({
          ...expiration,
          [id]: Date.now() + CONFIG.CACHE_TIME,
        }),
        state.expiration
      )
    );
  };

  const setSelected = (selected: string) => {
    setState("selected", selected);
  };

  const isSelectedExpired = () =>
    state.expiration[state.selected]
      ? state.expiration[state.selected] <= Date.now()
      : null;

  return (
    <PodcastEpisodeContext.Provider
      value={[
        state,
        {
          setPodcastEpisodes,
          setSelected,
          isSelectedExpired,
        },
      ]}
    >
      {props.children}
    </PodcastEpisodeContext.Provider>
  );
};

export const usePodcastEpisode = () => useContext(PodcastEpisodeContext);
