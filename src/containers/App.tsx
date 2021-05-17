import React from 'react';
// Styles
import { StyledGlobalStyle } from "./App.styles";
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from "../components/SearchBar";
// Data
import FrJson from '../fr.json';

function App() {

  return (
      <>
        <StyledGlobalStyle />
        <Header title='Autocomplete for Acracy' url={'https://acracy.co/'} />
        <SearchBar cities={FrJson}/>
        <Footer name='Jeremy Pidjot' url={'https://github.com/pidjotj'} />
      </>
  );
}

export default App;
