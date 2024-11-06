import { useState } from "react"
import styled from "styled-components"


function App() {
  const [input,setInput]=useState('')
  const [todos,setTodos]=useState([])
  const Wrapper = styled.div`
  background:#3498db;
  text-align:center;
  height:100vh;
  padding-top:300px;
  

    
  `
function changeInput(e){
  setInput(e.target.value)
}

function addToDo (){
setTodos([...todos,input])
setInput('')
}
function deleteTodo(value) {
  setTodos((todos)=>{
    return todos.filter((todo)=>todo!==value);
  })
}

  return (
    <>
    <Wrapper>

   
      <input
      onChange={changeInput}
      value={input}
type="text"
autoFocus
/>
      <button onClick={addToDo}>
        Ekle
      </button>
      <div>
        <ul style={{cursor:'pointer'}}>
          {
            todos.map((todo,index)=>(
              //index listeler içerisine bakıp hangi numaralı olanın gelceğini sıralıyor
              <li key={index} onClick={()=>deleteTodo(todo)}>   
              {todo}
              </li>
            ))
          }
        </ul>
      </div>
      </Wrapper>
    </>
  )

} 


export default App
