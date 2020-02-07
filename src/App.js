import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import SimpleCard from './Card';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      
      <SimpleCard></SimpleCard>
      </header>
    </div>
  );
}

export default App;
