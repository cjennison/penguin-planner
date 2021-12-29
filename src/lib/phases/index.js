import BLMOpener from './BLM/opener'
import RDMOpener from './RDM/opener'
import RPROpener from './RPR/opener'

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
}

export default PHASES
