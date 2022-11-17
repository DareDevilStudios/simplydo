import { signInWithGoogle } from '../../Firebase'
import GoogleButton from 'react-google-button'
import logo from "./images/Vector.png"
const Left = () => {
    return ( 
        <div className="main position-relative w-50 p-5">
            <div className="header">
                <img className="ms-5 position-absolute" src={logo} alt="pic" />
            </div>
            <div className="central h-100 w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="middle w-75 d-flex flex-column align-items-center justify-content-center">
                    <p className="login-head fs-4">LOGIN TO SIMPLYDO</p>
                    <p className="text-center w-75 mb-4 text-wrap">Add tasks like “Read work emails every day at 10am” to fill your to-do list in seconds using Todoists powerful natural language recognition and recurring dates.</p>
                    <GoogleButton onClick ={signInWithGoogle}/>
                </div>
            </div>
        </div>
     );
}
 
export default Left;