import ActionTypeIDs from "./ActionTypeIDs"

const ActionMatches = [
  {
    matchRegex: /(?<=\bYou use\s)(\w+\s*\w+\s*\w+)/g,
  },
  {
    matchRegex: /(?<=\bYou cast\s)(\w+\s*\w+\s*\w+)/g,
  }
]

class ActionReader {
  readLine(logLine) {
    const actionLine = logLine.line[4]
    let actionMatch = null
    ActionMatches.forEach((actionMatcher) => {
      const re = new RegExp(actionMatcher.matchRegex)
      const successfulActionMatch = re.test(actionLine)
      if (successfulActionMatch) {
        actionMatch = actionLine.match(re)[0]
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