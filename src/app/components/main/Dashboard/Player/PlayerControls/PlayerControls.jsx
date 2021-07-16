import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

const PlayerControls = () => (
  <div className="player__controls__container">
    <ShuffleIcon className="player__controls__green" />
    <SkipPreviousIcon className="player__controls__icon" />
    <PlayCircleOutlineIcon className="player__controls__icon" />
    <SkipNextIcon className="player__controls__icon" />
    <RepeatIcon className="player__controls__green" />
  </div>
);
export default PlayerControls;