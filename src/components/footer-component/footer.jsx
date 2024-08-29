import React from "react";
import { Link } from "react-router-dom";
import footerPic from './../../assets/fimg.webp'
import ReadMore from "./readmore";
import dicon from "./../../assets/dil-icon.png"
import facicon from '../../assets/f-icon.jpeg'
import instaicon from '../../assets/ins-icon.jpeg'
import youtubeicon from '../../assets/you-icon.webp'
import './footer.css'

function Footer (){
    const longText= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis aliquam optio dolorem consequuntur veniam dignissimos tempore temporibus, numquam quod iure? Illo doloribus sequi ratione excepturi quas ut quos velit dolorem quo obcaecati, id repellendus asperiores nesciunt sit accusamus cumque et facilis corporis aspernatur, pariatur odio molestiae at mollitia? Deleniti quod odit laudantium est, soluta ut, expedita ipsam, commodi quasi rem fugiat? Sed nisi ut officia delectus qui voluptatem, commodi deserunt unde odio consectetur, numquam fugit et veritatis aliquid eveniet repudiandae quae praesentium quidem saepe a ducimus. Illum non ratione ipsum aliquam natus asperiores eligendi eos, ipsam dolorum consectetur vero cupiditate impedit reprehenderit placeat, cumque repellat quisquam accusantium molestiae accusamus quam laudantium sunt harum ullam! Sed officiis ex sequi quis suscipit voluptas commodi labore alias quam modi tempore voluptatibus, harum earum beatae reprehenderit, dolorem incidunt ea dolore. Tempora minus officia nihil consequatur optio ex hic libero soluta. Doloremque ex odit eius tempora adipisci cupiditate officiis unde officia vel porro quam odio placeat obcaecati dignissimos, minus autem sunt. Culpa dolor, aut explicabo temporibus tempore et odit esse molestiae officia deserunt obcaecati itaque repellendus, numquam sapiente officiis facere sunt eveniet sint aspernatur cupiditate veritatis est. Est commodi, at voluptates porro, aspernatur sit natus nemo quibusdam consequatur, iusto delectus vel ut facere laudantium dolore! Illo officia dignissimos est, exercitationem praesentium, maiores quam culpa saepe modi sunt suscipit id eos nobis dicta eligendi nulla placeat expedita quae ipsa! Rerum quisquam nostrum aperiam sapiente quas impedit magnam dolore debitis deleniti, perspiciatis praesentium cupiditate eos fuga nam ex facere libero expedita. Temporibus, accusamus! Dolore, maiores maxime voluptatibus sapiente magni repellendus deserunt consequatur blanditiis commodi dignissimos atque velit, neque temporibus cupiditate. Deleniti suscipit sunt beatae repellat harum incidunt quis magni illum tenetur quod, earum similique mollitia, voluptatibus pariatur explicabo labore quasi vero ullam delectus accusamus ad inventore. Sequi repellendus commodi perferendis ex totam labore reiciendis neque a eaque voluptate veritatis explicabo voluptas iusto obcaecati cupiditate sunt, quaerat nobis excepturi ut rem asperiores eveniet quo repellat architecto. Ad in eaque nisi et laboriosam, omnis laudantium deserunt! Impedit distinctio, modi quidem a, quis quas reprehenderit iure dolorum unde soluta ea explicabo quisquam labore. Magnam veniam maxime nobis repellendus architecto id? Sapiente reprehenderit reiciendis vitae nulla hic modi eaque architecto necessitatibus assumenda? Veniam laboriosam commodi tenetur ut sapiente sunt est praesentium dolor quidem. Molestias vero iusto doloribus cum illo dolor, laborum necessitatibus sapiente quasi totam? Quia repellendus eos ipsum fugiat minus odio dolorem aspernatur assumenda laudantium reprehenderit nisi perferendis similique dolores, odit molestias, necessitatibus officia itaque enim adipisci quod facere. Architecto, expedita! Excepturi consequatur aliquid, blanditiis architecto amet molestias impedit voluptatem autem fugit quia perferendis sequi magnam quisquam accusantium dolorum, inventore temporibus necessitatibus accusamus enim minus. Facilis nisi dolorum, repellendus corrupti aliquid deleniti fuga, facere dicta blanditiis a ipsa! Voluptate dignissimos quia unde eaque eum vero explicabo nobis, est velit, fugit deleniti provident numquam minus id aliquid adipisci aut. No'
    return(
        <>
        <div className="footer">
            <div className="b">            <button className="b-button top">View All Products</button>
            </div>
        <div className="seperation"></div>
            <div className="main">

<img src={footerPic} alt="" className="f-pic"/>

<div className="text">
    <h6>About Thrift Store</h6>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sunt voluptatibus esse. Iste libero ea alias aliquid distinctio laborum exercitationem, quam sequi nemo debitis officiis natus sapiente hic similique porro.</p>
    </div>
        </div>

        <div className="welcome">
            <p className="wel-text">Welcome to threft store: Pakistan’s Foremost Luxury Hub for Exclusive Designer Clothing.</p>
            <div>
      <ReadMore text={longText} maxLength={500} />
    </div>
        </div>
<div className="sepration">

</div>
<div className="g-img">
    <div><img src={dicon} alt="" className="g-icon"/></div>
    <div><img src={dicon} alt="" className="g-icon"/></div>
    <div><img src={dicon} alt="" className="g-icon"/></div>
    <div><img src={dicon} alt="" className="g-icon"/></div>
</div>
<div className="main-gift">
    <div> Worldwide Delivery</div>
    <div> Read Our Return & Exchange Policy</div>
    <div> Top-notch support</div>
    <div>Secure payments</div>
</div>

<div className="end">
    <div className="one"><h4>About threift store</h4>
        <p>Threift Store is a thought, a notion that stems from the appreciation of beauty from the simplest of silhouettes to the creations of bespoke beauty Thrieft store takes you on a journey of delicate embroideries and a fusion of international trends.</p>
        <div className="main-fab"> <a href=""><img src={facicon} alt="" className="fa-icon" /></a>
        <a href=""><img src={youtubeicon} alt="" className="y-icon"/></a>
        <a href=""><img src={instaicon} alt="" className="i-icon"/></a></div>
       
    </div>
    <div className="two"><h4>Store Policies</h4>
    <a href="/about">About us</a>
    <a href="/contact">Contact us</a>
    <a href="">Shipping Policy</a>
    <a href="">Privacy Policy</a>
    <a href="">Return & Exchange Policy</a>
    <a href="">Terms and Conditions</a>
    <a href="">Terms of Service</a>
    <a href="">Refund policy</a>
    <a href="">Blog</a>
    
    </div>
    <div className="three">
        <h4>Newsletter</h4>
       <p> Subscribe to receive updates, access to exclusive deals, and more.</p>
            <input type="text" placeholder="E-mail" />
            <Link to='/login'>
            <button className="b-button">Subscribe</button></Link>
    </div>
</div>
<p className="last">© 2024 - Jeem Designed & Developed by Thrift Store</p>
        </div>
        
        </>
    )
}

export default Footer