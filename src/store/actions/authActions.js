import { AUTH_SET_TOKEN } from "./actionTypes";

export function initialize() {
  let token = null;

  const str = window.location.hash.substr(1);

  const pairs = str.split("&").map((pairString) => pairString.split("="));
  for (const [key, value] of pairs) {
    if (key === "access_token") {
      token = value;
      break;
    }
  }

  return { type: AUTH_SET_TOKEN, token };
}
