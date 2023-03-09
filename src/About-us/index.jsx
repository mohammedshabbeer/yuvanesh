import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import dotlogo from "../About-us/images/dotlogo.png"
import brandlogo from "../About-us/images/brandlogo.png"
import mainlogo from "../About-us/images/mainlogo.png"
import productlogo from "../About-us/images/productlogo.png"
import Carousel from "react-multi-carousel";
import './aboutus.css';
import nikelogo from "../About-us/images/nikelogo.png"
import amazonlogo from "../About-us/images/amazonlogo.png"
import wowlogo from "../About-us/images/wowlogo.png"
import flipkartlogo from "../About-us/images/flipkartlogo.png"
import vwlogo from "../About-us/images/vwlogo.png"
import chailogo from "../About-us/images/chailogo.png"
import myntralogo from "../About-us/images/myntralogo.png"
import naturalslogo from "../About-us/images/naturalslogo.png"
import mclogo from "../About-us/images/mclogo.png";
import tonilogo from "../About-us/images/tonilogo.png";
import phnimage1 from "../About-us/images/phnimage1.png";
import phnimage2 from "../About-us/images/phnimage2.png";
import phnimage3 from "../About-us/images/phnimage3.png";
import phnimage4 from "../About-us/images/phnimage4.png";
import phnimage5 from "../About-us/images/phnimage5.png";
import "react-multi-carousel/lib/styles.css";
import { Stack, useMediaQuery } from "@mui/material";
function Aboutus() {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Header />
      {matches ?
        <>

          <Stack alignItems='"center' spacing={1}>
            <img className="phnmainlogo" src={mainlogo}></img>
            <p className="phnexpara">What is extraa?</p>
            <p className="phnexpara1">We’re a Coupon Engine that exchanges customer<br></br> feedback for brand
              coupons. And we party with<br></br> the best brands from across the country. So, our<br></br> customers also get to party with them too!</p>
            <img className="phndotlogo" src={dotlogo}></img>
            <p className="phnexpara2">So, why are we extraa...?</p>
            <p className="phnexpara3">Our Partners, obviously!</p>
            <Caro />
            <p className="phnwhoisextra">Who is extraa?</p>
            <img className="phnproductlogo" src={productlogo}></img>
          </Stack>
        </> :
        <Stack alignItems='"center' spacing={2}>
          <img className="mainlogo" src={mainlogo}></img>
          <p className="expara">What is extraa?</p>
          <p className="expara1">We’re a Coupon Engine that exchanges customer feedback for brand
            coupons. And <br></br>we party with the best brands from across the country. So, our customers also get to<br></br> party with them too!</p>
          <img className="dotlogo" src={dotlogo}></img>
          <p className="expara2">Why are we so extraa...?</p>
          <p className="expara3">Our Partners, obviously!</p>
          <Caro />
          <p className="whoisextra">Who is extraa?</p>
          <img className="productlogo" src={productlogo}></img>
        </Stack>}
      <Footer />
    </>
  )

}


export function Caro() {
  var responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  }
  return (
    <Carousel responsive={responsive}>
      <div className="bglogo">
        <img className="amazonlogo" src={amazonlogo}></img>
      </div>
      <div className="bglogo">
        <img className="wowlogo" src={wowlogo}></img>
      </div>
      <div className="bglogo">
        <img className="flipkartlogo" src={flipkartlogo}></img>
      </div>
      <div className="bglogo">
        <img className="vwlogo" src={vwlogo}></img>
      </div>
      <div className="bglogo">
        <img className="chailogo" src={chailogo}></img>
      </div>
      <div className="bglogo">
        <img className="myntralogo" src={myntralogo}></img>
      </div>
      <div className="bglogo">
        <img className="naturalslogo" src={naturalslogo}></img>
      </div>
      <div className="bglogo">
        <img className="mclogo" src={mclogo}></img>
      </div>
      <div className="bglogo">
        <img className="tonilogo" src={tonilogo}></img>
      </div>
    </Carousel>
  )
}


export default Aboutus;
