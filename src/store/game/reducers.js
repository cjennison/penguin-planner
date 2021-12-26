import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
      player: null,
      playerActions: [],
      planActions: [],
      planName: null,
      showTrack: true,
    },
    reducers: {
      getPlayerFulfilled: (state, action) => {
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

      showTrack: (state) => {
        state.showTrack = true
      },

      hideTrack: (state) => {
        state.showTrack = false
      },
    }
  })

export const { 
  getPlayerFulfilled, 
  addPlayerAction, 
  clearPlayerActions, 
  loadPlanActions,
  clearPlanActions,
  showTrack,
  hideTrack,
} = gameSlice.actions

export default gameSlice.reducer