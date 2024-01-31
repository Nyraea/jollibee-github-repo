import './global.css';
function FoodCategory({image, header, text, color}) {
    return (
<a className={`d-flex flex-column col align-items-center text-decoration-none rounded-5 ${color} mx-2 p-5`} href=""> 
    <div>
        <span className="justify-content-center text-light">
            <h1 className="font-BPreplayLarge">{header}</h1>
            <h2 className="font-BPreplay">{text}</h2>
        </span>
        <br></br>
        <img src={image} className="my-auto"></img>            
    </div>
</a>

    );
  }
  
  export default FoodCategory;