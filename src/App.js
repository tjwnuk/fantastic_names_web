import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [numberOfSyllabes, setNumberOfSyllabes] = useState(3);
  const [syllabes, setSyllabes] = useState('');
  const [resultText, setResultText] = useState('');

  const fantasticNames = (syllabes) => {
    let result = ''
    let textArr = syllabes.split(',');

    let listItems = textArr.map((item) => <li>{item}</li>);

    setResultText(listItems);
  }

  return (
    <div className="App" style={{}}>
      <div className='mainContainer center'>
        <div className='header'>
          <header>
            <h1 className='title'>Fantastic Names</h1>
            <p className='info'>This tool will help you create fantasy names. </p>
            <p className='info'>Just type few syllabes in the left column, separating by the commas, and choose the length of the words and get the results in the right column.</p>
            <div className='number-of-syllabes'>
              <label for="numberOfSyllabes">number of syllabes:  </label>
              <select name="numberOfSyllabes" id="numberOfSyllabes" onChange={(event) => {
                setNumberOfSyllabes(event.target.value);
              }}>
                <option value="3" selected="selected">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </header>
        </div>
        <div className='inputs'>
          <div className='left-column'>
            <textarea className='syllabes-text' onChange={(event) => {
              fantasticNames(event.target.value)
            }}>
            </textarea>
          </div>
          <div className='right-column'>
            <ul>{resultText}</ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
