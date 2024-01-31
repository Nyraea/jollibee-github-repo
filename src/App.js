import './App.css';
import Nav from './Nav.js';
import Banner from './Banner.js';
import method1 from './order.png'
import method2 from './pickup.png'
import method3 from './app.png'
import Method from './Method.js';
import promoImage1 from './image2.png';
import promoImage2 from './image1.png';
import promoImage3 from './image3.jpg';
import menuItem1 from './chickenjoy.png';
import menuItem2 from './spaghetti.png';
import menuItem3 from './burger.png';
import ImageLink from './ImageLink.js';
import FoodCategory from './FoodCategory.js';
import policy1 from './policy1.png';
import policy2 from './policy2.png';
import Policy from './Policy.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="">
      <header className="mt-3">
        <Nav></Nav>
      </header>
      <body>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Banner></Banner>
        <div className="row py-5">
          <Method 
          image = {method1}
          text = {'Order & Pickup'}
          ></Method>
          <Method
          image = {method2}
          text = {'Download the App'}
          ></Method>        
          <Method 
          image = {method3}
          text = {'#8700'}
          ></Method>
        </div>
        <div className="d-flex justify-content-center ">
          <hr className="w-75 border-1 border-black"></hr>
          <br></br>
          <br></br>
        </div>
        <div className="d-flex justify-content-center ">
          <h1 className="font-BPreplayLarge">Exclusive Promos</h1>
        </div>
        <div className="row py-5 px-5 ">
            <ImageLink
            image = {promoImage1}
            ></ImageLink>
            <ImageLink
            image = {promoImage2}
            ></ImageLink>
            <ImageLink
            image = {promoImage3}
            ></ImageLink>
            <span className="d-flex flex-column align-items-center my-5">
              <button className="d-none d-sm-flex btn btn-orange border border-0 rounded-pill text-light font-BPreplay px-5 py-4 justify-content-center w-25">SEE ALL PROMOS</button>
            </span>
          </div>
          <div className="row py-5 px-5 bg-melon">
          <span className="d-flex flex-column align-items-center mt-2 mb-5">
            <h1 className="font-BPreplayLarge">Featured Menu Items</h1>
          </span>
          <FoodCategory
          image = {menuItem1}
          header = "Chickenjoy Bucket"
          text = "Philippines' best-tasting crispylicious, juicylicious."
          color = "bg-crimson"
          ></FoodCategory>
          <FoodCategory
          image = {menuItem2}
          header = "Spaghetti Pan"
          text = "The meatiest, cheesies,t and sweet-sarap Jolly Spaghetti!"
          color = "bg-mustard"
          ></FoodCategory>
          <FoodCategory
          image = {menuItem3}
          header = "Yumburger"
          text = "Your favorite 100% Beefy Langhap-Sarap Burgers."
          color = "bg-bluegreen"
          ></FoodCategory>
          <span className="d-flex flex-column align-items-center mt-5 mb-3">
            <button className="d-none d-sm-flex btn btn-orange border border-0 rounded-pill text-light font-BPreplay px-5 py-4 justify-content-center w-25">VIEW MENU</button>
          </span>
          </div>
          <div className="row py-5">
            <div className="col"></div>
            <Policy
            image={policy1}
            header="What We Do"
            text = "Jollibee's Mission is to serve great-tasting food, bringing the joy of eating to everyone."
            color = "border-mustard"
            bcolor = "shadow-mustard"
            ></Policy>
            <Policy
            image={policy2}
            header="What We Stand For"
            text = "Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride."
            color = "border-crimson"
            bcolor = "shadow-crimson"
            ></Policy>
            <div className="col"></div>
          </div>
          <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
