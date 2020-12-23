import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MAIN } from '@/constants/routes';
import Main from './Main';

export default function App() {
  return (
    <Switch>
      <Route path={MAIN} component={Main} />
    </Switch>
  );
}
