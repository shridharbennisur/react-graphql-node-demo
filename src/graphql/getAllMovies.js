import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_ALL_MOVIES = gql`
  query GetALLMovies {
    movies {
      name,
      year,
      id
    }
  }
`;

class GetAllMovies extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Query query={GET_ALL_MOVIES}>
          {({ loading, data }) => !loading && (
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {data && data.movies.map(movie => (
                  <tr key={movie.id} onClick = {() => {console.log(movie)}}>
                    <td>{movie.name}</td>
                    <td>{movie.year}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
    </Query>
    );
  }
};

export default GetAllMovies;
