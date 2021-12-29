import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Action from './Action'
import { selectPlayer, selectPlayerJob } from '../../store/game/selectors'
import ActionImages from '../../lib/ActionImages'
import { MagicalRangedActions, UniversalActions, ItemActions } from '../../lib/ActionSpecifications'
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

  const actionImages = player ? ActionImages[playerJob] : {}
  const magicalRangedImages = ActionImages.MAGICAL_RANGED
  const itemImages = ActionImages.ITEM

  const getPlayerActionIndex = (index) => {
    if (!performedActions) return null

    //  iterate over self and reduce the current index if a non-action is found
    let performedActionIndex = index
    for (let i = 0; i <= index; i++) {
      const gAction = actions[i]

      if (![ACTION_TYPES.oGCD, ACTION_TYPES.GCD, ACTION_TYPES.CONSUMABLE].includes(gAction.type)) {
        performedActionIndex -= 1
      }
    }

    const target = performedActions[performedActionIndex]
    return { action: target, lastIndex: performedActionIndex }
  }

  const nextGuidedActionFromIndex = (index) => {
    if (!guidingActions) return null

    //  Iterate over guidingActions until index keeping a counter for applicable indices
    let guidingActionIndex = 0
    for (let i = 0; i < index; ++i) {
      guidingActionIndex += 1
      const gAction = guidingActions[i]
      if (gAction) {
        if (![ACTION_TYPES.oGCD, ACTION_TYPES.GCD, ACTION_TYPES.CONSUMABLE].includes(gAction.type)) {
          guidingActionIndex += 1
        }
      }
    }

    let target = guidingActions[guidingActionIndex]

    if (target && ![ACTION_TYPES.oGCD, ACTION_TYPES.GCD, ACTION_TYPES.CONSUMABLE].includes(target.type)) {
      guidingActionIndex += 1
      target = guidingActions[guidingActionIndex]
    }

    return { action: target, indexDiff: guidingActionIndex - index, index: guidingActionIndex }
  }

  return (
    <Container type={type}>
      {
        (() => {
          //  TODO: This does not scale
          //  Checks if the pullbar has been accounted for in case of adding placeholders
          let accountedForPullBar = false
          return actions.map((action, i) => {
            if (action.type === ACTION_TYPES.PULL) {
              return (
                <Pullbar key={`pullbar-${i}`} />
              )
            }
            //  The action that was supposed to be used
            let failedActionMatch = false
            let guidedAction = null
            let includePlaceholder = false
            if (guidingActions) {
              const guidedActionObject = nextGuidedActionFromIndex(i)
              guidedAction = guidedActionObject.action
              includePlaceholder = !accountedForPullBar && guidedActionObject.indexDiff > 0
              if (includePlaceholder) {
                accountedForPullBar = true
              }
            }

            if (guidedAction && guidedAction.name === action.name) {
              // Return fill-in Action
              return (
                <>
                  { includePlaceholder ? (
                    <Action
                      index={i}
                      key={`p-${i}`}
                    />
                  ) : null }
                  <Action
                    index={i}
                    key={`${i}`}
                  />
                </>
              )
            } else if (guidedAction && guidedAction.name !== action.name) {
              failedActionMatch = true
            }

            let successfulActionMatch = false
            let performedAction = null
            let isNextAction = false
            if (performedActions) {
              const playerActionIndexObject = getPlayerActionIndex(i)
              performedAction = playerActionIndexObject.action

              //  If there is a matching performed action for the previous action
              //    But there is no performed action for this action
              //    then I am the next action

              if (!performedAction) {
                const prevActionIndexObject = getPlayerActionIndex(i - 1)
                if (prevActionIndexObject.action || i === 0) {
                  isNextAction = true
                }
              }
            }


            if (performedAction && performedAction.name === action.name) successfulActionMatch = true

            const formattedActionName = action.name.toLowerCase().replace(/ /g, '_')
            let actionType = 'job'
            if (MagicalRangedActions.includes(action.name)) {
              actionType = 'magicalRanged'
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
              case 'item':
                image = itemImages[`${formattedActionName}.png`]
                break
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
              <>
                { includePlaceholder ? (
                    <Action
                      index={i}
                      key={`${i}`}
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
              </>
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
