import React from 'react';
import Header from './header.jsx'
import Footer from './footer.jsx'
import WaterMonitorWebsite from './WaterMonitorWebsite.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <WaterMonitorWebsite />
      <Footer/>
    </div>
  );
}

export default App;