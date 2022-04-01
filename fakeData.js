const UserList = [
  {
    id: 1,
    name: "Scott",
    username: "judo2000",
    age: 52,
    nationality: "USA",
    friends: [
      {
        id: 2,
        name: "Stephen",
        username: "stephen",
        age: 42,
        nationality: "Canada",
      },
      {
        id: 2,
        name: "Stephen",
        username: "stephen",
        age: 42,
        nationality: "Canada",
      },
      {
        id: 4,
        name: "Jordan",
        username: "jordan",
        age: 18,
        nationality: "Canada",
      },
    ],
  },
  {
    id: 2,
    name: "Stephen",
    username: "stephen",
    age: 42,
    nationality: "Canada",
  },
  {
    id: 3,
    name: "Heidi",
    username: "heidi",
    age: 46,
    nationality: "Germany",
  },
  {
    id: 4,
    name: "Jordan",
    username: "jordan",
    age: 18,
    nationality: "Canada",
  },
  {
    id: 5,
    name: "Rocky",
    username: "rockyDog",
    age: 11,
    nationality: "UK",
    friends: [
      {
        id: 1,
        name: "Scott",
        username: "judo2000",
        age: 52,
        nationality: "USA",
      },
      {
        id: 4,
        name: "Jordan",
        username: "jordan",
        age: 18,
        nationality: "Canada",
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    title: "Avengers Endgame",
    yearReleased: 2019,
    isInTheatures: true,
  },
  {
    id: 2,
    title: "Intersteller",
    yearReleased: 2007,
    isInTheatures: true,
  },
  {
    id: 3,
    title: "Superbad",
    yearReleased: 2009,
    isInTheatures: true,
  },
  {
    id: 1,
    title: "Judo2000 - Sory of a judo non-legend",
    yearReleased: 2023,
    isInTheatures: false,
  },
];

module.exports = { UserList, MovieList };
