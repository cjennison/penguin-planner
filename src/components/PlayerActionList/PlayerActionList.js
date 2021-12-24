import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { selectPlanActions, selectPlanName, selectPlanState, selectPlayer, selectPlayerActions, selectPlayerJob } from '../../store/game/selectors'

import Tools from './Tools'
import JobImage from '../../lib/JobImage'
import { JobIds } from '../../lib/IDConstants'
import ActionSet from './ActionSet'

const ListContainer = styled.div`
  text-align: left;
  height: 99vh;
`

const TrackContainer = styled.div`
  ${(props) => {
    if (!props.showPlan) {
      return 'display: none;'
    }
  }}
`

const TrackTop = styled.div`
  margin-top: 10vh;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  height: 40vh;
`
const TrackBottom = styled.div`
  border-bottom: 1px solid white;
  height: 40vh;
`

const ImageContainer = styled.div`
`

const ActionContainer = styled.div`
  padding: 20px;
  margin-top: 5vh;
`

const TextContainer = styled.div`
  font-size: 30px;
  margin-top: -10px;
`

const TitleContainer = styled.div`
  display:flex;
  position: absolute;
  top: 15px;
  left: 0;
`

const PlayerActionList = () => {
  const playerActions = useSelector(selectPlayerActions)
  const planActions = useSelector(selectPlanActions)
  const planName = useSelector(selectPlanName)

  const showPlan = useSelector(selectPlanState)

  const player = useSelector(selectPlayer)
  const playerJob = useSelector(selectPlayerJob)

  const currentJobImage = player ? JobImage[playerJob] : null

  return (
    <ListContainer>
      <Tools />
      <TrackContainer showPlan={showPlan}>
        <TitleContainer>
          <ImageContainer>
            { currentJobImage ?  (<img src={currentJobImage} alt={JobIds[player.Job]} width="35" />) : null }
          </ImageContainer>
          <TextContainer>{planName}</TextContainer>
        </TitleContainer>
        

        <TrackTop />
        <TrackBottom />

        <ActionContainer>
          <ActionSet actions={planActions} performedActions={playerActions} type="plan" />
          <ActionSet actions={playerActions} guidingActions={planActions} type="player" />
        </ActionContainer>
      </TrackContainer>
     
    </ListContainer>
  ) 
}

export default PlayerActionList
