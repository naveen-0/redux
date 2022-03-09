import React from "react";

const Home = (props) => {
    return (<>
        <h1>Home</h1>
        <div className="cart">
          <img src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1646839501~hmac=6e5c56b354228153cdd74e495de91c55" alt="cart" />
        </div>
        <div className="wrapper-items">
            <div className="wrapper-item">
                <div className="img-wrapper">
                    <img className="img-fluid" src="http://cv.frontenddevelopers.in/images/crest-painting.jpg" alt="laptop" />
                </div>
                <div className="details-wraper">
                    <span>Crest painting Laptop</span>
                    <span>Price: $100.00</span>
                </div>
                <div className="btn-wraper">
                    <a className="btn btn-theme" href="#">Add to cart</a>
                </div>
            </div>
            <div className="wrapper-item">
                <div className="img-wrapper">
                    <img className="img-fluid" src="http://cv.frontenddevelopers.in/images/himflax-full.jpg" alt="laptop" />
                </div>
                <div className="details-wraper">
                    <span>Crest painting Laptop</span>
                    <span>Price: $100.00</span>
                </div>
                <div className="btn-wraper">
                    <a className="btn btn-theme" href="#">Add to cart</a>
                </div>
            </div>
        </div>
    </>);
}
export default Home;