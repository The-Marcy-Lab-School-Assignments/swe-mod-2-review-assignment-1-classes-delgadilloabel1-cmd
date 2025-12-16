// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
  constructor(name, position, jerseyNumber) {
    this.name = name;
    this.position = position;
    this.jerseyNumber = jerseyNumber;
  }
}

class Team {
  #starters = [];
  #bench = [];
  constructor(name) {
    this.name = name;
  }
  get starters() {
    return [...this.#starters];
  }
  get bench() {
    return [...this.#bench];
  }
  addBenchPlayer(player) {
    this.#bench.push(player);
  }
  getPlayerCount() {
    let starters = this.#starters.length;
    let bench = this.#bench.length;
    let total = starters + bench;
    return total;
  }
  moveToBench(name) {
    const index = this.#starters.findIndex((player) => player.name === name);
    if (index !== -1) {
      const removedPlayer = this.#starters.splice(index, 1)[0];
      this.#bench.push(removedPlayer);
      return true;
    }
    return false;
  }
  moveToStarters(name) {
    const index = this.#bench.findIndex((player) => player.name === name);
    if (index !== -1) {
      const removePlayer = this.#bench.splice(index, 1)[0];
      this.#starters.push(removePlayer);
      return true;
    }
    return false;
  }
}

module.exports = { Player, Team };
