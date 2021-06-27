

const NewQuote = ({changed,quoteOfListT,authorOfListT}) => {  
    
    
    
    return(
        <div className="buttons-style">           
            <button onClick={changed}>New Quote</button>
            <a className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text= "${quoteOfListT}" 

                -${authorOfListT}`}  >
                Tweet
            </a> 
        </div>
        
    )
}

export default NewQuote;
