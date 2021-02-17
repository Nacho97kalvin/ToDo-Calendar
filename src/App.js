import React from 'react';
import FullCalendar from './Calendar.js';
import { DateProvider } from './Context.js';
import './index.css'
import Notes from './Notes.js'

function App() {
  return (

    <DateProvider>
      <menu className="menu">
        <div className="calendar">
          <FullCalendar />
        </div>
        <div>
          <Notes />
        </div>
      </menu>
    </DateProvider>
  );
}

export default App;
