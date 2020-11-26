import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { playSongAsync } from "../store/thunks/playerThunks";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
});

function SimpleCard({ name, artist, uri, imageUri: imageUrl, dispatch }) {
  const classes = useStyles();

  console.log({ imageUri: imageUrl });

  return (
    <Card>
      <CardMedia className={classes.media} image={imageUrl} src={imageUrl} />
      <CardContent>
        <Typography variant="h5" component="h2" noWrap>
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" noWrap>
          {artist}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => dispatch(playSongAsync(uri))}
        >
          Play
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect()(SimpleCard);
