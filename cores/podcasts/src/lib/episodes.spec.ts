import { listEpisodes } from './episodes';

describe('episodes', () => {
  it('should list episodes of the podcast', () => {
    expect(listEpisodes(1)).toEqual([
      { id: 1, title: 'Episode1', podcastId: 1 },
      { id: 2, title: 'Episode2', podcastId: 1 },
      { id: 3, title: 'Episode3', podcastId: 1 },
    ]);
  });
});
