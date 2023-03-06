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
import hand from '../icons/hand.png'
import blue3 from '../icons/blueT3.png'
import blue4 from '../icons/blueT4.png'
import yellow3 from '../icons/yellow3.png'
import yellow4 from '../icons/yellow4.png'
import bHead from '../icons/bAmiba.png'
import Quest from '../icons/quest.png'
import Queen from '../icons/queen.png'
import body1 from '../icons/body.png'
import body2 from '../icons/body1.png'
import body3 from '../icons/body2.png'
import scan from '../icons/QRcard.png'
import curve from '../icons/curve.png'
import curve2 from '../icons/curve2.png'
import curve3 from '../icons/curve3.png'
import curve4 from '../icons/curve4.png'
import curve5 from '../icons/curve5.png'
import arrow1 from '../icons/arrow1.png'
import arrow2 from '../icons/arrow2.png'
import arrow3 from '../icons/arrow3.png'
import ph1 from '../icons/phone1.png'
import ph2 from '../icons/phone2.png'
import hand2 from '../icons/hand1.png'
import phBack from '../icons/phBack.png'
import starOut from '../icons/starOut.png'
import heartOut from '../icons/heartOut.png'
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import Footer from "../Footer";

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
                <img src={blue2} className='bTri2' />
                <img src={vLabel} className='vLbl' />
                <img src={star} className='starG' />
                <img src={hand} className="fing"></img>
                <div className="hand"></div>
                <div className="bRect1"></div>
                <div className="bRect2"></div>
                <div className="bRect3"></div>
                <div className="bRect4"></div>
                <div className="bRect5"></div>
                <div className="bRect6"></div>
                <div className="bRect7"></div>
                <div className="bRect8"></div>
                <div className="bRect9"></div>
                <img src={blue3} className="blueT3"></img>
                <img src={blue4} className="blueT4"></img>
                <img src={yellow3} className="yellowT3"></img>
                <img src={yellow4} className="yellowT4"></img>
            </div>
            <div className="rec2">
                <p className="yCon">When you shop at a store and leave<br></br>
                    <span className="bold1">your feedback</span> with extraa, we give you
                    <span className="bold1"> cool coupons</span> that
                    you can actually use.
                </p>
                <p className="p2">How does<br></br>
                    <span style={{ color: ' #4F3084' }}>extraa</span> <br></br>
                    work?</p>
                <img src={bHead} className='bHead'></img>
                <img src={Quest} className='quest' ></img>
                <img src={Quest} className='quest1' ></img>
                <img src={Quest} className='quest2' ></img>
                <img src={body2} className='body2' ></img>
                <img src={body3} className='body3' ></img>
                <img src={Queen} className='queen' ></img>
                <img src={body1} className='body1' ></img>

                <div className="round1"></div>
                <div className="round2"></div>
                <div className="round3"></div>
            </div>
            <div style={{ position: "relative", marginLeft: '140px', marginTop: '550px' }}>
                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <Stack direction='row' spacing={10} >
                            <Stack spacing={5}>
                                <Stack direction='row'>
                                    <label className="stepLbl">Step 1</label>
                                    <label className="tryLbl">try it!</label>
                                </Stack>
                                <p className="qrLbl">Scan<br></br>QR</p>
                                <p className="conLbl">Look out for them<br></br> at shops near you</p>

                            </Stack>
                            <stack>
                                <img src={scan} className='scanC' />
                                <img src={curve} className='curImg' />
                                <img src={arrow1} className='arr1img' />
                            </stack>
                        </Stack>
                    </Grid>
                    <Grid item md={6} >
                        <Stack direction='row' spacing={5}>
                            <Stack spacing={5}>
                                <label className="stepLbl">Step 2</label>
                                <p className="qrLbl">Give<br></br>Feedback</p>
                                <p className="conLbl">We make sure your
                                    <br></br> favourite brands
                                    <br></br> hear you out</p>
                            </Stack>
                            <Stack >
                                <img src={phBack} className="pBack"></img>
                                <img src={ph1} className='ph1'></img>
                                <span className="hand2"></span>
                                <img src={hand2} className="fing2"></img>
                                <span className="volBtn"></span>
                                <span className="volBtn1"></span>
                                <p className="p3">takes only<br>
                                </br> a minute!</p>
                                <img src={arrow2} className='arrow2' />
                                <img src={curve2} className='cur2' />
                                <span className="bRecta1"></span>
                                <span className="bRecta2"></span>
                                <span className="bRecta3"></span>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
            <div>
                <span className="step3">Step 3</span>
                <p className="regOne">Register
                    <br></br>once</p>
                <p className="p4">You never have to <br></br>register again!</p>
                <span className="phb1"></span>
                <img src={ph2} className='ph2' ></img>
                <span className="pBtn1"></span>
                <span className="pBtn2"></span>
                <span className="pBtn3"></span>
                <img src={curve3} className='curve3' ></img>
                <img src={arrow3} className='arrow3' ></img>
                <span className="step4">Step 4</span>
                <p className="getCop">Get your<br></br>
                    coupons!</p>
                <p className="cont4">Everytime you give<br></br> feedback, you win
                    <br></br> coupons!</p>
                <img src={starOut} className='starOut'></img>
                <img src={heartOut} className='heartOut'></img>
                <img src={curve4} className='curve4'></img>
                <span className="roundY"></span>
                <img src={curve5} className='curve5'></img>

            </div>
            <Stack className="Vrect" direction='row' alignItems='center' justifyContent='space-evenly'>
                <p className="vCont">1000+<br></br>
                  <span style={{fontSize:'25px'}} >Brands</span><br></br>
                  <span style={{fontSize:'25px'}} >Onboarded</span> </p>
                <p className="vCont">10000+<br></br>
                <span style={{fontSize:'25px'}} >Coupons</span><br></br>
                  <span style={{fontSize:'25px'}} >Given</span> </p>
                    <p className="vCont">30+<br></br>
                    <span style={{fontSize:'25px'}} >Partner</span><br></br>
                  <span style={{fontSize:'25px'}} >Industries</span> </p>
                  <p className="vCont">10000+<br></br>
                    <span style={{fontSize:'25px'}} >Happy</span><br></br>
                  <span style={{fontSize:'25px'}} >Customers</span> </p>
                  <p className="vCont">10000+<br></br>
                    <span style={{fontSize:'25px'}} >Happy</span><br></br>
                  <span style={{fontSize:'25px'}} >Customers</span> </p>
            </Stack>
            <Footer />
        </>
    )
}

export default Home;