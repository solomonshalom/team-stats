const team = {
    _players: [
      {
        firstName: 'Solomon',
        lastName: 'Shalom Lijo',
        age: 14
      },
      {
        firstName: 'Kai',
        lastName: 'Havertz',
        age: 21
      },
      {
        firstName: 'Ngolo',
        lastName: 'Kante',
        age: 29
      }
    ],
    _games: [
      {
        opponent: 'Manchester United',
        teamPoints: 44,
        opponentPoints: 50
      },
      {
        opponent: 'Liverpool',
        teamPoints: 44,
        opponentPoints: 53
      },
      {
        opponent: 'Everton',
        teamPoints: 44,
        opponentPoints: 40
      }
    ],
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      }
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      return this.games.push(game);
    }
}

// Adding the player
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bounty', 76)

// Adding the game
team.addGame('Kai Ketsu', 80, 75)
team.addGame('Just Footballers', 90, 100)
team.addGame('Everton and Lee', 100, 100)

// Printing the players
console.log(team.players)

// Printing the games
console.log(team.games)
