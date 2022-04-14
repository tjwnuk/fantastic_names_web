import React, { useState } from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import ReactDOM from 'react-dom';

import _, { map } from 'underscore';

function App() {

  const [numberOfSyllabes, setNumberOfSyllabes] = useState(2);
  const [syllabes, setSyllabes] = useState('');
  const [resultText, setResultText] = useState('');

  const fantasticNames = (syllabes) => {
    let text = syllabes.replace(/\s/g, '');
    let textArr = text.split(',');

    //cartesian product
    const cartesian =
      (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

    let tempArr = [];

    let result;

    if (numberOfSyllabes == 2) {
      result = cartesian(textArr, textArr)
    }
    if (numberOfSyllabes == 3) {
      result = cartesian(textArr, textArr, textArr)
    }
    if (numberOfSyllabes == 4) {
      result = cartesian(textArr, textArr, textArr, textArr)
    }
    if (numberOfSyllabes == 5) {
      result = cartesian(textArr, textArr, textArr, textArr, textArr)
    }

    result = Array.from(new Set(result));

    let listItems = result.map((item) => <span> {item}</span>)

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
              <label htmlFor="numberOfSyllabes">number of syllabes:  </label>
              <select name="numberOfSyllabes" id="numberOfSyllabes" onChange={(event) => {
                setNumberOfSyllabes(event.target.value);
              }}
                defaultValue={2}
              >
                <option value="2">2</option>
                <option value="3">3</option>
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
            {resultText}
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
