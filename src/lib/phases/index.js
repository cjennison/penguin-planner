import BLMOpener from './BLM/opener'
import RDMOpener from './RDM/opener'
import RPROpener from './RPR/opener'
import MCHOpener from './MCH/opener'
import MNKOpener from './MNK/opener'
import DRKOpener from './DRK/opener'

const PHASES = {
  BLM: {
    OPENER: BLMOpener,
  },
  RDM: {
    OPENER: RDMOpener,
  },
  RPR: {
    OPENER: RPROpener,
  },
  MCH: {
    OPENER: MCHOpener,
  },
  MNK: {
    OPENER: MNKOpener,
  },
  DRK: {
    DRKOpener: DRKOpener,
  },
}

export default PHASES
