import React, { StyleSheet } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App" style={{}}>
      <div className='mainContainer center'>
        <div className='header'>
          <header>
            <h1 className='title'>Fantastic Names</h1>
            <p className='info'>This tool will help you create fantasy names. </p>
            <p className='info'>Just type few syllabes in the left column, choose the length of the word and get the results in the right column.</p>
          </header>
        </div>
        <div className='inputs'>
          <div className='left-column'>
            aa
          </div>
          <div className='right-column'>
            bb
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
