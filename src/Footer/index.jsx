import { Divider } from '@mui/material'
import React from 'react'
import logo from '../icons/loBack.png'
import divide from '../icons/divider.png'
import call from '../icons/call.png'
import mail from '../icons/mail.png'
import location from '../icons/location.png'
import './footer.css'
import { Stack } from '@mui/system'

function Footer() {
  return (
    <div className='main'>
<img src={logo} className='lo'></img>
<div>
<img src={divide} className='divider'></img>
</div>
<Stack direction='row' alignItems='center' sx={{marginTop:'25px'}} justifyContent='center'>
<Stack direction='row' spacing={3}>
    <span className='signCo'>Sign up here for coupons</span>
    <button className='sigBtn'>
        <label className='sigLbl'>Sign Up</label>
    </button>
</Stack>
<Stack direction='row' spacing={3} sx={{marginLeft:'53px'}}>
    <span className='signCo'>Want to be a Partner?</span>
    <button className='joinBtn'>
        <label className='joinLb'>Join now</label>
    </button>
</Stack>
</Stack>
<Stack direction='row' justifyContent='center' sx={{marginTop:'52px'}}>
<label className='aboutLbl'>about us</label>
<label className='aboutLbl'>Scan & Win</label>
<label className='aboutLbl'>Ratings</label>
<label className='aboutLbl'>Products</label>
<label className='aboutLbl'>Gift Cards</label>
<label className='aboutLbl'>Contact us</label>
</Stack>
<Stack direction='row' justifyContent='center' spacing={5} sx={{marginTop:'36px'}}>
    <Stack direction='row' spacing={2} >
        <img src={call} style={{width: '15px',
height: "20px"}}></img>
<label className='phLbl'>+91 73050 12123</label>
    </Stack>
    <Stack direction='row' spacing={2} >
        <img src={mail} style={{width: '20px', marginTop:'3px',
height: "13px"}}></img>
<label className='phLbl'>sales@extraa.in</label>
    </Stack>
    <Stack direction='row' spacing={2} sx={{position:'relative'}} >
        <img src={location} style={{height: '17.42px',
width: "12.45px"}}></img>
<span className='loc'></span>
<p className='phLbl' style={{position:'relative', bottom:'10px', textAlign:'left'}}>101, Habibullah Rd, Parthsarathy Puram, <br>
</br>T. Nagar, Chennai, Tamil Nadu 600017</p>
    </Stack>
</Stack>
<div style={{marginBottom:'15px'}}>
<img src={divide} className='divider'></img>
</div>  
<label className='lastLbl'>T&C apply* | Terms of Service | Privacy Policy</label>
    </div>
  )
}

export default Footer