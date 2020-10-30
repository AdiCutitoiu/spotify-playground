import React from "react";
import { TOKEN } from "../util/api";

export function usePlayer() {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    console.log({ TOKEN });
    fetch("https://api.spotify.com/v1/me/player", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    const intervalId = setInterval(() => {
      fetch("https://api.spotify.com/v1/me/player", {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${TOKEN}` },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, 20000);

    return () => clearInterval(intervalId);
  }, [setState]);

  return state;
}
