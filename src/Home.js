import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428584220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="025987523698"
            title="The Lean Startup:"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={2}
          />
          <Product
            id="025987523698"
            title="Kenwood kMix Stand Mixer"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="025987523698"
            title="FitBit Band"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={2}
          />
          <Product
            id="025987523698"
            title="Amazon Echo"
            price={29.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={2}
          />
          <Product
            id="025987523698"
            title="New Apple iPad Pro"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="025987523698"
            title="Samsung LED Monitor"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
