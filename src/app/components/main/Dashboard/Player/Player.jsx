/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayer } from '../../../../context/store';
import * as types from '../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const Player = () => {
  const [
    {
      currentPlaybackState,
      currentPlayingTrack,
      shuffle,
      accessToken,
      selectedPlaylistsTracks,
      selectedTrack,
    },
    dispatch,
  ] = useDataLayer();
  console.log(
    '🚀 ~ file: Player.jsx ~ line 21 ~ Player ~ currentPlaybackState',
    currentPlaybackState,
  );
  console.log(
    '🚀 ~ file: Player.jsx ~ line 21 ~ Player ~ selectedTrack',
    selectedTrack,
  );

  // useEffect(() => {
  //   if (!accessToken) return;
  //   spotifyApi
  //     .getMyCurrentPlaybackState()
  //     .then((state) => {
  //       dispatch({
  //         type: types.SET_CURRENT_PLAYBACK_STATE,
  //         payload: state,
  //       });
  //     })
  //     .catch((err) => {
  //       throw Error(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   spotifyApi
  //     .getMyCurrentPlayingTrack()
  //     .then((track) => {
  //       dispatch({
  //         type: types.SET_CURRENT_PLAYING_TRACK,
  //         payload: track.item,
  //       });
  //     })
  //     .catch((err) => {
  //       throw Error(err);
  //     });
  // }, []);

  return (
    <div className="player__container">
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={[selectedTrack?.uri] || []}
      />
    </div>
  );
};

export default Player;
