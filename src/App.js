import React from 'react';
import Header from './components/Header'
import './App.css'
import Routes from './routes/Routes'

export default function App() {
  return (
   <div className="App"> 
      <Header />
      <Routes />
    </div>
  );
}