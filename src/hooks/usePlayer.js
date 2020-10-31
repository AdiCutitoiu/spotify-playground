import React from "react";
import { useSelector } from "react-redux";

export function usePlayer() {
  const token = useSelector(({ auth }) => auth.token);

  React.useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    const intervalId = setInterval(() => {
      fetch("https://api.spotify.com/v1/me/player", {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, 20000);

    return () => clearInterval(intervalId);
  }, [token]);

  return state;
}
