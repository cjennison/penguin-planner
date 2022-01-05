import { ACTION_TYPES } from './IDConstants'

import BLMActionTypes from './actions/BLM/types'
import RDMActionTypes from './actions/RDM/types'
import MCHActionTypes, { MCHIgnoreActions } from './actions/MCH/types'

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

const PhysicalRangedActions = {
  'Leg Graze': ACTION_TYPES.oGCD,
  'Second Wind': ACTION_TYPES.oGCD,
  'Foot Graze': ACTION_TYPES.oGCD,
  'Peloton': ACTION_TYPES.oGCD,
  'Head Graze': ACTION_TYPES.oGCD,
  'Arm\'s Length': ACTION_TYPES.oGCD,
}

const ActionTypeIDs = {
  ...UniversalActions,
  ...MagicalRangedActions,
  ...PhysicalRangedActions,
  ...BLMActionTypes,
  ...RDMActionTypes,
  ...MCHActionTypes,
}

const IgnoredActionTypeIDs = [
  ...MCHIgnoreActions,
]

export default ActionTypeIDs
export { IgnoredActionTypeIDs }
