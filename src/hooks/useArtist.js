import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getArtist, setNavbarSelectedValue } from '@/redux/actions';
import { artistSelector } from '@/redux/selectors';

export default function useArtist() {
  const dispatch = useDispatch();
  const params = useParams();
  const artist = useSelector(artistSelector);
  const { name, image, tags, bio } = artist || {};

  useEffect(() => {
    dispatch(getArtist({ mbid: params.mbid }));
    dispatch(setNavbarSelectedValue(['3']));
  }, [dispatch, params.mbid]);

  return { name, image, tags, bio };
}
