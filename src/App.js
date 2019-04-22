import React, { Component } from 'react';

import GetAllMovies from './graphql/getAllMovies';
import getMovie from './graphql/getAllMovies';

class App extends Component {
  render() {
    return (
      <main>
        <GetAllMovies />
      </main>
    );
  }
}

export default App;
