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
          id: "Sway the Council",
          roundClaimed: 3,
          score: 1
        }
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
      ]
    }
  ],
  id: "12345"
};

const TEMP_NEW_GAME_DATA = {
  round: 0,
  publicObjectives: [],
  players: [],
  id: "00001"
};

const api = {
  createGame: new Promise(resolve => {
    setTimeout(() => {
      resolve({ gameCreated: true, game: TEMP_NEW_GAME_DATA });
    }, 3000);
  }),
  fetchGame: gameIdToFetch => {
    return new Promise(resolve => {
      console.log("truthy?", gameIdToFetch === TEMP_GAME_DATA.id);
      setTimeout(() => {
        resolve({
          gameFound: gameIdToFetch === TEMP_GAME_DATA.id ? true : false,
          game: gameIdToFetch === TEMP_GAME_DATA.id ? TEMP_GAME_DATA : null
        });
      }, 3000);
    });
  }
};

export default api;
