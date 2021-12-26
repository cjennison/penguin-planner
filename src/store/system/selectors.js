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

export const selectTrackWindowState = createSelector(
  (state) => state.system,
  (system) =>
    system.track
)

export const selectToolbarWindowState = createSelector(
  (state) => state.system,
  (system) =>
    system.toolbar
)

export const selectEditMode = createSelector(
  (state) => state.system,
  (system) =>
    system.editMode
)
