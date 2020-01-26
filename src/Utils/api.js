const TEMP_GAME_DATA = {
  players: [
    { name: "Carl", faction: "Nekrovirus", points: [{ score: 1 }] },
    { name: "Sean", faction: "Sardaak Nor", points: [] }
  ],
  gameId: "12345",
  round: "0"
};

const api = {
  fetchGame: gameId => {
    return TEMP_GAME_DATA;
  }
};

export default api;
