function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return null; });
  return images;
}

const BLMImages = importAll(require.context('../images/ffxiv/icons/BLM', false, /\.(png|jpe?g|svg)$/));
const MagicalRangedActions = importAll(require.context('../images/ffxiv/icons/BLM/MagicalRangedRollAction', false, /\.(png|jpe?g|svg)$/));

const ActionImages = {
  MAGICAL_RANGED: MagicalRangedActions,
  BLM: BLMImages,
  MISSING_ACTION: MagicalRangedActions["break.png"],
}

export default ActionImages