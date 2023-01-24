const warriorsGames = [
  {
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },

    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
  },

  {
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
  },

  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 95,
      isWinner: false,
    },

    homeTeam: {
      team: "Houston",
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

const makeChart = (games, targetTeam) => {
  const ulparent = document.createElement("ul");
  for (let game of games) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreline(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");
    ulparent.appendChild(gameLi);
  }
  return ulparent;
};
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreline = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam}@${hTeam}`;
  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
};

const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr');
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');
gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);

