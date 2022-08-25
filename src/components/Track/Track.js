import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import { Resizable } from 're-resizable'

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal } from '@fortawesome/free-solid-svg-icons'

const ListContainer = styled.div`
  height: 100vh;
`

const TrackContainer = styled.div`
  ${(props) => {
    if (!props.showTrack) {
      return 'display: none;'
    }
  }}

  height: ${(props) => props.trackState.height}px;
  width: ${(props) => props.trackState.width}px;
  background: rgba(0, 0, 0, 0.3);
`

const TrackTop = styled.div`
  margin-top: 70px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 50%;
`
const TrackBottom = styled.div`
  border-bottom: 1px solid white;
  height: 50%;
`

const ImageContainer = styled.div`
  padding-left: 5px;
  margin-top: 5px;
`

const ActionContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 100%;
  width: 100%;
  overflow: hidden;

  &> div {
    left: 10px;
    top: ${(props) => props.height/2}px;
    margin-top: -25px;
  }
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

const ResizeHandle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;

  right: 10px;
  bottom: 10px;
  color: white;
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
        jobSupported || true ? (
          <Draggable
            bounds="parent"
            disabled={!editMode}
            defaultPosition={{ x: trackWindowState.x, y: trackWindowState.y }}
            onStop={(e, d) => {
              dispatch(setTrackState({ track: { x: d.x, y: d.y }}))
            }}
          >
            <Resizable
              enable={{ bottom: false, top: false, bottomRight: !editMode }}
              size={{
                height: trackWindowState.height,
                width: trackWindowState.width,
              }}
              minHeight={100}
              maxHeight={500}
              minWidth={300}
              maxWidth={2500}

              onResize={(e, dir, ref, d) => {
                const refBound = ref.getBoundingClientRect()
                dispatch(setTrackState({
                  track: {
                    width: refBound.width,
                    height: refBound.height,
                  },
                }))
              }}
            >
              <ItemResizer enabled={editMode} />
              <TrackContainer className="" trackState={trackWindowState} showTrack={showTrack}>

                <TitleContainer>
                  <TextContainer>{planName}</TextContainer>
                  <ImageContainer>
                    { currentJobImage ? (<img src={currentJobImage} alt={JobIds[player.Job]} width="35" />) : null }
                  </ImageContainer>
                </TitleContainer>


                <TrackTop />
                <TrackBottom />

                <ActionContainer height={trackWindowState.height}>
                  <ActionSet actions={actions.plan} performedActions={actions.player} type="plan" />
                  <ActionSet actions={actions.player} guidingActions={actions.plan} type="player" />
                </ActionContainer>
                {
                  !editMode ? (
                    <ResizeHandle>
                      <FontAwesomeIcon icon={faSignal} />
                    </ResizeHandle>
                  ) : null
                }

              </TrackContainer>
            </Resizable>
          </Draggable>
        ) : null
      }
    </ListContainer>
  )
}

export default Track
