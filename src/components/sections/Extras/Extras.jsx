import "./Extras.css";
import { FaArrowUp, FaFileDownload } from "react-icons/fa";

export default function Extras(){

return(

<>

<div className="resume-btn">

<a href="/cv.pdf" download>

<FaFileDownload/>

Resume

</a>

</div>

<a href="#home" className="top-btn">

<div className="arrow-circle">

<FaArrowUp/>

</div>

<span>

Top

</span>

</a>

</>

);

}