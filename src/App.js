////////////////////////////////////////////LO HE LOGRADOOOOO SIIIIII////////////////////
//BOTON ENLAZADO APARTE, COMPONENTES APARTES.
//BOTON TWITTER FUNCIONANDO AL 100

//FALTA METERLE EL CAMBIO DE COLOR 
import './App.css';
import { useState } from 'react';
import Data from "./quotes.json"
import NewQuote from "./components/NewQuote"
import Quotes from './components/Quotes';
import AuthorQuotes from './components/AutorQuote';


function App() {

  const [, setQuote] = useState()

  const listQuotes = Data.quotes;
  
//para los colores usar un if para decir si el index no es igual a tal numero siempre se va a aplicar el cambio de color

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }   


  const indexRandom = getRandomInt(0,listQuotes.length)

  let quoteOfList = listQuotes[indexRandom].quote;
  let authorOfList = listQuotes[indexRandom].author;

  return (
    <div className="App-header">
      <header className="container-style"  >   
      
          
      <Quotes quote={quoteOfList} />
      <AuthorQuotes author={authorOfList}  />
      <NewQuote changed = {() => setQuote(getRandomInt(0,listQuotes.length))} quoteOfListT={quoteOfList} authorOfListT={authorOfList}/>
         
        
      {/* <a className="twitter-share-button"
      href={`https://twitter.com/intent/tweet?text= "${quoteOfList}" -${authorOfList}`}  target="_blank">
      Tweet</a> */}
      
   
      

      </header>
    </div>
  );
}

export default App;
