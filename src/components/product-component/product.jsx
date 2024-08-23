import React from "react";
import img1 from "./../../assets/perfume 2.jpg"
import bag from "./../../assets/bag.jpg"
import watch from "./../../assets/watch2.jpg"
import airpods from "./../../assets/airpods.jpg"
import tshirt from "./../../assets/tshirt.jpg"
import bottle from "./../../assets/bottle.jpg"
import "./product.css";

function Product() {
    return (
        <>
            <div className="main">
                <div className="product">
                    <h4>perfume oil</h4>
                    <div className="off">
                    <p>4.09% Off</p>
                    </div>
                    <div className="image"><img src={img1} alt="" /></div>
                    <p>price: $13 <b>614.09</b></p>
                    <br />
                    <p>Experience luxury in its purest form with our exquisite perfume oil. Crafted from the finest natural ingredients</p>
                    <div className="base">
                        <div className="base1"></div>
                        <div className="base2">Add to Cart</div>
                    </div>
                </div>

                <div className="product">
                <h4>Leather purse</h4>
                <div className="off">
                    <p>2.07% Off</p>
                    </div>
                    <div className="image"><img src={bag} alt="" /></div>
                    <p>price: $11 <b>314.06</b></p>
                    <br />
                    <p>Handcrafted from premium quality leather, this purse offers both elegance.</p>
                    <div className="base">
                        <div className="base1"></div>
                        <div className="base2">Add to Cart</div>
                    </div>
                </div>

                <div className="product">
                <h4>Smart Watch</h4>
                <div className="off">
                    <p>5.99% Off</p>
                    </div>
                    <div className="image"><img src={watch} alt="" /></div>
                    <p>price: $15 <b>664.03</b></p>
                    <br />
                    <p>A smart watch combines advanced technology with stylish design, offering features like fitness tracking.</p>
                    <div className="base">
                        <div className="base1"></div>
                        <div className="base2">Add to Cart</div>
                    </div>
                </div>

                <div className="product">
                <h4>Airpods</h4>
                <div className="off">
                    <p>3.07% Off</p>
                    </div>
                    <div className="image"><img src={airpods} alt="" /></div>
                    <p>price: $8 <b>312.69</b></p>
                    <br />
                    <p>AirPods deliver high-quality sound with seamless wireless connectivity.</p>
                    <div className="base">
                        <div className="base1"></div>
                        <div className="base2">Add to Cart</div>
                    </div>
                </div>

                <div className="product">
                <h4>T-Shirt</h4>
                <div className="off">
                    <p>44.5% Off</p>
                    </div>
                    <div className="image"><img src={tshirt} alt="" /></div>
                    <p>price: $9 <b>814.02</b></p>
                    <br />
                    <p>
                    A T-shirt is a versatile and comfortable wardrobe staple, perfect for casual wear and easily styled for any occasion.</p>
                    <div className="base">
                        <div className="base1"></div>
                        <div className="base2">Add to Cart</div>
                    </div>
                </div>
                <div className="product">
                <h4>Water Bottle</h4>
                <div className="off">
                    <p>6.27% Off</p>
                    </div>
                    <div className="image"><img src={bottle} alt="" /></div>
                    <p>price: $5 <b>356.01</b></p>
                    <br />
                    <p>
                    A water bottle is an eco-friendly and convenient way to stay hydrated on the go, designed to keep your drinks fresh.</p>
                    <div className="base">
                        <div className="base1"></div>
                        <div className="base2">Add to Cart</div>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default Product