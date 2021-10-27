import AboutMe from './components/AboutMe';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './components/Home';
import React from 'react';

export default function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <GlobalStyles />
    </>
  );
}
