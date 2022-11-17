const Content = ({text,desc}) => {

    console.log('object :>> ', text);

    return ( 
        <div className="">
            <div className="d-flex justify-content-between align">
                <div className="d-flex flex-column">
                    <h5>{text}</h5>
                    <p className="m-0">{desc}.</p>
                </div>
                <div>
                    <div class="dropdown drop mt-4 position-absolute">
                        <button class="btn border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Completed</button></li>
                            <li><button class="dropdown-item" type="button">Favorite</button></li>
                            <li><button class="dropdown-item" type="button">Deleted</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </div>
     );
}


export default Content;