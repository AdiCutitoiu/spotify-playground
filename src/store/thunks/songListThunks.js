import { setSongList } from "../actions/songListActions";

export function searchAsync(queryString) {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
      if (!token) return;

      const query = `q=${encodeURIComponent(queryString)}&type=track&limit=12`;
      const response = await fetch(
        "https://api.spotify.com/v1/search?" + query,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      dispatch(setSongList(data.tracks.items));
    } catch (error) {}
  };
}
