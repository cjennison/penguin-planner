/* eslint-disable max-len */
import ActionTypeIDs from './ActionTypeIDs'

const ActionMatches = [
  {
    matchRegex: /(?<=\bYou use\s)(\S+\s*\S+\s*\w+)/g,
  },
  {
    matchRegex: /(?<=\bYou cast\s)(\w+\s*\w+\s*\w+)/g,
  },
  {
    matchRegex: /(?<=\bYou use a grade \d\s)(\w+\s\w+\s\w+)/g,
    type: 'item', // ie. returns tincture of intelligence
  },
  {
    matchRegex: /(?<=\bYou use a bottle of\s)(\w+\s\w+)/g,
    type: 'item2', // ie. returns orange juice (for debugging)
  },
]

/**
 * Action Reader
 */
class ActionReader {
  /**
 * Reads log lines
 * @param {object} logLine Raw array of log line data
 * @return {object} action object
 */
  readLine(logLine) {
    const actionLine = logLine.line[4]
    let actionMatch = null
    ActionMatches.forEach((actionMatcher) => {
      const re = new RegExp(actionMatcher.matchRegex)
      const successfulActionMatch = re.test(actionLine)
      if (successfulActionMatch) {
        actionMatch = actionLine.match(re)[0]

        if (actionMatcher.type) {
          switch (actionMatcher.type) {
            case 'item':
              // capitalize the first and third word
              actionMatch = actionMatch.split(' ').map((word, i) => {
                if (i !== 1) {
                  return `${word[0].toUpperCase()}${word.substr(1, word.length - 1)}`
                }

                return word
              }).join(' ')
              break
            case 'item2':
              actionMatch = actionMatch.split(' ').map((word, i) => {
                return `${word[0].toUpperCase()}${word.substr(1, word.length - 1)}`
              }).join(' ')
              break
            default:
              break
          }
        }
      }
    })

    const action = { name: actionMatch, type: ActionTypeIDs[actionMatch] }

    return {
      isValidAction: !!actionMatch,
      action,
    }
  }
}

export default new ActionReader()
