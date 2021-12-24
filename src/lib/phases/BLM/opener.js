import Action from "../../Action"
import { ACTION_TYPES } from "../../IDConstants"

const opener = []

opener.push(new Action("Sharpcast", ACTION_TYPES.oGCD))
opener.push(new Action("Fire III", ACTION_TYPES.GCD))

//  Pull

opener.push(new Action("Thunder III", ACTION_TYPES.GCD))
opener.push(new Action("Triplecast", ACTION_TYPES.oGCD))

opener.push(new Action("Fire IV", ACTION_TYPES.GCD))
opener.push(new Action("Fire IV", ACTION_TYPES.GCD))

opener.push(new Action("Amplifier", ACTION_TYPES.oGCD))
opener.push(new Action("Ley Lines", ACTION_TYPES.oGCD))

opener.push(new Action("Fire IV", ACTION_TYPES.GCD))
opener.push(new Action("Swiftcast", ACTION_TYPES.oGCD))
opener.push(new Action("Fire IV", ACTION_TYPES.GCD))
opener.push(new Action("Triplecast", ACTION_TYPES.oGCD))

opener.push(new Action("Despair", ACTION_TYPES.GCD))
opener.push(new Action("Manafont", ACTION_TYPES.oGCD))
opener.push(new Action("Fire IV", ACTION_TYPES.GCD))
opener.push(new Action("Sharpcast", ACTION_TYPES.oGCD))
opener.push(new Action("Despair", ACTION_TYPES.GCD))

opener.push(new Action("Blizzard III", ACTION_TYPES.GCD))
opener.push(new Action("Xenoglossy", ACTION_TYPES.GCD))
opener.push(new Action("Paradox", ACTION_TYPES.GCD))
opener.push(new Action("Blizzard IV", ACTION_TYPES.GCD))
opener.push(new Action("Thunder III", ACTION_TYPES.GCD))

export default opener.map(o => o.toJson())