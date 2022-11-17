import { useState } from "react";
import logo from "./images/Vector.png"
import './home.css'

const Home = () => {

    const [todos,setTodos] = useState([{id:1,text:"hello",desc:"sample todo",completed:"false",favorite:"false"}])
    const [input, setInput] = useState("")
    const [desc, setDesc] = useState("")
    const [search, setSearch] = useState("")

    const ar = todos;


    return ( 
        <div className="d-flex">
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
                        setTodos([...todos,{id:Date.now(),text:input, desc:desc, completed:"false",favorite:"false"}])
                        setInput("")
                        setDesc("")
                        console.log(todos)
                    }} className="bg-primary px-3 py-2 mt-3 w-50 border border-0 text-white font-weight-bolder" >Add</button>
                </div>
            </div>
            </div>
            <div className="mid mt-5"></div>

            {/* right */}

            <div className="w-50 p-5 d-flex flex-column position-relative">
                <h4>TODO LIST</h4>
                <div className="search d-flex justify-content-between">
                    <div className="div mt-4 border border-2 d-flex justify-content-center align-items-center px-2 py-1 rounded-2">
                        <input className="input border border-0" value={search} onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
                        <i className="bi bi-search fs-5"/>
                    </div>
                    <div class="dropdown drop mt-4 position-absolute">
                        <button class="btn border border-2 dropdown-toggle h-25 px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter By
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Completed</button></li>
                            <li><button class="dropdown-item" type="button">Favorite</button></li>
                            <li><button class="dropdown-item" type="button">Deleted</button></li>
                        </ul>
                    </div>
                </div>
                <div className="contents d-flex flex-column">
                    {
                        
                        ar.map(k => (
                            <div>
                                {/* <Content text={k.text} desc={k.desc} /> */}
                                <div className="">
                                    <div className="d-flex justify-content-between align">
                                        <div className="d-flex flex-column">
                                            <h5>{k.text}</h5>
                                            <p className="m-0">{k.desc}.</p>
                                        </div>
                                        <div>
                                            <div class="dropdown drop mt-4 position-absolute">
                                                <button class="btn border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><button class="dropdown-item" type="button">Completed</button></li>
                                                    <li><button class="dropdown-item" type="button">Favorite</button></li>
                                                    <li><button class="dropdown-item" type="button" onClick={(e)=> {
                                                        const newPost = todos.filter((tod) => tod.id !== k.id)
                                                        setTodos(newPost)
                                                    }} >Deleted</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        ))
                        
                    }
                    
                </div>
            </div>
        </div>
     );
}
 
export default Home;