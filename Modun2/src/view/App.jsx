import { useState } from 'react'
import '../styles/global.css'
import MyComponent from './Example/MyComponent'
import ListTodo from './Todos/ListTodo'




 const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <MyComponent/> */}
  <ListTodo/>
  
    </>
  )
}

export default App
