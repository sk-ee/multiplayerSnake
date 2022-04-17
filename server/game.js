const { GRID_SIZE } = require('./constants');

module.exports = {
  initGame,
  gameLoop,
  getUpdatedVelocity,
}

function initGame() {
  const state = createGameState()
  randomFood(state);
  return state;
}

function createGameState() {
  return {
    players: [{
      pos: {
        x: 3,
        y: 10,
      },
      snake: [
        {x: 1, y: 10},
        {x: 1, y: 10},
        {x: 1, y: 10},
      ],
    }, {
      pos: {
        x: 18,
        y: 10,
      },
      snake: [
        {x: 20, y: 10},
        {x: 19, y: 10},
        {x: 18, y: 10},
      ],
    }],
    gridsize: GRID_SIZE,
  };
}

function gameLoop(state) {
  if (!state) {
    return;
  }

  const playerOne = state.players[0];
  const playerTwo = state.players[1];
}
