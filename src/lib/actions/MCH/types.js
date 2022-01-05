import { ACTION_TYPES } from '../../IDConstants'

const MCHActionTypes = {
  'Split Shot': ACTION_TYPES.GCD,
  'Slug SHot': ACTION_TYPES.GCD,
  'Hot Shot': ACTION_TYPES.GCD,
  'Spread Shot': ACTION_TYPES.GCD,
  'Clean Shot': ACTION_TYPES.GCD,
  'Heat Blast': ACTION_TYPES.GCD,
  'Auto Crossbow': ACTION_TYPES.GCD,
  'Heated Split Shot': ACTION_TYPES.GCD,
  'Heated Slug Shot': ACTION_TYPES.GCD,
  'Heated Clean Shot': ACTION_TYPES.GCD,
  'Drill': ACTION_TYPES.GCD,
  'Bioblaster': ACTION_TYPES.GCD,
  'Air Anchor': ACTION_TYPES.GCD,
  'Scattergun': ACTION_TYPES.GCD,
  'Chainsaw': ACTION_TYPES.GCD,
  'ChainSaw': ACTION_TYPES.GCD,

  'Flamethrower': ACTION_TYPES.oGCD,
  'Reassemble': ACTION_TYPES.oGCD,
  'Hypercharge': ACTION_TYPES.oGCD,
  'Rook Autoturret': ACTION_TYPES.oGCD,
  'Rook Overdrive': ACTION_TYPES.oGCD,
  'Wildfire': ACTION_TYPES.oGCD,
  'Detonator': ACTION_TYPES.oGCD,
  'Guass Round': ACTION_TYPES.oGCD,
  'Ricochet': ACTION_TYPES.oGCD,
  'Tactician': ACTION_TYPES.oGCD,
  'Barrel Stabilizer': ACTION_TYPES.oGCD,
  'Queen Overdrive': ACTION_TYPES.oGCD,
  'Automaton Queen': ACTION_TYPES.oGCD,
}

const MCHIgnoreActions = ['Rook Overload', 'Crowned Collider', 'Pile Bunker', 'Roller Dash', 'Arm Punch']

export default MCHActionTypes
export { MCHIgnoreActions }
