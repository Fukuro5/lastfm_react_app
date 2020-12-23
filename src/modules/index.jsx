import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MAIN, ARTIST, TRACK_SEARCH } from '@/constants/routes';
import Main from './Main';
import Artist from './Artist';
import TrackSearch from './TrackSearch';

export default function App() {
  return (
    <Switch>
      <Route exact path={MAIN} component={Main} />
      <Route path={`${ARTIST}/:mbid`} component={Artist} />
      <Route path={TRACK_SEARCH} component={TrackSearch} />
    </Switch>
  );
}
