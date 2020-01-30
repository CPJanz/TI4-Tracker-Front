import tiObject from "./tiObject";

const mockData = {
  TEMP_GAME_DATA: {
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
            id: "Sway the Council",
            roundClaimed: 3,
            score: 1
          }
        ],
        tech: [
          { id: "Neural Motivator", type: "green" },
          { id: "Sarween Tools", type: "yellow" },
          { id: "PDS II", color: "Unit Upgrade" }
        ]
      },
      {
        name: "Sean",
        faction: "Sardaak Nor",
        points: [
          {
            type: "Public Objective",
            id: "Sway the Council",
            roundClaimed: 3,
            score: 1
          }
        ],
        tech: [
          { id: "Neural Motivator", type: "green" },
          { id: "Sarween Tools", type: "yellow" },
          { id: "PDS II", color: "Unit Upgrade" },
          { id: "Dacxive Animators", type: "green" }
        ]
      }
    ],
    id: "12345"
  },
  TEMP_NEW_GAME_DATA: {
    round: 0,
    publicObjectives: [],
    players: [],
    id: "00001"
  }
};

export default mockData;
