import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { SearchAppBar } from "../components/AppBar";
import { Player } from "../components/Player";
import PlayerUpdateListener from "../components/PlayerUpdateListener";
import SongList from "../components/SongList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PlayerUpdateListener />
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        <SongList />
      </Container>
      <footer className={classes.footer}>
        <Player />
      </footer>
    </div>
  );
}
