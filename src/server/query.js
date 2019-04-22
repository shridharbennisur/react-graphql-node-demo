const { GraphQLObjectType,
    GraphQLString, GraphQLInt, GraphQLList
} = require('graphql');
const _ = require('lodash');

const { movieType } = require('./types.js');
let { movies } = require('./data.js');

//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: function () {
                return 'Hello World';
            }
        },
        movie: {
            type: movieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return _.find(movies, { id: args.id });
            }
        },
        movies: {
            type: new GraphQLList(movieType),
            resolve: () => {
                return movies;
            }
        }
    }
});

module.exports = { queryType } ;