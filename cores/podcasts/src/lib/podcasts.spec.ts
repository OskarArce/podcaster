import { listPodcasts } from './podcasts';

describe('podcasts', () => {
  it('should list first one hundred podcasts', () => {
    expect(listPodcasts()).toEqual([
      { id: 1, title: 'Podcast1' },
      { id: 2, title: 'Podcast2' },
      { id: 3, title: 'Podcast3' },
    ]);
  });
});
