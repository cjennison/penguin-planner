import { createSelector } from 'reselect'

export const selectWindowLocked = createSelector(
  (state) => state.system,
  (system) =>
  system.locked
)

export const selectWindowAllowClickthrough = createSelector(
  (state) => state.system,
  (system) =>
  system.clickthrough
)
