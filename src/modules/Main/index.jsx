import React from 'react';
import { SongCard, Layout } from '@/components';
import { useMain } from '@/hooks';
import st from './styles.module.scss';

export default function Main() {
  const track = useMain();

  return (
    <Layout>
      <div className={st.wrapper}>
        {track?.map((item) => (
          <SongCard
            key={item.name}
            songName={item.name}
            artist={item.artist}
            image={item.image[2]['#text']}
            artistUrl={item.url}
          />
        ))}
      </div>
    </Layout>
  );
}
