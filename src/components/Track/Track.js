import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

import { useSelector, useDispatch } from 'react-redux'
import { selectDetailedTrackActions, selectPlanName, selectPlayer, selectPlayerJob, selectTrackState } from '../../store/game/selectors'

import Tools from './Tools'
import JobImage from '../../lib/JobImage'
import { JobIds } from '../../lib/IDConstants'
import ActionSet from './ActionSet'
import SupportedJobs from '../../lib/SupportedJobs'
import { selectEditMode, selectTrackWindowState } from '../../store/system/selectors'
import ItemResizer from './ItemResizer'
import { setTrackState } from '../../store/system/reducers'

const ListContainer = styled.div`
  height: 100vh;
`

const TrackContainer = styled.div`
  ${(props) => {
    if (!props.showTrack) {
      return 'display: none;'
    }
  }}

  height: 135px;
  width: 1000px;
  background: rgba(0, 0, 0, 0.3);
`

const TrackTop = styled.div`
  margin-top: 70px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 65px;
`
const TrackBottom = styled.div`
  border-bottom: 1px solid white;
  height: 65px;
`

const ImageContainer = styled.div`
`

const ActionContainer = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: -85px;
`

const TextContainer = styled.div`
  font-size: 30px;
  margin-top: -0px;
  color: white;
`

const TitleContainer = styled.div`
  display:flex;
  position: absolute;
  top: -10px;
  right: 0;
`

const Track = () => {
  const dispatch = useDispatch()

  const actions = useSelector(selectDetailedTrackActions)
  const planName = useSelector(selectPlanName)

  const showTrack = useSelector(selectTrackState)
  const trackWindowState = useSelector(selectTrackWindowState)
  const editMode = useSelector(selectEditMode)

  const player = useSelector(selectPlayer)
  const playerJob = useSelector(selectPlayerJob)

  const currentJobImage = player ? JobImage[playerJob] : null
  const jobSupported = player ? SupportedJobs[playerJob] : false

  return (
    <ListContainer>
      <Tools />
      {
        jobSupported ? (
          <Draggable
            bounds="parent"
            disabled={!editMode}
            defaultPosition={{ x: trackWindowState.x, y: trackWindowState.y }}
            onStop={(e, d) => {
              dispatch(setTrackState({ track: { x: d.x, y: d.y }}))
            }}
          >
            <TrackContainer showTrack={showTrack}>
              <ItemResizer enabled={editMode} />

              <TitleContainer>
                <ImageContainer>
                  { currentJobImage ? (<img src={currentJobImage} alt={JobIds[player.Job]} width="35" />) : null }
                </ImageContainer>
                <TextContainer>{planName}</TextContainer>
              </TitleContainer>


              <TrackTop />
              <TrackBottom />

              <ActionContainer>
                <ActionSet actions={actions.plan} performedActions={actions.player} type="plan" />
                <ActionSet actions={actions.player} guidingActions={actions.plan} type="player" />
              </ActionContainer>
            </TrackContainer>
          </Draggable>
        ) : null
      }
    </ListContainer>
  )
}

export default Track
