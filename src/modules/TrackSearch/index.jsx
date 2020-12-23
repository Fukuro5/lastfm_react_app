import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrackByName, setNavbarSelectedValue } from '@/redux/actions';
import { trackByNameSelector } from '@/redux/selectors';
import { Input } from 'antd';
import { List, Layout } from '@/components';
import st from './styles.module.scss';

export default function TrackSearch() {
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

  return (
    <Layout>
      <div className={st.wrapper}>
        <Input
          placeholder="Enter track name."
          onChange={handleChange}
          value={inputValue}
        />
        <List data={data !== '' ? data : []} />
      </div>
    </Layout>
  );
}
