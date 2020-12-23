import { createReducer } from '@reduxjs/toolkit';
import {
  getTopTracks,
  getArtist,
  getTrackByName,
  setNavbarSelectedValue,
} from '@/redux/actions';

const initialState = {
  topTracks: [],
  artist: [],
  trackByName: '',
  navbarSelectedValue: ['1'],
};

export default createReducer(initialState, {
  [getTopTracks.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      topTracks: payload,
    };
  },
  [getArtist.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      artist: payload.artist,
    };
  },
  [getTrackByName.fulfilled]: (state, { payload }) => {
    return {
      ...state,
      trackByName: payload.results?.trackmatches?.track,
    };
  },
  [setNavbarSelectedValue]: (state, { payload }) => {
    return {
      ...state,
      navbarSelectedValue: payload,
    };
  },
});
