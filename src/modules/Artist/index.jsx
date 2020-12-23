import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getArtist, setNavbarSelectedValue } from '@/redux/actions';
import { artistSelector } from '@/redux/selectors';
import { ProfileCard, Layout } from '@/components';
import st from './styles.module.scss';

export default function () {
  const dispatch = useDispatch();
  const params = useParams();
  const artist = useSelector(artistSelector);
  const { name, image, tags, bio } = artist || {};

  useEffect(() => {
    dispatch(getArtist({ mbid: params.mbid }));
    dispatch(setNavbarSelectedValue(['3']));
  }, [dispatch, params.mbid]);

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
