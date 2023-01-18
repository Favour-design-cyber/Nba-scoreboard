const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },

  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },

  {
    awayTeam: {
      team: "houston",
      points: 85,
      isWinner: false,
    },

    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "houston",
      points: 95,
      isWinner: false,
    },

    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: true,
    },
  },

  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },

    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },

  {
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },

    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
  },

  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const ulparent = document.createElement("ul");
for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const gameLi = document.createElement("li");
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  const scoreLine = `${aPoints}-${hPoints}`;
  gameLi.innerText = `${teamNames} ${scoreLine}`;
  console.log(scoreLine);
  ulparent.appendChild(gameLi);
}

document.body.prepend(ulparent);
