import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faRecordVinyl, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { selectWindowAllowClickthrough } from '../../store/system/selectors'
import { clearPlayerActions, loadPlanActions, clearPlanActions, showTrack, hideTrack } from '../../store/game/reducers'

import PHASES from '../../lib/phases'
import { selectPlayerJob, selectTrackState } from '../../store/game/selectors'

const ToolContainer = styled.div`
  position: absolute;
  top: 18px;
  right: 0;
  display: flex;
`

const ToolButtonContainer = styled.div`
  height: 20px;
  width: 20px;
  color: black;
  cursor: pointer;
  background: rgba(0,0,0,0);

  :hover {
    svg {
      color: white;
    }
  }

  :active {
    color: grey;
  }
`

const Tools = () => {
  const dispatch = useDispatch()
  const clickthroughEnabled = useSelector(selectWindowAllowClickthrough)
  const showTrackState = useSelector(selectTrackState)
  const playerJob = useSelector(selectPlayerJob)

  if (clickthroughEnabled) return null

  return (
    <ToolContainer>
      <div style={{flex: 1}} />
      <ToolButtonContainer onClick={() => {
        if (!showTrackState) {
          dispatch(showTrack())
        } else {
          dispatch(hideTrack())
        }
      }}>
        <FontAwesomeIcon icon={showTrackState ? faMinusCircle : faPlusCircle} />
      </ToolButtonContainer>
      <ToolButtonContainer onClick={() => {
        const opener = PHASES[playerJob].OPENER
        dispatch(loadPlanActions({ actions: opener, planName: "opener" }))
        dispatch(showTrack())
      }}>
        <FontAwesomeIcon icon={faRecordVinyl} />
      </ToolButtonContainer>
      <ToolButtonContainer onClick={() => {
        dispatch(clearPlayerActions())
        dispatch(clearPlanActions())
      }}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </ToolButtonContainer>
    </ToolContainer>
  )
}

export default Tools
