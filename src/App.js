import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import BackgroundPanel from './components/BackgroundPanel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BackgroundPanel />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
