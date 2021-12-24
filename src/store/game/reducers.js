import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
      player: null,
      playerActions: [],
      planActions: [],
      planName: null,
      showPlan: true,
    },
    reducers: {
      getPlayerFulfilled: (state, action) => {
        console.log(action)
        state.player = action.payload.player
      },

      addPlayerAction: (state, action) => {
        state.playerActions.push(action.payload.action)
      },

      clearPlayerActions: (state) => {
        state.playerActions = []
      },

      loadPlanActions: (state, action) => {
        console.log(action)
        state.planActions = action.payload.actions
        state.planName = action.payload.planName
      },

      clearPlanActions: (state) => {
        state.planActions = []
        state.planName = null
      },

      showPlan: (state) => {
        console.log("show")
        state.showPlan = true
      },

      hidePlan: (state) => {
        console.log('hide')
        state.showPlan = false
      },
    }
  })

export const { 
  getPlayerFulfilled, 
  addPlayerAction, 
  clearPlayerActions, 
  loadPlanActions,
  clearPlanActions,
  showPlan,
  hidePlan,
} = gameSlice.actions

export default gameSlice.reducer