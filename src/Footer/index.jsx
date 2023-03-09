import { Divider, useMediaQuery } from '@mui/material'
import React from 'react'
import logo from '../icons/loBack.png'
import logo1 from '../icons/loExtraa.png'
import divide from '../icons/divider.png'
import call from '../icons/call.png'
import mail from '../icons/mail.png'
import location from '../icons/location.png'
import './footer.css'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const matches = useMediaQuery('(max-width:600px)');
    const nav=useNavigate()
    return (
        <>
            {matches ?
                <>
                    <div className='main'>
                        <div>
                            <img src={logo} className='lo'></img>
                        </div>
                        <Stack direction='row' spacing={2} sx={{ marginTop: '26px', marginLeft: '16px', marginRight:'16px' }} alignItems='center' justifyContent='space-evenly'>
                            <Stack direction='row' spacing={1}  alignItems='center' justifyContent='space-between'>
                                <p className='wantLbl'>Want to be a
                                    <br></br> Partner?</p>
                                <button className='jBtn' >
                                    <span className='jLbl'>Join now</span>
                                </button>
                            </Stack>
                            <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between'>
                                <p className='wantLbl'>Sign up here
                                    <br></br>for coupons?</p>
                                <button className='signBtn' >
                                    <span className='siLbl'>Sign up</span>
                                </button>
                            </Stack>
                        </Stack>
                        <div style={{ marginBottom: '15px' }}>
                            <img src={divide} className='divider'></img>
                        </div>
                        <Stack direction='row' alignItems='center' justifyContent='space-evenly'>
                            <Stack spacing={1} alignItems='center'>
                                <label className='aLbl' onClick={()=>{nav('/aboutus')}}>about us</label>
                                <label className='aLbl' onClick={()=>{nav('/spinandwin')}}>Scan & Win</label>
                                <label className='aLbl' onClick={()=>{nav('/rating')}}>Ratings</label>
                                <label className='aLbl' onClick={()=>{nav('/products')}}>Products</label>
                                <label className='aLbl' onClick={()=>{nav('/giftcards')}}>Gift Cards</label>
                                <label className='aLbl' onClick={()=>{nav('/contact')}}>Contact us</label>
                            </Stack>
                            <Stack spacing={2}>
                            <Stack direction='row' spacing={2} >
                            <img src={call} style={{
                                width: '15px',
                                height: "20px"
                            }}></img>
                            <label className='phLbl'>+91 73050 12123</label>
                        </Stack>
                        <Stack direction='row' spacing={2} >
                            <img src={mail} style={{
                                width: '20px', marginTop: '3px',
                                height: "13px"
                            }}></img>
                            <label className='phLbl'>sales@extraa.in</label>
                        </Stack>
                        <Stack direction='row' spacing={2} sx={{ position: 'relative' }} >
                            <img src={location} style={{
                                height: '17.42px',
                                width: "12.45px"
                            }}></img>
                            <span className='loc'></span>
                            <p className='phLbl' style={{  textAlign: 'left' }}>101, Habibullah Rd,
                            <br></br> Parthsarathy Puram, <br>
                            </br>T. Nagar, Chennai, Tamil
                            <br></br> Nadu 600017</p>
                        </Stack>
                            </Stack>
                        </Stack>
                        <div style={{ marginBottom: '10px' }}>
                            <img src={divide} className='divider'></img>
                        </div>
                        <label className='lastLbl'>T&C apply* | Terms of Service | Privacy Policy</label>
                    </div>
                </>
                :
                <div className='main'>
                    <div>
                        <img src={logo} className='lo'></img>
                    </div>
                    <div>
                        <img src={divide} className='divider'></img>
                    </div>
                    <Stack direction='row' alignItems='center' sx={{ marginTop: '25px' }} justifyContent='center'>
                        <Stack direction='row' spacing={3}>
                            <span className='signCo'>Sign up here for coupons</span>
                            <button className='sigBtn'>
                                <label className='sigLbl'>Sign Up</label>
                            </button>
                        </Stack>
                        <Stack direction='row' spacing={3} sx={{ marginLeft: '53px' }}>
                            <span className='signCo'>Want to be a Partner?</span>
                            <button className='joinBtn'>
                                <label className='joinLb'>Join now</label>
                            </button>
                        </Stack>
                    </Stack>
                    <Stack direction='row' justifyContent='center' sx={{ marginTop: '52px' }}>
                        <label className='aboutLbl' onClick={()=>{nav('/aboutus')}} >about us</label>
                        <label className='aboutLbl' onClick={()=>{nav('/spinandwin')}}>Scan & Win</label>
                        <label className='aboutLbl' onClick={()=>{nav('/rating')}}>Ratings</label>
                        <label className='aboutLbl' onClick={()=>{nav('/products')}}>Products</label>
                        <label className='aboutLbl' onClick={()=>{nav('/giftcards')}}>Gift Cards</label>
                        <label className='aboutLbl' onClick={()=>{nav('/contact')}}>Contact us</label>
                    </Stack>
                    <Stack direction='row' justifyContent='center' spacing={5} sx={{ marginTop: '36px' }}>
                        <Stack direction='row' spacing={2} >
                            <img src={call} style={{
                                width: '15px',
                                height: "20px"
                            }}></img>
                            <label className='phLbl'>+91 73050 12123</label>
                        </Stack>
                        <Stack direction='row' spacing={2} >
                            <img src={mail} style={{
                                width: '20px', marginTop: '3px',
                                height: "13px"
                            }}></img>
                            <label className='phLbl'>sales@extraa.in</label>
                        </Stack>
                        <Stack direction='row' spacing={2} sx={{ position: 'relative' }} >
                            <img src={location} style={{
                                height: '17.42px',
                                width: "12.45px"
                            }}></img>
                            <span className='loc'></span>
                            <p className='phLbl' style={{ position: 'relative', bottom: '10px', textAlign: 'left' }}>101, Habibullah Rd, Parthsarathy Puram, <br>
                            </br>T. Nagar, Chennai, Tamil Nadu 600017</p>
                        </Stack>
                    </Stack>
                    <div style={{ marginBottom: '15px' }}>
                        <img src={divide} className='divider'></img>
                    </div>
                    <label className='lastLbl'>T&C apply* | Terms of Service | Privacy Policy</label>
                </div>}
        </>
    )
}

export default Footer