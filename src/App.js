import React, { useState } from 'react';
import Data from './Data';
import List from './List';
function App() {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length === 1 ? people.length + ' Birthday Today' : people.length + ' Birthdays Today'}</h3>
        <List people={people} setPeople={setPeople}></List>
        <button className='span' onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main >
  );
}

export default App;

// https://github.com/ravinegiofficial/
