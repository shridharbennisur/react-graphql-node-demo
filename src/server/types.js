const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = require('graphql');

// Define Movie Type
const movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID }

    }
});

module.exports = {movieType};