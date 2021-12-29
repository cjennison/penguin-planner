import { createSelector } from 'reselect'
import { ACTION_TYPES, JobIds } from '../../lib/IDConstants'

export const selectPlayerActions = createSelector(
    (state) => state.game,
    (game) => {
      const actions = game.playerActions || []

      return actions.filter((a) => {
        if (a.type === ACTION_TYPES.CONSUMABLE && !game.configuration.enableConsumables) return false
        return true
      })
    },
)

export const selectPlanActions = createSelector(
    (state) => state.game,
    (game) =>{
      const actions = game.planActions || []

      return actions.filter((a) => {
        if (a.type === ACTION_TYPES.CONSUMABLE && !game.configuration.enableConsumables) return false
        return true
      })
    },
)

export const selectPlayerCompletedPlan = createSelector(
    (state) => state.game,
    selectPlayerActions,
    selectPlanActions,
    (game, playerActions, planActions) => {
      const clearedPlanActions = planActions.filter((action) => [ACTION_TYPES.oGCD, ACTION_TYPES.GCD, ACTION_TYPES.CONSUMABLE].includes(action.type))
      if (playerActions.length >= clearedPlanActions.length) return true
      return false
    },
)

export const selectPlanName = createSelector(
    (state) => state.game,
    (game) =>
      game.planName || null,
)

export const selectPlayer = createSelector(
    (state) => state.game,
    (game) =>
      game.player,
)

export const selectPlayerJob = createSelector(
    (state) => state.game,
    (game) => {
      const player = game.player
      if (player) {
        return JobIds[player.Job]
      }

      return 'NONE'
    },
)

export const selectTrackState = createSelector(
    (state) => state.game,
    (game) => {
      return game.showTrack
    },
)


export const selectConfiguration = createSelector(
    (state) => state.game,
    (game) => {
      return game.configuration
    },
)
