const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const cors = require('cors');

const { queryType } = require('./query.js');

const app = express();
const port = 5000;

// Define the Schema
const schema = new GraphQLSchema({ query: queryType });
app.use(cors());

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`listening app on ${port} port`);
});