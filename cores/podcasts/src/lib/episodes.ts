export function listEpisodes(
  podcastId: number
): { id: number; podcastId: number; title: string }[] {
  return [
    { id: 1, title: 'Episode1', podcastId },
    { id: 2, title: 'Episode2', podcastId },
    { id: 3, title: 'Episode3', podcastId },
  ];
}
