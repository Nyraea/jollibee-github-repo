import './global.css';
import logo from './jollibee-logo.png';

function Nav() {
    return (
<nav className="navbar navbar-expand-lg bg-crimson border-4 border-bottom border-warning fixed-top">
  <div className="container-fluid d-flex row ">
    <div className="d-none d-sm-flex  col-3 m-3">
        <img className="w-75" src={logo}></img>
    </div>
    <div className="d-none d-sm-flex  col-2 mx-2">

    </div>
    <div className="collapse navbar-collapse col-6 d-flex" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <a className="nav-link text-light font-BPreplay" aria-current="page" href="#">Delivery</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link text-light font-BPreplay" href="#">Locations</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link text-light font-BPreplay" href="#">Menu</a>
        </li>
        <li className="nav-item ms-2">
          <a className="nav-link text-light font-BPreplay" aria-disabled="true">Promotions</a>
        </li>
      </ul>
      <button className="d-none d-sm-flex btn btn-orange px-3 py-2 border border-0 rounded-pill text-light font-BPreplay ms-4">ORDER NOW</button>
    </div>
    <div className = "d-none d-sm-flex col-1"></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

    );
  }
  
  export default Nav;