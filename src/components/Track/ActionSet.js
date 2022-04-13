import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Action from './Action'
import { selectConfiguration, selectPlayer, selectPlayerJob } from '../../store/game/selectors'
import ActionImages from '../../lib/ActionImages'
import { MagicalRangedActions, UniversalActions, ItemActions, MeleeActions } from '../../lib/ActionSpecifications'
import { ACTION_TYPES } from '../../lib/IDConstants'
import Pullbar from './Pullbar'

const Container = styled.div`
  display: inline-flex;
  position: absolute;

  ${((props) => {
    if (props.type === 'player') {
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
  const configuration = useSelector(selectConfiguration)

  const actionImages = player ? ActionImages[playerJob] : {}
  const magicalRangedImages = ActionImages.MAGICAL_RANGED
  const meleeImages = ActionImages.MELEE
  const itemImages = ActionImages.ITEM

  const nextGuidedActionFromIndex = (index) => {
    if (!guidingActions) return null

    //  Find the guided action with the matching executable index
    const executableGuidingAction = guidingActions.find((a) => a.executableActionIndex === index)
    const sameIndexAction = guidingActions[index]

    return {
      action: executableGuidingAction,
      indexAction: sameIndexAction,
    }
  }

  let currentActionIndex = 0
  if (type === 'player') {
    currentActionIndex = actions.length
  } else {
    currentActionIndex = performedActions.length
  }

  const MAX_PERFORMED_ACTIONS = configuration.showLastNActions.num
  const MAX_FUTURE_ACTIONS = configuration.showNextNActions.num

  return (
    <Container type={type}>
      {
        (() => {
          return actions.map((action, i) => {
            if (configuration.showLastNActions.enabled && i < currentActionIndex - MAX_PERFORMED_ACTIONS) return null
            if (configuration.showNextNActions.enabled && i > currentActionIndex + MAX_FUTURE_ACTIONS) return null
            if (action.type === ACTION_TYPES.PULL) {
              return (
                <Pullbar key={`pullbar-${i}`} />
              )
            }

            let failedActionMatch = false
            let guidedAction = null
            let includePlaceholder = false
            if (guidingActions) {
              const guidedActionObject = nextGuidedActionFromIndex(i)
              guidedAction = guidedActionObject.action

              const indexAction = guidedActionObject.indexAction
              if (indexAction && indexAction.type === ACTION_TYPES.PULL) {
                includePlaceholder = true
              }
            }

            if (guidedAction && guidedAction.name === action.name) {
              // Return fill-in Action
              return (
                <div style={{ display: 'inherit' }} key={`c-${i}`}>
                  { includePlaceholder ? (
                    <Action
                      index={i}
                      key={`p-${i}`}
                    />
                  ) : null }a
                  <Action
                    index={i}
                    key={`s-${i}`}
                  />
                </div>
              )
            } else if (guidedAction && guidedAction.name !== action.name) {
              //  Do not show the incorrect action
              return (
                <div style={{ display: 'inherit' }} key={`c-${i}`}>
                  { includePlaceholder ? (
                    <Action
                      index={i}
                      key={`p-${i}`}
                    />
                  ) : null }
                </div>
              )
            }

            let successfulActionMatch = false
            let performedAction = null
            let isNextAction = false
            if (performedActions) {
              performedAction = performedActions[action.executableActionIndex]

              //  If there is a matching performed action for the previous action
              //    But there is no performed action for this action
              //    then I am the next action

              if (!performedAction) {
                const prevAction = performedActions[action.executableActionIndex - 1]
                if (prevAction || i === 0) {
                  isNextAction = true
                }
              }
            }

            if (performedAction && performedAction.name === action.name) successfulActionMatch = true
            else if (performedAction && performedAction.name !== action.name) failedActionMatch = true

            const formattedActionName = action.name.toLowerCase().replace(/ /g, '_')
            let actionType = 'job'
            if (MagicalRangedActions.includes(action.name)) {
              actionType = 'magicalRanged'
            }

            if (MeleeActions.includes(action.name)) {
              actionType = 'melee'
            }

            if (UniversalActions.includes(action.name)) {
              actionType = 'universal'
            }

            if (ItemActions.includes(action.name)) {
              actionType = 'item'
            }

            let image = null
            switch (actionType) {
              case 'job':
                image = actionImages && actionImages[`${formattedActionName}.png`]
                break
              case 'magicalRanged':
                image = magicalRangedImages[`${formattedActionName}.png`]
                break
              case 'melee':
                image = meleeImages[`${formattedActionName}.png`]
                break
              case 'item':
                image = itemImages[`${formattedActionName}.png`]
                break
              case 'universal':
              default:
                return null
            }

            if (!image) {
              image = ActionImages.MISSING_ACTION
              console.warn('missing action', formattedActionName, action.name)
            }

            let displayType = action.type
            if (guidedAction && failedActionMatch) {
              displayType = guidedAction.type
            }

            return (
              <div style={{ display: 'inherit' }} key={`c-${i}`}>
                { includePlaceholder ? (
                    <Action
                      index={i}
                      key={`${i}-placeholder`}
                    />
                ) : null }
                <Action
                  active={isNextAction}
                  altText={formattedActionName}
                  index={i}
                  image={image}
                  key={`${i} - ${action.name}`}
                  type={displayType}
                  success={successfulActionMatch}
                  failure={failedActionMatch}
                  note={action.note}
                />
              </div>
            )
          })
        })()

      }
    </Container>
  )
}

ActionSet.propTypes = {
  actions: PropTypes.array,
  guidingActions: PropTypes.array,
  performedActions: PropTypes.array,
  type: PropTypes.string,
}

export default ActionSet
