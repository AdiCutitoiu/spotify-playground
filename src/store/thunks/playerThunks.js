import { resume, pause } from "../actions/playerActions";

export function resumeAsync() {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      if (!token) return;

      await fetch("https://api.spotify.com/v1/me/player/play", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {}
  };
}

export function pauseAsync() {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    if (!token) return;

    await fetch("https://api.spotify.com/v1/me/player/pause", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

export function skip(next) {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    if (!token) return;

    await fetch(
      `https://api.spotify.com/v1/me/player/${next ? "next" : "previous"}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
}

export function playSongAsync(uri) {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      if (!token) return;

      await fetch("https://api.spotify.com/v1/me/player/play", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ uris: [uri] }),
      });
    } catch (error) {}
  };
}
