import React from "react";
import { Slider, Grid, Typography, Box, IconButton } from "@material-ui/core";
import { GREEN } from "../util/colors";
import { PlayArrow, Pause, SkipNext, SkipPrevious } from "@material-ui/icons";

export function PlayerControls() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="player-controls">
      <Box flex="1">
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item>
            <IconButton aria-label="Skip previous" color="primary">
              <SkipPrevious />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="Play" color="primary">
              <PlayArrow />
            </IconButton>
            <IconButton aria-label="Play" color="primary">
              <Pause />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="Skip next" color="primary">
              <SkipNext />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item xs={2}>
            <Typography align="center">01:38</Typography>
          </Grid>
          <Grid item xs>
            <Slider
              value={value}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">03:30</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
