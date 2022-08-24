import { ACTION_TYPES } from './IDConstants'

import BLMActionTypes from './actions/BLM/types'
import RDMActionTypes from './actions/RDM/types'
import MCHActionTypes, { MCHIgnoreActions } from './actions/MCH/types'
import MNKActionTypes from './actions/MNK/types'
import DRKActionTypes, { DRKIgnoreActions } from './actions/DRK/types'

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

const MeleeActions = {
  'True North': ACTION_TYPES.oGCD,
  'Second Wind': ACTION_TYPES.oGCD,
  'Bloodbath': ACTION_TYPES.oGCD,
  'Feint': ACTION_TYPES.oGCD,
  'Leg Sweep': ACTION_TYPES.oGCD,
  'Arm\'s Length': ACTION_TYPES.oGCD,
}

const TankActions = {
  'Provoke': ACTION_TYPES.oGCD,
}

const ActionTypeIDs = {
  ...UniversalActions,
  ...MagicalRangedActions,
  ...PhysicalRangedActions,
  ...MeleeActions,
  ...BLMActionTypes,
  ...RDMActionTypes,
  ...MCHActionTypes,
  ...MNKActionTypes,
  ...DRKActionTypes,
  ...TankActions,
}

const IgnoredActionTypeIDs = [
  ...MCHIgnoreActions,
  ...DRKIgnoreActions,
]

export default ActionTypeIDs
export { IgnoredActionTypeIDs }
