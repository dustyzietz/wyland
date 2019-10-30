import React from 'react';
import WylandApp from './WylandApp';
import {StateProvider} from './context/context.state';

function App() {
  return (
    <div >
      <StateProvider>
    <WylandApp/>
    </StateProvider>
    </div>
  );
}

export default App;
