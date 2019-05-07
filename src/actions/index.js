// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type:'SONG_SELECTED',
    payload:song
  };
};

// Create a named export. Export many different functions from a single file
