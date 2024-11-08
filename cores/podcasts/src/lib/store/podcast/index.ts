import { createStoreAsync } from '@podcaster/shared';
import type { Podcast } from '../../model';

export const store = createStoreAsync<Podcast>();
