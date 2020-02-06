const mockData = {
  TEMP_GAME_DATA: {
    gameState: 1,
    round: 3,
    publicObjectives: [
      { roundRevealed: 1, id: 1 },
      { roundRevealed: 1, id: 4 }
    ],
    players: [
      {
        name: "Carl",
        faction: 0,
        points: [
          {
            id: 1,
            roundClaimed: 2
          },
          {
            id: 4,
            roundClaimed: 3
          }
        ],
        tech: [1, 2, 5, 11]
      },
      {
        name: "Sean",
        faction: 1,
        points: [
          {
            id: 4,
            roundClaimed: 3
          }
        ],
        tech: [3, 22, 45]
      }
    ],
    id: "12345"
  },
  TEMP_NEW_GAME_DATA: {
    gameState: 0,
    round: 0,
    publicObjectives: [],
    players: [],
    id: "00001"
  }
};

export default mockData;
