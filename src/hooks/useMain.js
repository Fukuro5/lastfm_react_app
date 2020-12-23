import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopTracks, setNavbarSelectedValue } from '@/redux/actions';
import { topTracksSelector } from '@/redux/selectors';

export default function useMain() {
  const dispatch = useDispatch();
  const topTracks = useSelector(topTracksSelector);
  const { tracks } = topTracks;
  const { track } = tracks || {};

  useEffect(() => {
    dispatch(getTopTracks());
    dispatch(setNavbarSelectedValue(['1']));
  }, [dispatch]);

  return track;
}
