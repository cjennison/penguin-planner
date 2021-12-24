import { createSelector } from 'reselect'
import { JobIds } from '../../lib/IDConstants'

export const selectPlayerActions = createSelector(
  (state) => state.game,
  (game) =>
    game.playerActions || []
)

export const selectPlanActions = createSelector(
  (state) => state.game,
  (game) =>
    game.planActions || []
)

export const selectPlanName = createSelector(
  (state) => state.game,
  (game) =>
    game.planName || null
)

export const selectPlayer = createSelector(
  (state) => state.game,
  (game) =>
    game.player
)

export const selectPlayerJob = createSelector(
  (state) => state.game,
  (game) => {
    const player = game.player
    if (player) {
      return JobIds[player.Job]
    }

    return "NONE"
  }
)

export const selectPlanState = createSelector(
  (state) => state.game,
  (game) => {
    return game.showPlan
  }
)