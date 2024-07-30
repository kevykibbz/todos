import React,{useState} from 'react'

function App() {
  const [input,setInput]=useState("")
  const [todos,setTodos]=useState(new Set())
  const addTodo=()=>{
    if (input.trim === "") return;
    setTodos((prevTodos)=>{
      const newTodos=new Set([...prevTodos])
      const isDuplicate=Array.from(newTodos).some(todo=>todo.text === input)
      if(!isDuplicate){
        newTodos.add({text:input,completed:false})
      }else{
        console.log('todo must be unique')
      }
      return newTodos;
    })
  }
  const deleteTodo=(index)=>{
    setTodos((prevTodos)=>{
      const newTodos=new Set([...prevTodos])
      const todosArray=Array.from(newTodos)
      const todo=todosArray[index]
      todosArray[index]={...todosArray[index],completed:!todo.completed}
      return new Set(todosArray)
    })
  }
  return (
    <div style={{margin:'auto'}}>
        <input placeholder="Enter todo item"  onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={addTodo}>Add todo</button>
        <br/>
        <ul>
        {Array.from(todos).map((todo, index) => (
          <li key={index} style={{textDecoration:todo.completed ? "line-through": "none"}}>
            {todo.text} {todo.completed ? "(Completed)" : ""}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
