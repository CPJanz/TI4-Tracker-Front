import mockData from "./mockData";

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
  }
};

export default api;
