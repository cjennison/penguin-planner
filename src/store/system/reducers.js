import { createSlice } from '@reduxjs/toolkit'

export const systemSlice = createSlice({
  name: 'system',
  initialState: {
    locked: false,
    clickthrough: false,
    editMode: false,
    track: {
      x: 0,
      y: 0,
      width: 1000,
      height: 135,
    },
    toolbar: {
      x: 0,
      y: 0,
    },
  },
  reducers: {
    setLocked: (state, action) => {
      state.locked = action.payload.locked
    },

    setClickthrough: (state, action) => {
      state.clickthrough = action.payload.clickthrough
    },

    setEditMode: (state, action) => {
      state.editMode = action.payload.editMode
    },

    setTrackState: (state, action) => {
      state.track = {
        ...state.track,
        ...action.payload.track,
      }
    },

    setToolbarState: (state, action) => {
      state.toolbar = {
        ...state.toolbar,
        ...action.payload.toolbar,
      }
    },
  },
})

export const {
  setLocked,
  setClickthrough,
  setTrackState,
  setToolbarState,
  setEditMode,
} = systemSlice.actions

export default systemSlice.reducer
