const { UserList, MovieList } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      // we are using lodash becase we are using a fake data file
      // rather than a database
      // Also instead of UserList, { id } we do it this way
      // because of lodash
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const title = args.title;
      const movie = _.find(MovieList, { title });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) => movie.yearReleased > 2000 && movie.yearReleased < 2010
      );
    },
  },
};

module.exports = { resolvers };
