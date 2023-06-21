import React from 'react';
import Sidebar from './components/Sidebar';
import MainContents from './components/MainContent';
import { useState } from 'react';


function App() {
  const [mainContent, setMainContent] = useState(null);

  return (
    <div className="App">
      <Sidebar setMainContent={setMainContent} />
      <MainContents mainContent={mainContent} />

    </div>
  );
}

export default App;
