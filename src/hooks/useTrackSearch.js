import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackByName, setNavbarSelectedValue } from '@/redux/actions';
import { trackByNameSelector } from '@/redux/selectors';

export default function useTrackSearch() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const track = useSelector(trackByNameSelector);

  useEffect(() => {
    dispatch(setNavbarSelectedValue(['2']));
  }, [dispatch]);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
    dispatch(getTrackByName({ trackName: value }));
  };

  const data =
    track &&
    track.map((item) => {
      return { title: item.name, description: item.artist };
    });

  return { inputValue, handleChange, data };
}
