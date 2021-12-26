import { createSlice } from '@reduxjs/toolkit'

export const systemSlice = createSlice({
    name: 'system',
    initialState: {
      locked: false,
      clickthrough: false,
      track: {
        x: 0,
        y: 0,
        width: 400,
        height: 200
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
    }
  })

export const { setLocked, setClickthrough } = systemSlice.actions

export default systemSlice.reducer