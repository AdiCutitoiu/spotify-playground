import { PLAYER_PAUSE, PLAYER_RESUME, PLAYER_UPDATE_DATA } from "./actionTypes";

export function updatePlayerData(playerData) {
  return { type: PLAYER_UPDATE_DATA, playerData };
}

export function resume() {
  return { type: PLAYER_RESUME };
}

export function pause() {
  return { type: PLAYER_PAUSE };
}
