import React, { Component } from 'react';

import GetAllMovies from './graphql/getAllMovies';
// import MemoizeComponent from './MemoizeComponent';

class App extends Component {
  render() {
    return (
      <main>
        <GetAllMovies />
        {/* <MemoizeComponent /> */}
      </main>
    );
  }
}

export default App;
