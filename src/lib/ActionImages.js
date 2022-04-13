/* eslint-disable require-jsdoc */

function importAll(r) {
  const images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item); return null
  })
  return images
}
const RDMImages = importAll(require.context('../images/ffxiv/icons/RDM', false, /\.(png|jpe?g|svg)$/))
const BLMImages = importAll(require.context('../images/ffxiv/icons/BLM', false, /\.(png|jpe?g|svg)$/))
const RPRImages = importAll(require.context('../images/ffxiv/icons/RPR', false, /\.(png|jpe?g|svg)$/))
const MCHImages = importAll(require.context('../images/ffxiv/icons/MCH', false, /\.(png|jpe?g|svg)$/))
const MNKImages = importAll(require.context('../images/ffxiv/icons/MNK', false, /\.(png|jpe?g|svg)$/))

const TankActions = importAll(require.context('../images/ffxiv/icons/ROLE_ACTIONS/Tank', false, /\.(png|jpe?g|svg)$/))
const MeleeActions = importAll(require.context('../images/ffxiv/icons/ROLE_ACTIONS/Melee', false, /\.(png|jpe?g|svg)$/))
const PhysicalRangedActions = importAll(require.context('../images/ffxiv/icons/ROLE_ACTIONS/Physical_Ranged', false, /\.(png|jpe?g|svg)$/))
const MagicalRangedActions = importAll(require.context('../images/ffxiv/icons/ROLE_ACTIONS/Magical_Ranged', false, /\.(png|jpe?g|svg)$/))
const HealerActions = importAll(require.context('../images/ffxiv/icons/ROLE_ACTIONS/Healer', false, /\.(png|jpe?g|svg)$/))
const ItemActions = importAll(require.context('../images/ffxiv/icons/ITEM', false, /\.(png|jpe?g|svg)$/))

const ActionImages = {
  BLM: BLMImages,
  RDM: RDMImages,
  RPR: RPRImages,
  MCH: MCHImages,
  MNK: MNKImages,

  TANK: TankActions,
  MELEE: MeleeActions,
  PHYSICAL_RANGED: PhysicalRangedActions,
  MAGICAL_RANGED: MagicalRangedActions,
  HealerActions: HealerActions,
  ITEM: ItemActions,
  MISSING_ACTION: MagicalRangedActions['break.png'],
}

export default ActionImages
