// App.js
import React from 'react';
import './App.css';
import ShowRepositories from './components/ShowRepositories';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
