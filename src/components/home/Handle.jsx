import { useState } from "react"

const [todos,setTodos] = useState([])

export const Handle = ({input,desc}) => { 
    const todo = setTodos([...todos,{id:Date.now(),text:input, desc:desc, stat:false}])
    console.log(todo)
}