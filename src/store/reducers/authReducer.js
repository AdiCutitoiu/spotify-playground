import { AUTH_SET_TOKEN } from "../actions/actionTypes";

export default function AuthReducer(state, action) {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return state;
  }

  return state;
}
