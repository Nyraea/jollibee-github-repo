import './global.css';
import banner from './jollibee-banner.png';

function Banner() {
    return (
<div style={{ backgroundImage: `url(${banner})`, backgroundSize: `cover`, backgroundPosition: `center` }}>
    <div className="d-flex row">
        <div className="d-flex flex-column col justify-content-center align-items-center ms-5">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-light font-BPreplayLarge">Bringing joy to you!</h1>
            <h2 className="text-light font-BPreplayLarge mt-2">Have your Jollibee favorites delivered</h2>
            <h2 className="text-light font-BPreplayLarge">right to your door!</h2>
            <br></br>
            <button className="d-none d-sm-flex btn btn-orange border border-0 rounded-pill text-light font-BPreplayLarge px-5 py-4">ORDER NOW</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <div className="d-flex col">

        </div>
    </div>
</div>

    );
  }
  
  export default Banner;