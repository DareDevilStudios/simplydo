import bulb from "./images/bulb.png"
import boy from "./images/boy.png"
import Rectangle from "./images/Rectangle.png"

const Right = () => {
    return ( 
        <div className="right w-50 d-flex flex-column align-items-center position-relative ">
            <img className="position-absolute img1"src={bulb} alt="" />
            <img className="position-absolute img2" src={boy} alt="" />
            <img className="position-absolute img3" src={Rectangle} alt="" />
        </div>
     );
}
 
export default Right;