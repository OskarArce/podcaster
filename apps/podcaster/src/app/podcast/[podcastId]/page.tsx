'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { listEpisodes } from '@podcaster/podcasts';
import { Card } from '@podcaster/ui';
import styles from './page.module.css';

export default function Page({ params }: { params: { podcastId: number } }) {
  const episodes = useRef(listEpisodes(params.podcastId));

  console.log('Page loaded!');

  return (
    <div className={styles.page}>
      <div id="episodes" className={styles.episodes}>
        <h2>Episodes:</h2>
        {episodes.current.map(({ id, title }) => (
          <Link key={id} href={`/podcast/${params.podcastId}/episode/${id}`}>
            <Card title={title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
