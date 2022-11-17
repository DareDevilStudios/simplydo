// import Content from './Content'

const Right = (todos) => {

    // const complete= ar.filter((a) => {
    
    // })

    const ar = todos.todos;

    console.log(ar);

    return ( 
        <div className="w-50 p-5 d-flex flex-column position-relative">
            <h4>TODO LIST</h4>
            <div className="search d-flex justify-content-between">
                <div className="div mt-4 border border-2 d-flex justify-content-center align-items-center px-2 py-1 rounded-2">
                    <input className="input border border-0" type="search" placeholder="Search" aria-label="Search"/>
                    <i className="bi bi-search fs-5"></i>
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
                                                    // setTodos(newPost)
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
     );
}
 
export default Right;