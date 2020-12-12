import './App.css';
import { useState, useEffect } from 'react';
import Main from './Main.js'

function App() {
  const [selectedOption, setSelectedOption] = useState("Major");


  return (
    <>
      <div className="dropdown">
        <label for="notes">Root note for chords: </label>

        <select name="notes" id="notes">
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>

        <br/>

        <label for="notes">Major / Minor chords: </label>

        <select onChange={e => setSelectedOption(e.target.value)} name="notes" id="notes">
          <option value="Major">Major</option>
          <option value="Minor">Minor</option>
        </select>
      </div>
      <Main type={selectedOption}/>
    </>
  );
}


export default App;
