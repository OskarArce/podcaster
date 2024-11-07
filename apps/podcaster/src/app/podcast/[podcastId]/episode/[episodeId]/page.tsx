'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Page({
  params,
}: {
  params: { podcastId: number; episodeId: number };
}) {
  console.log('Page loaded!');

  return (
    <div className={styles.page}>
      <Link href={`/podcast/${params.podcastId}`}>
        <h1>Podcast {params.podcastId}</h1>
      </Link>
      <h2>Episode {params.episodeId}</h2>
    </div>
  );
}
