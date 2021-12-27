import { ACTION_TYPES } from "./IDConstants"

import BLMActionTypes from "./actions/BLM/types"

const UniversalActions = {
  "Sprint": ACTION_TYPES.GCD,
  "Tincture of Intelligence": ACTION_TYPES.CONSUMABLE,
  "Tincture of Strength": ACTION_TYPES.CONSUMABLE,
  "Tincture of Mind": ACTION_TYPES.CONSUMABLE,
  "Tincture of Dexterity": ACTION_TYPES.CONSUMABLE,
  "Orange Juice": ACTION_TYPES.CONSUMABLE,
}

const MagicalRangedActions = {
  "Swiftcast": ACTION_TYPES.GCD,
  "Lucid Dreaming": ACTION_TYPES.GCD,
  "Surecast": ACTION_TYPES.GCD,
  "Addle": ACTION_TYPES.GCD,
  "Sleep": ACTION_TYPES.GCD,
}

const ActionTypeIDs = {
  ...UniversalActions,
  ...MagicalRangedActions,
  ...BLMActionTypes
}

export default ActionTypeIDs
