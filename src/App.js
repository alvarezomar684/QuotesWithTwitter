import './App.css';
import { useState } from 'react';
import Data from "./quotes.json"
import NewQuote from "./components/NewQuote"
import Quotes from './components/Quotes';
import AuthorQuotes from './components/AuthorQuote';


function App() {
  
  const [, setQuote] = useState()

  let bgcolor = "#FFC107"

  const listQuotes = Data.quotes;
  


  function getRandomInt(min, max) {
    //Para producir el color variado
    let colorNumberRandom = Math.floor((Math.random() * 100)+222222);    
    let colorRandom = `#${colorNumberRandom}`;    
    bgcolor = colorRandom;

    //Para producir el indexRandom, generando citas y autores aleatorios
    return Math.floor(Math.random() * (max - min)) + min;
  }   


  const indexRandom = getRandomInt(0,listQuotes.length)

  let quoteOfList = listQuotes[indexRandom].quote;
  let authorOfList = listQuotes[indexRandom].author;

  return (
    <div className="App-header">
      <header className="container-style" style={{backgroundColor: bgcolor}} >     
          
      <Quotes quote={quoteOfList} />
      <AuthorQuotes author={authorOfList}  />
      <NewQuote changed = {() => setQuote(getRandomInt(0,listQuotes.length))} quoteOfListT={quoteOfList} authorOfListT={authorOfList}/>  
      

      </header>
    </div>
  );
}

export default App;
