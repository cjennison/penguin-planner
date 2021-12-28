import gameSlice from './game/reducers'
import systemSlice from './system/reducers'

const reducers = {
  game: gameSlice,
  system: systemSlice,
}

export default reducers
