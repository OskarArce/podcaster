'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@nanostores/react';
import { listPodcastsUseCase } from '@podcaster/podcasts';
import { Card } from '@podcaster/ui';
import { podcastsStore } from '@podcaster/podcasts';
import styles from './page.module.css';

export default function Index() {
  const { data: podcasts, loading } = useStore(podcastsStore.$);

  useEffect(() => {
    listPodcastsUseCase();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="podcasts" className={styles.podcasts}>
            <h2>Podcasts:</h2>
            {podcasts?.map(({ id, title }) => (
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
