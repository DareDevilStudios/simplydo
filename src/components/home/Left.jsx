import { useState } from "react";
import logo from "./images/Vector.png"

export const Left = () => {

    const [todos,setTodos] = useState([{}])
    const [input, setInput] = useState("")
    const [desc, setDesc] = useState("")

    return ( 
        <div className="main position-relative w-50 p-5">
            <div className="header">
                <img className="ms-5 position-absolute" src={logo} alt="pic" />
            </div>
            <div className="central h-100 w-100 d-flex flex-column align-items-center justify-content-center border-right border-dark">
                <div className="middle w-75 d-flex flex-column align-items-center justify-content-center">
                    <p className="login-head fs-4">LOGIN TO SIMPLYDO</p>
                    <p className="text-center w-75 mb-4 text-wrap">Add tasks like “Read work emails every day at 10am” to fill your to-do list in seconds using Todoists powerful natural language recognition and recurring dates.</p>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" name="" id="" placeholder="Title" className="px-3 py-2 w-50 border border-secondary" />
                    <input value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" name="" id="" placeholder="Description" className="px-3 py-2 mt-3 w-50 border border-secondary" />
                    <button onClick={() => { 
                        setTodos([...todos,{id:Date.now(),text:input, desc:desc, stat:false}])
                        setInput("")
                        setDesc("")
                        console.log(todos)
                    }} className="bg-primary px-3 py-2 mt-3 w-50 border border-0 text-white font-weight-bolder" >Add</button>
                </div>
            </div>
        </div>
     );
}
 
export default Left;