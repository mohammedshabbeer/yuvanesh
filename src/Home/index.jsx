import React from "react";
import Header from "../Header";
import './home.css'
import vector1 from '../icons/Vector.png'
import yellowT1 from '../icons/yellowT.png'
import yellowT2 from '../icons/yellowTr.png'
import blue1 from '../icons/blueTr.png'
import blue2 from '../icons/blueT.png'
import vLabel from '../icons/vLabel.png'
import star from '../icons/yStar.png'

function Home() {

    return (
        <>
            <Header />
            <div className="rec">
                <img src={vector1} className='vec1' />
                <p className="exlbl">every body loves a little
                    <span style={{ color: "#4F3084" }} > extraa!</span>
                </p>
                <p className="nLbl">Get the best deals from your favourite brands<br></br>
                    across the world - with extraa!</p>
                <button className="sBtn">
                    <span className="signLbl">Sign up</span>
                </button>
                <span className="areLbl" >aRe yOu a cUsToMer? </span>
                <span className="linkLbl" >Click here for coupons</span>
                <img src={yellowT1} className='yTri1' />
                <img src={yellowT2} className='yTri2' />
                <img src={blue1} className='bTri1' />
                <img src={blue2} className='bTri2'  />
                <img src={vLabel} className='vLbl'  />
                <img src={star} className='starG' />
            </div>
        </>
    )
}

export default Home;