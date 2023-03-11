import { Stack } from '@mui/material'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import group14 from '../icons/Group14.png'
import spin from '../icons/spin.png'
import './spinwin.css'

function SpinWin() {
  return (
    <>
    <Header />
    <>
      <div style={{position:'relative'}}>
      <Stack sx={{position:'absolute'}} spacing={10} direction='row' alignItems='center' justifyContent='space-between'>
        <img src={spin} className='spinImg' />
        <Stack alignItems='center' spacing={0}>
          <p className='coupLbl'>Coupon of the day<br></br>
          <p className='csublbl'>Spin & win 1 out of 4 curated coupons!</p>
          </p>
          <button className='spinBtn'>
            <span className='spinTxt'>Spin</span>
          </button>
        </Stack>
      </Stack>  
      <img src={group14} className='bsRect' />   
      </div> 
      <div className='whRect'>
        <Stack>
          <span className='youCo'>Your Coupons</span>
          <span className='youCos'>Make sure to redeem your coupons or they’ll expire</span>
        </Stack>
        <Stack className='wBox'>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <input type='text' className='searchBox' placeholder='search with brand name / industry'></input>
            <Stack direction='row' alignItems='center'>
              <button className='sortBtn'></button>
              <button className='sortBtn'></button>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
    <Footer />
    </>
  )
}

export default SpinWin