class Action {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  toJson() {
    return JSON.parse(JSON.stringify(this))
  }
}

export default Action