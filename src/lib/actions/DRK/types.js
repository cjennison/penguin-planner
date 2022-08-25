import { ACTION_TYPES } from '../../IDConstants'

const DRKActionTypes = {
  'Blood Weapon': ACTION_TYPES.oGCD,
  'Hard Slash': ACTION_TYPES.GCD,
  'Syphon Strike': ACTION_TYPES.GCD,
  'Souleater': ACTION_TYPES.GCD,
  'Unleash': ACTION_TYPES.oGCD,
  'Grit': ACTION_TYPES.oGCD,
  'Unmend': ACTION_TYPES.oGCD,
  'Flood of Darkness': ACTION_TYPES.oGCD,
  'Shadow Wall': ACTION_TYPES.oGCD,
  'Stalwart Soul': ACTION_TYPES.oGCD,
  'Edge of Darkness': ACTION_TYPES.oGCD,
  'Dark Mind': ACTION_TYPES.oGCD,
  'Living Dead': ACTION_TYPES.oGCD,
  'Salted Earth': ACTION_TYPES.oGCD,
  'Plunge': ACTION_TYPES.oGCD,
  'Abyssal Drain': ACTION_TYPES.oGCD,
  'Carve and Spit': ACTION_TYPES.oGCD,
  'Bloodspiller': ACTION_TYPES.GCD,
  'Quietus': ACTION_TYPES.GCD,
  'Delirium': ACTION_TYPES.oGCD,
  'The Blackest Night': ACTION_TYPES.oGCD,
  'Flood of Shadow': ACTION_TYPES.oGCD,
  'Edge of Shadow': ACTION_TYPES.oGCD,
  'Dark Missionary': ACTION_TYPES.oGCD,
  'Living Shadow': ACTION_TYPES.oGCD,
  'Oblation': ACTION_TYPES.oGCD,
  'Shadowbringer': ACTION_TYPES.oGCD,
  'Salt and Darkness': ACTION_TYPES.oGCD,
}

const DRKIgnoreActions = ['Shadowbringer']

export default DRKActionTypes
export { DRKIgnoreActions }
