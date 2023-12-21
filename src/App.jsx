import React, { useRef } from 'react';
import './App.css';
import CardList from './components/CardList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
  const tshirtsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar tshirtsRef={tshirtsRef} contactRef={contactRef} />
      <Header />
      <CardList />
      <CardList />
      <Footer />
    </>
  );
}

export default App;
