import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Action from './Action'
import { selectPlayer, selectPlayerJob } from '../../store/game/selectors'
import ActionImages from '../../lib/ActionImages'
import { MagicalRangedActions, UniversalActions } from '../../lib/ActionSpecifications'

const Container = styled.div`
  display: inline-flex;
  position: absolute;

  ${(props => {
    if(props.type === 'player') {
      return `
        margin-top: -8px;
        margin-left: 8px;
      `
    }

    return null
  })}
`

const ActionSet = ({
  actions,
  guidingActions,
  performedActions,
  type,
}) => {
  const player = useSelector(selectPlayer)
  const playerJob = useSelector(selectPlayerJob)

  const actionImages = player ? ActionImages[playerJob] : {}
  const magicalRangedActions = ActionImages.MAGICAL_RANGED

  return (
    <Container type={type}>
      {
          actions.map((action, i) => {
            //  The action that was supposed to be used
            let failedActionMatch = false
            const guidedAction = guidingActions ? guidingActions[i] : null
            if (guidedAction && guidedAction.name === action.name) {
              return null
            } else  if (guidedAction && guidedAction.name !== action.name) {
              failedActionMatch = true
            }

            let successfulActionMatch = false
            const performedAction = performedActions ? performedActions[i] : null
            if (performedAction && performedAction.name === action.name) successfulActionMatch = true

            const formattedActionName = action.name.toLowerCase().replace(/ /g,"_")
            let actionType = "job"
            if (MagicalRangedActions.includes(action.name)) {
              actionType = "magicalRanged"
            }

            if (UniversalActions.includes(action.name)) {
              actionType = "universal"
            }

            let image = null
            switch (actionType) {
              case 'job':
                image = actionImages && actionImages[`${formattedActionName}.png`]
                break;
              case 'magicalRanged':
                image = magicalRangedActions[`${formattedActionName}.png`]
                break;
              case 'universal':
              default:
                return null
            }

            if (!image) {
              image = ActionImages.MISSING_ACTION
              console.warn('missing action', formattedActionName)
            }

            let displayType = action.type
            if (guidedAction && failedActionMatch) {
              displayType = guidedAction.type
            }

            return (
              <Action
                altText={formattedActionName}
                index={i}
                image={image}
                key={`${i} - ${action.name}`}
                type={displayType}
                success={successfulActionMatch}
                failure={failedActionMatch}
              />
            )
          })
        }
    </Container>
  )
}

export default ActionSet
