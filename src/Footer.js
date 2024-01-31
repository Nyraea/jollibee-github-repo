import './global.css';
import logo from './jollibee-logo-2.png';
import facebook from './facebook.png'
import instagram from './instagram.png'
import viber from './viber.png'
import twitter from './twitter.png'
import google from './google.png'
import apple from './apple.png'


const HowTo = [
'View Menu',
'Delivery',
'Multi-Delivery',
'Locations'  
  ];

const Promos = [
    'Promo',
    'Gift Cards',
      ];

const AboutUs = [
        'About Jollibee',
        'Corporate Information',
        'Safety',
        'Investors',
        'Franchising',
        'Careers',
        'Jollibee Group Foundation',
        'Contact Us',
        'Rate Our Stores'
          ];  
  
const AboutWebsite = [
            'Privacy Notice',
            'Terms & Conditions',
            'Accessibility',
            'Sitemap',
              ];               

  const howToItems = HowTo.map(how => <a className="text-decoration-none text-dark" href=""><li className="my-1">{how}</li></a>);
  const promoItems = Promos.map(promo => <a className="text-decoration-none text-dark" href=""><li className="my-1">{promo}</li></a>);
  const aboutUsItems = AboutUs.map(aboutUs => <a className="text-decoration-none text-dark" href=""><li className="my-1">{aboutUs}</li></a>);
  const aboutWebItems = AboutWebsite.map(aboutWeb => <a className="text-decoration-none text-dark" href=""><li className="my-1">{aboutWeb}</li></a>);

  function Footer({image, header, text, color}) {
    return (
    <div className="border-4 border-top border-warning px-5">
        <div className="row mt-5">
            <div className="col">
                <img className="w-75" src={logo}></img>
                
            </div>
            <div className="col">

            </div>
            <div className="d-flex col justify-content-end">
                <button className="d-none d-sm-flex btn btn-orange border border-0 rounded-pill text-light font-BPreplaySmall px-5 w-50 h-75 justify-content-center align-items-center ">ORDER NOW</button>
            </div>
        </div>
        <br></br>
        <div className="row mt-5">
            <div className="d-flex col flex-column ">
                <h6 className="font-BPReplaySmaller"><b>Follow Us</b></h6>   
                <div className="row">

                    <div className="col">
                        <a href=""><img className="w-100" src={facebook}></img></a>
                    </div>
                    <div className="col">
                        <a href=""><img className="w-100" src={twitter}></img></a>
                    </div>    
                    <div className="col">
                        <a href=""><img className="w-100" src={viber}></img></a>
                    </div>    
                    <div className="col">
                        <a href=""><img className="w-100" src={instagram}></img></a>
                    </div>        
                    
                </div>            
            </div>
            <div className="d-flex col flex-column">
                <h6 className="font-BPReplaySmaller"><b>How To Order</b></h6>
                <ul className="list-unstyled">
                    {howToItems}
                </ul>
            </div>
            <div className="d-flex col flex-column">
                <h6 className="font-BPReplaySmaller"><b>Promotions</b></h6>
                <ul className="list-unstyled">
                    {promoItems}
                </ul>
            </div>
            <div className="d-flex col flex-column">
                <h6 className="font-BPReplaySmaller"><b>About Us</b></h6>
                <ul className="list-unstyled">
                    {aboutUsItems}
                </ul>
            </div>
            <div className="d-flex col flex-column">
                <h6 className="font-BPReplaySmaller"><b>About Our Website</b></h6>
                <ul className="list-unstyled">
                    {aboutWebItems}
                </ul>
            </div>
            <div className="d-flex col flex-column">
                <a href=""><img className="w-100" src={google}></img></a>
                <a href=""><img className="w-100" src={apple}></img></a>
            </div>
        </div>
    </div>
    );
  }
  
  export default Footer;