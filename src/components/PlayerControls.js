import React from "react";
import { Slider, Grid, Typography, Box, IconButton } from "@material-ui/core";
import { GREEN } from "../util/colors";
import { PlayArrow, Pause, SkipNext, SkipPrevious } from "@material-ui/icons";
import { connect } from "react-redux";

const formatTime = (timeMs) => {
  const mins = Math.floor(timeMs / 60000);
  const secs = Math.floor((timeMs % 60000) / 1000);

  const minsStr = mins < 10 ? `0${mins}` : `${mins}`;
  const secsStr = secs < 10 ? `0${secs}` : `${secs}`;

  return `${minsStr}:${secsStr}`;
};

export function PlayerControls({
  isPlaying,
  disallows,
  progressMs,
  durationMs,
}) {
  const handleChange = (event, newValue) => {};

  const currentProgress = formatTime(progressMs);
  const duration = formatTime(durationMs);

  return (
    <div className="player-controls">
      <Box flex="1">
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item>
            <IconButton
              aria-label="Skip previous"
              color="primary"
              disabled={disallows.skipping_prev}
            >
              <SkipPrevious />
            </IconButton>
          </Grid>
          <Grid item>
            {!isPlaying && (
              <IconButton aria-label="Play" color="primary">
                <PlayArrow />
              </IconButton>
            )}
            {isPlaying && (
              <IconButton
                aria-label="Pause"
                color="primary"
                disabled={disallows.pausing}
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
              value={progressMs}
              aria-labelledby="continuous-slider"
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
