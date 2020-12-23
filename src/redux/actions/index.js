import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import api from '@/utils/api';

export const getTopTracks = createAsyncThunk('getTopTracks', async () => {
  try {
    const res = await api.get(
      `/2.0/?method=chart.gettoptracks&api_key=${api.defaults.headers.common.ApiKey}&format=json`,
    );
    return res.data;
  } catch (e) {
    return null;
  }
});

export const getArtist = createAsyncThunk('getArtist', async ({ mbid }) => {
  try {
    const res = await api.get(
      `/2.0/?method=artist.getinfo&mbid=${mbid}&api_key=${api.defaults.headers.common.ApiKey}&format=json`,
    );
    return res.data;
  } catch (e) {
    return null;
  }
});

export const getTrackByName = createAsyncThunk(
  'getSongByName',
  async ({ trackName }) => {
    try {
      const res = await api.get(
        `/2.0/?method=track.search&track=${trackName}&api_key=${api.defaults.headers.common.ApiKey}&format=json`,
      );
      return res.data;
    } catch (e) {
      return null;
    }
  },
);

export const setNavbarSelectedValue = createAction('setNavbarSelectedValue');
