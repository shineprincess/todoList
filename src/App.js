import React, { useState } from 'react'
import TodoList from './TodoList.jsx'

const App = () => {
  
  const [item , setItem] = useState("")

  const [input , setInput] = useState([])

  const itemsList = (event) => {
    setItem(event.target.value)
  }

  const inputEvent = () => {
      setInput( (oldItems) => {
        return [...oldItems , item];  //olditem , new item
      }); 
      setItem('')
  };

  const deleteItems = (id) => {
    console.log('Clicked ')
    setInput ((oldItems) => {
      return oldItems.filter((arrElem, index) => {
          return index !== id ;
      })
    });
  }

  return (
    <>
      <div className="main__div">
        <div className="child__div">
          <h1>To do list app</h1>
            <input className = "input__style" type = "text" placeholder="Add an items" 
            value ={item} onChange = {itemsList} />
            <button onClick={inputEvent} className="add__btn"> { <i class="fas fa-plus-circle"></i> }</button>

            <ol>
              {
                input.map((itemVal, index) => {
                   return <TodoList 
                          key={index} 
                          id = {index} 
                          text={itemVal}
                          onSelect ={deleteItems} />;
                })
              }
            </ol>
        </div>
      </div>
    </>
  )
}

export default App;