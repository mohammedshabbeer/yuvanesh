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
import scan from '../icons/QRcard.png'
import curve from '../icons/curve.png'
import curve2 from '../icons/curve2.png'
import curve3 from '../icons/curve3.png'
import arrow1 from '../icons/arrow1.png'
import arrow2 from '../icons/arrow2.png'
import arrow3 from '../icons/arrow3.png'
import arrow8 from '../icons/Arrow8.png'
import arrow6 from '../icons/Arrow6.png'
import ph1 from '../icons/phone1.png'
import ph2 from '../icons/phone2.png'
import ph3 from '../icons/phone3.png'
import ph4 from '../icons/phone4.png'
import hand2 from '../icons/hand1.png'
import phBack from '../icons/phBack.png'
import giftman from '../icons/giftman.png'
import starOut from '../icons/starOut.png'
import waves from '../icons/Maskgroup.png'
import group1 from '../icons/Group1.png'
import group2 from '../icons/Group2.png'
import group3 from '../icons/Group3.png'
import group4 from '../icons/Group4.png'
import group5 from '../icons/Group5.png'
import groupPh1 from '../icons/groupPh1.png'
import { Grid, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import Footer from "../Footer";

function Home() {

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <>
            <Header />
            {matches ?
                <>
                    <div>
                        <Stack spacing={1} style={{ marginLeft: '16px' }}>
                            <label className="everLbl">Everybody loves a little</label>
                            <label className="extraLbl">extraa!</label>
                        </Stack>
                        <Stack direction='row' >
                            <img src={groupPh1} className='gpPh1' />
                        </Stack>
                        <Stack  direction='row' alignItems='center' justifyContent='space-between' sx={{ marginLeft: '16px', marginRight:'16px' }}>
                            <p className="urFav">Get the best deals from your
                                <br></br> favourite brands across the
                                <br></br> world - with extraa!</p>
                            <button className="sinBtn">
                                <span className="signsLbl">Sign Up</span>
                            </button>
                        </Stack>
                        <Stack direction='row' alignItems='center' spacing={5} justifyContent='space-between' style={{ marginLeft: '16px', marginRight:'16px' }}>
                            <span className="arelbl">aRe yOu a cUsToMer? </span>
                            <span className="linklbl">Click here for coupons </span>
                        </Stack>
                        <Stack className="Ymain" spacing={2} direction='row' justifyContent='space-between'>
                            <img src={group2} className='grp'></img>
                            <Stack spacing={2} alignItems='center'>
                                    <p className="p2">How does<br></br>
                                        <span style={{ color: ' #4F3084' }}>extraa</span> <br></br>
                                        work?<br></br>
                                <p className="pP1">When you shop at a store and leave
                                    <br></br>  <span className="bold1">your feedback</span> with extraa, we give
                                    <br></br>you  <span className="bold1"> cool coupons</span> that you can
                                    <br></br>actually use.
                                </p></p>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={5} style={{marginLeft:'16px', marginTop:'40px', height:'200px'}}>
                            <Stack spacing={2}>
                                <label className="stepLb">Step 1</label>
                                <p className="scanLbl">Scan
                                <br></br>QR</p>
                                <p className="conL">Look out for them at shops
                                    <br></br> near you!</p>
                            </Stack>
                            <Stack>
                                <img src={scan}  className='qrImg'/>
                                <img src={arrow8} className='arr8' />
                                <span className='trylbl'>Try it!</span>
                            </Stack>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between'>
                            <Stack sx={{marginLeft:'50px'}}>
                                <img src={group3} className='takesImg' />
                                <img src={ph3} className='ph3' />
                                <img src={group4} className='gp4' />
                            </Stack>
                            <Stack spacing={2} sx={{ width:'50%'}}>
                            <label className="stepLb">Step 2</label>
                                <p className="scanLbl">Give
                                <br></br>feedback</p>
                                <p className="conL">We make sure your<br></br> 
                                favourite brands hear you
                                <br></br> out</p>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={10} justifyContent='space-between' style={{marginLeft:'16px'}}>
                        <Stack spacing={2}>
                                <label className="stepLb">Step 3</label>
                                <p className="scanLbl">Register
                                <br></br>Once</p>
                                <p className="conL">You never have to register
                                    <br></br>again!</p>
                            </Stack>
                            <Stack>
                                <img src={ph4} className='ph4'/>
                                <img src={arrow6} className='arr6'/>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={1} style={{marginLeft:'16px', marginBottom:'37px'}} justifyContent='space-between'>
                        <Stack>
                                <img src={group5} className='group5' />
                            </Stack>
                            <Stack spacing={2} sx={{width:'50%'}}>
                            <label className="stepLb">Step 4</label>
                                <p className="scanLbl">Get your
                                <br></br>coupons!</p>
                                <p className="conL">Everytime you give<br></br> 
                                feedback, you win
                                <br></br>coupons.</p>
                            </Stack>
                        </Stack>
                    </div>
                </>
                :
                <>
                    <div className="rec">
                        <img src={waves} className='vec1' />
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
                        <img src={group1} className='bHead' />
                        <p className="p2">How does<br></br>
                            <span style={{ color: ' #4F3084' }}>extraa</span> <br></br>
                            work?</p>
                        <p className="yCon">When you shop at a store and leave<br></br>
                            <span className="bold1">your feedback</span> with extraa, we give you
                            <span className="bold1"> cool coupons</span> that
                            you can actually use.
                        </p>
                    </div>
                    <div style={{ position: 'relative', marginLeft: '140px', marginTop: '205px' }}>
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
                                    <Stack>
                                        <img src={phBack} className="pBack"></img>
                                        <img src={ph1} className='ph1'></img>

                                        <img src={hand2} className="fing2"></img>
                                        <p className="p3">takes only<br>
                                        </br> a minute!</p>
                                        <img src={arrow2} className='arrow2' />
                                        <img src={curve2} className='cur2' />
                                        {/* <span className="bRecta1"></span>
                                <span className="bRecta2"></span>
                                <span className="bRecta3"></span> */}
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
                        <img src={giftman} className='starOut'></img>
                        <img src={starOut} className='starY1' />
                        <img src={starOut} className='starY2' />
                    </div>
                    <Stack className="Vrect" direction='row' alignItems='center' justifyContent='space-evenly'>
                        <p className="vCont">1000+<br></br>
                            <span style={{ fontSize: '25px' }} >Brands</span><br></br>
                            <span style={{ fontSize: '25px' }} >Onboarded</span> </p>
                        <p className="vCont">10000+<br></br>
                            <span style={{ fontSize: '25px' }} >Coupons</span><br></br>
                            <span style={{ fontSize: '25px' }} >Given</span> </p>
                        <p className="vCont">30+<br></br>
                            <span style={{ fontSize: '25px' }} >Partner</span><br></br>
                            <span style={{ fontSize: '25px' }} >Industries</span> </p>
                        <p className="vCont">10000+<br></br>
                            <span style={{ fontSize: '25px' }} >Happy</span><br></br>
                            <span style={{ fontSize: '25px' }} >Customers</span> </p>
                        <p className="vCont">10000+<br></br>
                            <span style={{ fontSize: '25px' }} >Happy</span><br></br>
                            <span style={{ fontSize: '25px' }} >Customers</span> </p>
                    </Stack>
                </>
            }
           <Footer /> 
        </>
    )
}

export default Home;