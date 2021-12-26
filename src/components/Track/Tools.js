import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faRecordVinyl, faMinusCircle, faPlusCircle, faBorderAll, faBorderNone } from '@fortawesome/free-solid-svg-icons'

import Draggable from 'react-draggable'

import { selectEditMode, selectToolbarWindowState, selectTrackWindowState, selectWindowAllowClickthrough } from '../../store/system/selectors'
import { clearPlayerActions, loadPlanActions, clearPlanActions, showTrack, hideTrack } from '../../store/game/reducers'

import PHASES from '../../lib/phases'
import { selectPlayerJob, selectTrackState } from '../../store/game/selectors'
import { setEditMode, setToolbarState } from '../../store/system/reducers'
import ItemResizer from './ItemResizer'

const ToolContainer = styled.div`
  height: 25px;
  width: 160px;
`

const ToolButtonContainer = styled.div`
  position: relative;
  top: 5px;
`

const Tools = ({

}) => {
  const dispatch = useDispatch()
  const clickthroughEnabled = useSelector(selectWindowAllowClickthrough)
  const showTrackState = useSelector(selectTrackState)
  const playerJob = useSelector(selectPlayerJob)
  const editMode = useSelector(selectEditMode)
  const toolbarWindowState = useSelector(selectToolbarWindowState)

  if (clickthroughEnabled) return null

  return (
    <Draggable
        bounds="parent"
        disabled={!editMode}
        defaultPosition={{ x: toolbarWindowState.x, y: toolbarWindowState.y }}
        onStop={(e, d) => {
          dispatch(setToolbarState({ toolbar: { x: d.x, y: d.y } }))
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
          <Button 
              onClick={() => {
                const jobPhases = PHASES[playerJob]
                if (!jobPhases) return
        
                const opener = PHASES[playerJob].OPENER
                dispatch(loadPlanActions({ actions: opener, planName: "opener" }))
                dispatch(showTrack())
              }}
          >
            <FontAwesomeIcon icon={faRecordVinyl} />
          </Button>
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
          <Button
              onClick={() => {
                dispatch(clearPlayerActions())
                dispatch(clearPlanActions())
              }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </ButtonGroup>
      </ToolButtonContainer>
     
    </ToolContainer>
    </Draggable>
  )
}

export default Tools
