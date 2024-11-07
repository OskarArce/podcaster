'use client';

import Link from 'next/link';
import { Card } from '@podcaster/ui';
import styles from './page.module.css';

export default function Page({ params }: { params: { podcastId: number } }) {
  return (
    <div className={styles.page}>
      <Link href={`/podcast/${params.podcastId}`}>
        <Card title={`Podcast ${params.podcastId}`} />
      </Link>
    </div>
  );
}
