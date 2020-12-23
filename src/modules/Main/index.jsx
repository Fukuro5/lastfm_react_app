import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopTracks, setNavbarSelectedValue } from '@/redux/actions';
import { topTracksSelector } from '@/redux/selectors';
import { SongCard, Layout } from '@/components';
import st from './styles.module.scss';

export default function Main() {
  const dispatch = useDispatch();
  const topTracks = useSelector(topTracksSelector);
  const { tracks } = topTracks;
  const { track } = tracks || {};

  useEffect(() => {
    dispatch(getTopTracks());
    dispatch(setNavbarSelectedValue(['1']));
  }, [dispatch]);

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
