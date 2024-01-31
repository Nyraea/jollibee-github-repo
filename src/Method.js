import './global.css';
function Method({image, text}) {
    return (
<div className="d-flex flex-column col align-items-center">
        <img src={image}></img>
        <br></br>
        <h2 className="font-BPreplay">{text}</h2>
</div>

    );
  }
  
  export default Method;