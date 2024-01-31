import './global.css';
import image1 from './image1.png'
function ImageLink({image}) {
    return (
<div className="col">
        <a><img src={image} className="w-100"></img></a>
</div>

    );
  }
  
  export default ImageLink;