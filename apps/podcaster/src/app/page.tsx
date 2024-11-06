'use client';

import { useRef } from 'react';
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
          <div id="welcome">
            <h1>Podcaster</h1>
          </div>

          <div id="podcasts" className={styles.podcasts}>
            <h2>Podcasts:</h2>
            {firstPodcasts.current.map(({ id, title }) => (
              <Card key={id} title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
