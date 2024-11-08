import { vi } from 'vitest';
import { createUrl } from './urls';

vi.stubGlobal('location', { href: 'http://localhost:3000' });

describe('urls -> createUrl', () => {
  it('should return podcasts url', () => {
    expect(createUrl('http://localhost:3000')).toMatch(
      `http://localhost:3000/signin?app=`
    );
  });
});
