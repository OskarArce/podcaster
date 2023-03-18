import { type Podcast } from "~/types";

export const searchPodcast = (
  podcast: Podcast,
  search: string = ""
): boolean => {
  const searchLowercase = search.trim().toLocaleLowerCase();
  return (
    podcast.name.trim().toLowerCase().includes(searchLowercase) ||
    podcast.artist.trim().toLowerCase().includes(searchLowercase)
  );
};
