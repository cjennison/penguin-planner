import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Popover from '@mui/material/Popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faRecordVinyl, faMinusCircle, faPlusCircle, faBorderAll, faBorderNone, faCogs } from '@fortawesome/free-solid-svg-icons'

import Draggable from 'react-draggable'

import { selectEditMode, selectToolbarWindowState, selectWindowAllowClickthrough } from '../../store/system/selectors'
import { clearPlayerActions, loadPlanActions, clearPlanActions, showTrack, hideTrack } from '../../store/game/reducers'

import PHASES from '../../lib/phases'
import { selectPlayerJob, selectTrackState } from '../../store/game/selectors'
import { setEditMode, setToolbarState } from '../../store/system/reducers'
import ItemResizer from './ItemResizer'
import Configuration from '../Configuration'
import { Tooltip } from '@mui/material'

const ToolContainer = styled.div`
  height: 35px;
  width: 200px;
  background: rgba(0, 0, 0, 0.3);
`

const ToolButtonContainer = styled.div`
  position: relative;
  top: 5px;
`

const Tools = () => {
  const dispatch = useDispatch()
  const clickthroughEnabled = useSelector(selectWindowAllowClickthrough)
  const showTrackState = useSelector(selectTrackState)
  const playerJob = useSelector(selectPlayerJob)
  const editMode = useSelector(selectEditMode)
  const toolbarWindowState = useSelector(selectToolbarWindowState)

  const [configAnchorEl, setConfigAnchorEl] = useState(null)

  if (clickthroughEnabled) return null

  const configOpen = Boolean(configAnchorEl)
  console.log(playerJob, PHASES)
  return (
    <>
      <Draggable
        bounds="parent"
        disabled={!editMode}
        defaultPosition={{ x: toolbarWindowState.x, y: toolbarWindowState.y }}
        onStop={(e, d) => {
          dispatch(setToolbarState({ toolbar: { x: d.x, y: d.y }}))
        }}
      >
        <ToolContainer
          position={toolbarWindowState}
        >

          <ItemResizer
            enabled={editMode}
            targetType="toolbar"
          />

          <ToolButtonContainer>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
            >
              <Tooltip title="Toggle Track">
                <Button
                  onClick={() => {
                    if (!showTrackState) {
                      dispatch(showTrack())
                    } else {
                      dispatch(hideTrack())
                    }
                  }}
                >
                  <FontAwesomeIcon icon={showTrackState ? faMinusCircle : faPlusCircle} />
                </Button>
              </Tooltip>

              <Tooltip title="Load Opener">
                <Button
                  onClick={() => {
                    const jobPhases = PHASES[playerJob]
                    if (!jobPhases) return

                    const opener = PHASES[playerJob].OPENER
                    console.log(opener)
                    dispatch(loadPlanActions({ actions: opener, planName: 'opener' }))
                    dispatch(showTrack())
                  }}
                >
                  <FontAwesomeIcon icon={faRecordVinyl} />
                </Button>
              </Tooltip>
              <Tooltip title="Unlock UI">
                <Button
                  onClick={() => {
                    if (!editMode) {
                      dispatch(setEditMode({ editMode: true }))
                    } else {
                      dispatch(setEditMode({ editMode: false }))
                    }
                  }}
                >
                  <FontAwesomeIcon icon={!editMode ? faBorderAll : faBorderNone} />
                </Button>
              </Tooltip>
              <Tooltip title="Clear">
                <Button
                  onClick={() => {
                    dispatch(clearPlayerActions())
                    dispatch(clearPlanActions())
                  }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </Tooltip>
              <Tooltip title="Options">
                <Button
                  onClick={(e) => {
                    setConfigAnchorEl(e.currentTarget)
                  }}
                >
                  <FontAwesomeIcon icon={faCogs} />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </ToolButtonContainer>

        </ToolContainer>
      </Draggable>
      <Popover
        id="configPopover"
        open={configOpen}
        anchorEl={configAnchorEl}
        onClose={() => {
          setConfigAnchorEl(null)
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Configuration onClose={() => setConfigAnchorEl(null)} />
      </Popover>
    </>
  )
}

export default Tools
