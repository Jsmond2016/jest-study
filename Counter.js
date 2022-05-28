

class Counter {
  constructor() {
    this.value = 0
  }

  add() {
    this.value +=1
  }

  addTwo() {
    this.value +=2
  }

  minus() {
    this.value -= 1
  }

  minusTwo() {
    this.value -=2
  }
}

module.exports = Counter