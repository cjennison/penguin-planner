import { createSlice } from '@reduxjs/toolkit'

export const systemSlice = createSlice({
    name: 'system',
    initialState: {
      locked: false,
      clickthrough: false,
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