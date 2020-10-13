import React from 'react';
import './App.css';

import Draggable from 'react-draggable';

class App extends React.Component {

  render() {
    return (
      <Draggable>
       
          <button style={{"width":"100px","height":"80px","backgroundColor":"skyblue","cursor":"pointer"}}>Pull Me </button>
       
      </Draggable>
    );
  }
}

export default App;