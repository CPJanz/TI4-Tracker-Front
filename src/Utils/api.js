const TEMP_GAME_DATA = {
  round: 3,
  publicObjectives: [
    { roundRevealed: 1, id: "Sway the Council", score: 1 },
    { roundRevealed: 1, id: "Develop Weaponry", score: 1 },
    { roundRevealed: 2, id: "Erect a Monument", score: 1 },
    { roundRevealed: 3, id: "Corner the Market", score: 1 }
  ],
  players: [
    {
      name: "Carl",
      faction: "Nekrovirus",
      points: [
        {
          type: "Secret Objective",
          id: "Destroy Their Greatest Ship",
          roundClaimed: 2,
          score: 1
        },
        {
          type: "Public Objective",
          id: "Sway the Council ",
          roundClaimed: 3,
          score: 1
        }
      ]
    },
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
