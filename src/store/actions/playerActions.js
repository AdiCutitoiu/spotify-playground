import { PLAYER_UPDATE_DATA } from "./actionTypes";

export function updatePlayerData(playerData) {
  return { type: PLAYER_UPDATE_DATA, playerData };
}
