import mockData from "./mockData";
import helpers from "./helpers";

const api = {
  createGame: new Promise(resolve => {
    setTimeout(() => {
      resolve({ gameCreated: true, game: mockData.TEMP_NEW_GAME_DATA });
    }, 3000);
  }),
  fetchGame: gameIdToFetch => {
    return new Promise(resolve => {
      console.log("truthy?", gameIdToFetch === mockData.TEMP_GAME_DATA.id);
      setTimeout(() => {
        resolve({
          gameFound:
            gameIdToFetch === mockData.TEMP_GAME_DATA.id ? true : false,
          game:
            gameIdToFetch === mockData.TEMP_GAME_DATA.id
              ? mockData.TEMP_GAME_DATA
              : null
        });
      }, 3000);
    });
  },
  startGame: (gameId, players) => {
    const finalPlayers = players.map(player => {
      return {
        ...player,
        tech: helpers.getStartingTech(player.faction),
        points: []
      };
    });
    const MOCK_START_GAME_DATA = {
      gameState: 1,
      round: 0,
      publicObjectives: [],
      players: finalPlayers,
      id: gameId
    };

    //Here we will update the database object with gameId (with the finalPlayers)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ gameStarted: true, game: MOCK_START_GAME_DATA });
      }, 3000);
    });
  }
};

export default api;
