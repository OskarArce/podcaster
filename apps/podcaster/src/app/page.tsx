'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Card } from '@podcaster/ui';
import { listPodcasts } from '@podcaster/podcasts';
import styles from './page.module.css';

const podcasts = listPodcasts();

export default function Index() {
  const firstPodcasts = useRef(podcasts);

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">

          <div id="podcasts" className={styles.podcasts}>
            <h2>Podcasts:</h2>
            {firstPodcasts.current.map(({ id, title }) => (
              <Link key={id} href={`/podcast/${id}`}>
                <Card title={title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
