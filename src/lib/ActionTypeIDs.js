import { ACTION_TYPES } from './IDConstants'

import BLMActionTypes from './actions/BLM/types'
import RDMActionTypes from './actions/RDM/types'

const UniversalActions = {
  'Sprint': ACTION_TYPES.oGCD,
  'Tincture of Intelligence': ACTION_TYPES.CONSUMABLE,
  'Tincture of Strength': ACTION_TYPES.CONSUMABLE,
  'Tincture of Mind': ACTION_TYPES.CONSUMABLE,
  'Tincture of Dexterity': ACTION_TYPES.CONSUMABLE,
  'Orange Juice': ACTION_TYPES.CONSUMABLE,
}

const MagicalRangedActions = {
  'Swiftcast': ACTION_TYPES.oGCD,
  'Lucid Dreaming': ACTION_TYPES.oGCD,
  'Surecast': ACTION_TYPES.oGCD,
  'Addle': ACTION_TYPES.oGCD,
  'Sleep': ACTION_TYPES.GCD,
}

const ActionTypeIDs = {
  ...UniversalActions,
  ...MagicalRangedActions,
  ...BLMActionTypes,
  ...RDMActionTypes,
}

export default ActionTypeIDs
