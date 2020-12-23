import React from 'react';
import { useTrackSearch } from '@/hooks';
import { Input } from 'antd';
import { List, Layout } from '@/components';
import st from './styles.module.scss';

export default function TrackSearch() {
  const { inputValue, handleChange, data } = useTrackSearch();

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
