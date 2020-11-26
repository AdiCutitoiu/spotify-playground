import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export default function CustomizedInputBase({ onSearch }) {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            onSearch(value);
          }
        }}
        onChange={onChange}
        value={value}
      />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => onSearch(value)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
