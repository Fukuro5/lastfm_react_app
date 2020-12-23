export const topTracksSelector = (state) => state.lastFm.topTracks;

export const artistSelector = (state) => state.lastFm.artist;

export const trackByNameSelector = (state) => state.lastFm.trackByName;

export const navbarSelectedValueSelector = (state) =>
  state.lastFm.navbarSelectedValue;
