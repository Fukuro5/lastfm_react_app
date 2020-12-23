import React from 'react';
import { useArtist } from '@/hooks';
import { ProfileCard, Layout } from '@/components';
import st from './styles.module.scss';

export default function () {
  const { name, image, tags, bio } = useArtist();

  return (
    <Layout>
      <div className={st.wrapper}>
        <ProfileCard
          artistName={name}
          image={image?.[3]['#text']}
          tags={tags?.tag}
          bio={bio?.summary}
        />
      </div>
    </Layout>
  );
}
