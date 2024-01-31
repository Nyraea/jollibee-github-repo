import './global.css';
function Policy({image, header, text, color, bcolor}) {
    return (
<div className="d-flex flex-column col-5 align-items-center">
        <img src={image} className={`${bcolor}`}></img>
        <br></br>
        <h2 className="font-BPreplayLarge">{header}</h2>
        <hr className={`w-50 border-5 rounded-pill opacity-100 ${color}`}></hr>
        <h4 className="font-NationFF w-75"><b>{text}</b></h4>
</div>

    );
  }
  
  export default Policy;