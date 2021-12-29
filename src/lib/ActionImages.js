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
const MagicalRangedActions = importAll(require.context('../images/ffxiv/icons/BLM/MagicalRangedRollAction', false, /\.(png|jpe?g|svg)$/))
const ItemActions = importAll(require.context('../images/ffxiv/icons/ITEM', false, /\.(png|jpe?g|svg)$/))

const ActionImages = {
  MAGICAL_RANGED: MagicalRangedActions,
  BLM: BLMImages,
  RDM: RDMImages,
  ITEM: ItemActions,
  MISSING_ACTION: MagicalRangedActions['break.png'],
}

export default ActionImages
