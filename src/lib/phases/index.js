import BLMOpener from './BLM/opener'
import RDMOpener from './RDM/opener'

const PHASES = {
  BLM: {
    OPENER: BLMOpener,
  },
  RDM: {
    OPENER: RDMOpener,
  },
}

export default PHASES
