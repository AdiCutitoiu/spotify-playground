import React from "react";
import { Slider, Grid, Typography, Box, IconButton } from "@material-ui/core";
import { GREEN } from "../util/colors";
import { PlayArrow, Pause, SkipNext, SkipPrevious } from "@material-ui/icons";
import { connect } from "react-redux";
import { pauseAsync, resumeAsync, skip } from "../store/thunks/playerThunks";

const formatTime = (timeMs) => {
  const mins = Math.floor(timeMs / 60000);
  const secs = Math.floor((timeMs % 60000) / 1000);

  const minsStr = mins < 10 ? `0${mins}` : `${mins}`;
  const secsStr = secs < 10 ? `0${secs}` : `${secs}`;

  return `${minsStr}:${secsStr}`;
};

function ThumbComponent() {
  return null;
}

export function PlayerControls({
  isPlaying,
  disallows,
  progressMs,
  durationMs,
  dispatch,
}) {
  const currentProgress = formatTime(progressMs);
  const duration = formatTime(durationMs);

  const [progress, setProgress] = React.useState(null);
  const handleChange = React.useCallback((event, value) => {
    console.log(value);
    setProgress(value);
  }, []);

  return (
    <div className="player-controls">
      <Box flex="1">
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item>
            <IconButton
              aria-label="Skip previous"
              color="primary"
              disabled={disallows.skipping_prev}
              onClick={() => dispatch(skip(true))}
            >
              <SkipPrevious />
            </IconButton>
          </Grid>
          <Grid item>
            {!isPlaying && (
              <IconButton
                aria-label="Play"
                color="primary"
                onClick={() => dispatch(resumeAsync())}
              >
                <PlayArrow />
              </IconButton>
            )}
            {isPlaying && (
              <IconButton
                aria-label="Pause"
                color="primary"
                disabled={disallows.pausing}
                onClick={() => dispatch(pauseAsync())}
              >
                <Pause />
              </IconButton>
            )}
          </Grid>
          <Grid item>
            <IconButton
              aria-label="Skip next"
              color="primary"
              disabled={disallows.skipping_next}
              onClick={() => dispatch(skip(true))}
            >
              <SkipNext />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={2}>
            <Typography align="center">{currentProgress}</Typography>
          </Grid>
          <Grid item xs>
            <Slider
              min={0}
              max={durationMs}
              value={progress != null ? progress : progressMs}
              aria-labelledby="continuous-slider"
              step={1000}
              onChange={handleChange}
              onChangeCommitted={(value) => setProgress(null)}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">{duration}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default connect(({ player }) => ({
  isPlaying: player.is_playing,
  disallows: player?.actions?.disallows || {},
  progressMs: player.progress_ms || 0,
  durationMs: player?.item?.duration_ms || 0,
}))(PlayerControls);
