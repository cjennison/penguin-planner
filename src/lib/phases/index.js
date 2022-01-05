import BLMOpener from './BLM/opener'
import RDMOpener from './RDM/opener'
import RPROpener from './RPR/opener'
import MCHOpener from './MCH/opener'

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
}

export default PHASES
