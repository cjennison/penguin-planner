import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPlayerAction, clearPlanActions, clearPlayerActions, getPlayerFulfilled, hideTrack, removePlayerAction } from '../store/game/reducers'
import { selectPlanActions, selectPlayerActions, selectPlayerCompletedPlan } from '../store/game/selectors'
import { setLocked } from '../store/system/reducers'
import ActionReader from './ActionReader'
import { MAX_PLAYER_ACTIONS } from './SystemConstants'

const OverlayController = () => {
  const dispatch = useDispatch()

  const planActions = useSelector(selectPlanActions)
  const playerActions = useSelector(selectPlayerActions)

  const planCompleted = useSelector(selectPlayerCompletedPlan)

  useEffect(() => {
    if (playerActions.length > MAX_PLAYER_ACTIONS) {
      dispatch(removePlayerAction())
    }
    if (planActions.length && planCompleted) {
      setTimeout(() => {
        dispatch(clearPlanActions())
        dispatch(clearPlayerActions())
        dispatch(hideTrack())
      }, 4000)
    }
  }, [playerActions])

  const getCurrentPlayer = () => {
    window.callOverlayHandler({ call: 'getCombatants' }).then((data) => {
      const player = data.combatants[0]
      if (player && player.Name) {
        console.log('Loaded Player', player)
        dispatch(getPlayerFulfilled({ player: player }))
      }
    })
  }

  useEffect(() => {
    //  Attach to OverlayPlugin
    document.addEventListener('onLogLine', (e) => {
      const result = ActionReader.readLine(e.detail)

      if (result.type === 'CHANGE_JOB') {
        getCurrentPlayer()
        dispatch(clearPlanActions())
        dispatch(clearPlayerActions())
      }

      if (result.isValidAction) {
        dispatch(addPlayerAction({ action: result.action }))
      }
    })

    document.addEventListener('onCombatData', (e) => {
      console.log('onCombatData', e)

      if (e.detail.isActive === 'false') {
        //  dispatch(clearPlayerActions())
      }
    })

    document.addEventListener('onStateUpdate', (e) => {
      console.log('onStateUpdate', e)

      const payload = e.detail
      if (payload.isLocked === false || payload.isLocked === true) {
        dispatch(setLocked({ locked: payload.isLocked }))
      }
    })

    document.addEventListener('onPlayerData', (e) => {
      console.log('onPlayerData', e)
    })

    document.addEventListener('onPartyChange', (e) => {
      console.log('onPartyChange', e)
    })

    getCurrentPlayer()
  }, [])

  return null
}

export default OverlayController
