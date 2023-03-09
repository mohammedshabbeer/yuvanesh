import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './product.css'
import group6 from '../icons/Group6.png'
import group7 from '../icons/Group7.png'
import group8 from '../icons/Group8.png'
import group9 from '../icons/Group9.png'
import group10 from '../icons/Group10.png'
import group11 from '../icons/Group11.png'
import group12 from '../icons/Group12.png'
import group13 from '../icons/Group13.png'
import add from '../icons/add.png'
import sub from '../icons/sub.png'
import wrong from '../icons/wrong.png'
import correct from '../icons/correct.png'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

function Products() {

  const matches = useMediaQuery('(max-width:600px)');

  const [cont1, setCont1] = useState(false)
  const [cont2, setCont2] = useState(false)
  const [cont3, setCont3] = useState(false)
  const [cont4, setCont4] = useState(false)
  const [selId, setSelId]=useState('02')

  var responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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

  var premArr = [
    {
      id:'01',
      name: 'Growth',
      amt: '1499/month',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id:'02',
      name: 'Pro',
      amt: '2999/month',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id:'03',
      name: 'Enterprise',
      amt: '5999/month',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id:'04',
      name: 'Extraa Extraa',
      amt: '9999/month',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    }
  ]

 function OnSubClick(e, id){
  setSelId(id)
 }


  return (
    <>
      <Header />
      {matches ?
        <>
          <div>
            <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ marginLeft: '16px' }}>
              <Stack spacing={2}>
              <Stack spacing={1}>
                <p className='tolbl'>Hello there,
                  <br></br>partner!</p>
                <p className='whelbl'>
                  When we say that everybody<br></br> deserves a little extraa.<br></br>
                  We mean it!
                </p>
                </Stack>
                <button className='joinbtn'>
                  <span className='joinll'>Join now</span>
                </button>
              </Stack>
              <img src={group12} className='grp12' ></img>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='space-between'  className='brect1'>
            <img src={group7} className='grp7' ></img>
            <Stack spacing={0}>
              <p className='prolbl'>Products, <span style={{ color: '#FAB516' }}>Ahoy!</span><br></br>
              </p>
              <span className='extlbl'>Extraa has 5 products that help our partners!</span>
            </Stack>
            </Stack>
            {/* starting of accord 1 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont1) {
                  setCont1(false)
                } else {
                  setCont1(true)
                }
              }} >
              <Stack sx={{ marginLeft: '16px' }}>
                <label className='Extlbl'>Extraa Reach</label>
                <label className='yourlbl'>“Your Lead Generation Machine”</label>
              </Stack>
              <Stack sx={{ marginRight: '38px' }}>
                {cont1 && <img src={sub} className='sub' ></img>}
                {!cont1 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
            <Stack style={{ backgroundColor: '#FAB516' }} alignItems='center'>
              <div style={{ display: (!cont1 ? "block" : 'none') }} className='lincss'></div>
            </Stack>
            <Stack sx={{ display: (cont1 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' justifyContent='space-between' alignItems='center' >
                <img src={group13} className='grp8' ></img>
                <Stack alignItems='center' spacing={1}>
                  <p className='grp8lbl'>Makes business<br>
                  </br> a community <br></br>thing!</p>
                  <ul>
                    <li className='listlbl'>Cross market your brand with 1000+ partner brands</li>
                    <li className='listlbl'>Grab attention from 70+ global organizations</li>
                    <li className='listlbl'>Gain mass awareness with coupon giveaways on 50+ partner apps</li>
                    <li className='listlbl'>Partner with Communities, Clubs and Associations</li>
                    <li className='listlbl'>Engage with our online customers across multiple platforms</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 1 */}
          {/* starting of accord 2 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont2) {
                  setCont2(false)
                } else {
                  setCont2(true)
                }
              }} >
              <Stack sx={{ marginLeft: '16px' }}>
                <label className='Extlbl'>Extraa Experience</label>
                <label className='yourlbl'>“Get feedback from all your customers”</label>
              </Stack>
              <Stack sx={{ marginRight: '38px' }}>
                {cont2 && <img src={sub} className='sub' ></img>}
                {!cont2 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
            <Stack style={{ backgroundColor: '#FAB516' }} alignItems='center'>
              <div style={{ display: (!cont2 ? "block" : 'none') }} className='lincss'></div>
            </Stack>
            <Stack sx={{ display: (cont2 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' justifyContent='space-between' alignItems='center' >
                <img src={group9} className='grp8' ></img>
                <Stack alignItems='center' spacing={1}>
                  <p className='grp8lbl'>Feedback is <br>
                  </br>king!</p>
                  <ul>
                    <li className='listlbl'>Install QR codes at your store to capture feedback from customers</li>
                    <li className='listlbl'>Evaluate feedback insights through monthly reports</li>
                    <li className='listlbl'>Use data to give customers the best offers, based on their feedback</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 2 */}
          {/* starting of accord 3 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont3) {
                  setCont3(false)
                } else {
                  setCont3(true)
                }
              }} >
              <Stack sx={{ marginLeft: '16px' }}>
                <label className='Extlbl'>Extra Rewards</label>
                <label className='yourlbl'>“Your Loyal customers deserve a little extraa”</label>
              </Stack>
              <Stack sx={{ marginRight: '38px' }}>
                {cont3 && <img src={sub} className='sub' ></img>}
                {!cont3 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
            <Stack style={{ backgroundColor: '#FAB516' }} alignItems='center'>
              <div style={{ display: (!cont3 ? "block" : 'none') }} className='lincss'></div>
            </Stack>
            <Stack sx={{ display: (cont3 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' justifyContent='space-between' alignItems='center' >
                <img src={group10} className='grp8' ></img>
                <Stack alignItems='center' spacing={1}>
                  <p className='grp8lbl'>Did someone <br></br>say loyalty <br>
                  </br>coupons?</p>
                  <ul>
                    <li className='listlbl'>Reward your most loyal customers with retention coupons</li>
                    <li className='listlbl'>Surprise them with exclusive super coupons</li>
                    <li className='listlbl'>Send them extraa love on festivals</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 3 */}
          {/* starting of accord 4 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont4) {
                  setCont4(false)
                } else {
                  setCont4(true)
                }
              }} >
              <Stack sx={{ marginLeft: '16px' }}>
                <label className='Extlbl'>Extra Perks</label>
                <label className='yourlbl'>“A happy employee is a happy employee!”</label>
              </Stack>
              <Stack sx={{ marginRight: '38px' }}>
                {cont4 && <img src={sub} className='sub' ></img>}
                {!cont4 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
           
            <Stack sx={{ display: (cont4 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' justifyContent='space-between' alignItems='center' >
                <img src={group11} className='grp8' ></img>
                <Stack alignItems='center' spacing={1}>
                  <p className='grp8lbl'>Good teams<br></br>deserve great<br>
                  </br>rewards!</p>
                  <ul>
                    <li className='listlbl'>Reward your team with extraa coupons</li>
                    <li className='listlbl'>Choose from a curated collection of brands</li>
                    <li className='listlbl'>Incentivize your employees at the click of a button</li>
                    <li className='listlbl'>Give coupons and gift cards for the festive seasons</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 4 */}
          <Stack>
            <label className='pplbl'>Plans & Pricing</label>
          </Stack>
          <Carousel responsive={responsive}>
              {premArr.map((i, index) => (
                <Stack direction='row' alignItems='center'>
                  <Stack className='carview' spacing={1} sx={{backgroundColor:(i.id==selId?"#F9B61F":'#FFFFFF')}} 
                  onClick={(e)=>OnSubClick(e,i.id)}>
                    <span className='cardlbl1'>{i.name}</span>
                    <span className='cardlbl2'>{i.amt}</span>
                    <p className='cardlbl3'>{i.desc}</p>
                    <Stack alignItems='center' sx={{ width: '100%', marginTop: '24px' }}>
                      <button className='subsBtn'>
                        <span className='subslbl'>Subscribe</span>
                      </button>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Carousel>
            <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ '&:last-child td, &:last-child th,': { border: 0 }, borderTop: 'none' }}>
                    <TableCell sx={{ color: '#ffffff', width: '35%' }}> dsf  </TableCell>
                    <TableCell align="right" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Growth<br></br>1499/month</p>
                    </TableCell>
                    <TableCell align="right" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Pro<br></br>2999/month</p>
                    </TableCell>
                    <TableCell align="right" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Enterprise<br></br>5999/month</p>
                    </TableCell>
                    <TableCell align="right" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Extraa Extraa<br></br>9999/month</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <span className='tbllbl'>Extraa Reach</span>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>2,500
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>6,000
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10,000
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>15,000
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Experience <br></br>
                        <p style={{ fontSize: '6px' }}>(Feedback forms with QR codes)</p></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>4</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>6</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>20</p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Scan Limit</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>1,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>2,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>50,000</p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Whatsapp Credit</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>2,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>20,000</p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Rewards</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Events</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Perks</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Stack alignItems='center' >
            <label className='finlbl'>Need a more customised plan? Mail us at hello@extraa.in</label>
          </Stack>
          </div>
        </> :
        <div>
          <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ marginLeft: '140px' }}>
            <Stack spacing={5}>
              <Stack spacing={1}>
                <span className='tolbl'>Hello there, partner!</span>
                <p className='whelbl'>When we say that everybody deserves
                  <br></br> a little extraa. WE MEAN IT!</p>
              </Stack>
              <button className='joinbtn'>
                <span className='joinl'>Join now</span>
              </button>
            </Stack>
            <img src={group6} className='grp6' ></img>
          </Stack>
          <Stack direction='row' alignItems='center' className='brect' spacing={2} >
            <img src={group7} className='grp7' ></img>
            <Stack spacing={0}>
              <p className='prolbl'>Products, <span style={{ color: '#FAB516' }}>Ahoy!</span><br></br>
              </p>
              <span className='extlbl'>Extraa has 5 products that help our partners!</span>
            </Stack>
          </Stack>
          {/* starting of accord 1 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont1) {
                  setCont1(false)
                } else {
                  setCont1(true)
                }
              }} >
              <Stack sx={{ marginLeft: '240px' }}>
                <label className='Extlbl'>Extraa Reach</label>
                <label className='yourlbl'>“Your Lead Generation Machine”</label>
              </Stack>
              <Stack sx={{ marginRight: '266px' }}>
                {cont1 && <img src={sub} className='sub' ></img>}
                {!cont1 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
            <Stack style={{ backgroundColor: '#FAB516' }} alignItems='center'>
              <div style={{ display: (!cont1 ? "block" : 'none') }} className='lincss'></div>
            </Stack>
            <Stack sx={{ display: (cont1 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' spacing={10} alignItems='center' >
                <img src={group8} className='grp8' ></img>
                <Stack spacing={5} >
                  <label className='grp8lbl'>Makes business a community thing!</label>
                  <ul>
                    <li className='listlbl'>Cross market your brand with 1000+ partner brands</li>
                    <li className='listlbl'>Grab attention from 70+ global organizations</li>
                    <li className='listlbl'>Gain mass awareness with coupon giveaways on 50+ partner apps</li>
                    <li className='listlbl'>Partner with Communities, Clubs and Associations</li>
                    <li className='listlbl'>Engage with our online customers across multiple platforms</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 1 */}
          {/* starting of accord 2 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont2) {
                  setCont2(false)
                } else {
                  setCont2(true)
                }
              }} >
              <Stack sx={{ marginLeft: '240px' }}>
                <label className='Extlbl'>Extraa Perks</label>
                <label className='yourlbl'>“Good employees deserve great rewards!”</label>
              </Stack>
              <Stack sx={{ marginRight: '266px' }}>
                {cont2 && <img src={sub} className='sub' ></img>}
                {!cont2 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
            <Stack style={{ backgroundColor: '#FAB516' }} alignItems='center'>
              <div style={{ display: (!cont2 ? "block" : 'none') }} className='lincss'></div>
            </Stack>
            <Stack sx={{ display: (cont2 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' spacing={10} alignItems='center' >
                <img src={group9} className='grp8' ></img>
                <Stack spacing={5} >
                  <label className='grp8lbl'>Feedback is king!</label>
                  <ul>
                    <li className='listlbl'>Install QR codes at your store to capture feedback from all customers.</li>
                    <li className='listlbl'>Evaluate the feedback insights through monthly reports.</li>
                    <li className='listlbl'> Use data to promote the best offers for customers based on their feedback.</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 2 */}
          {/* starting of accord 3 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont3) {
                  setCont3(false)
                } else {
                  setCont3(true)
                }
              }} >
              <Stack sx={{ marginLeft: '240px' }}>
                <label className='Extlbl'>Extraa Rewards</label>
                <label className='yourlbl'>“Your Loyal customers deserve a little extraa”</label>
              </Stack>
              <Stack sx={{ marginRight: '266px' }}>
                {cont3 && <img src={sub} className='sub' ></img>}
                {!cont3 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
            <Stack style={{ backgroundColor: '#FAB516' }} alignItems='center'>
              <div style={{ display: (!cont3 ? "block" : 'none') }} className='lincss'></div>
            </Stack>
            <Stack sx={{ display: (cont3 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' spacing={10} alignItems='center' >
                <img src={group10} className='grp8' ></img>
                <Stack spacing={5} >
                  <label className='grp8lbl'>Did someone say loyalty coupons?</label>
                  <ul>
                    <li className='listlbl'>Reward your most loyal customers with retention coupons</li>
                    <li className='listlbl'>Surprise them with exclusive super coupons</li>
                    <li className='listlbl'>Send them extraa love on festivals</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 3 */}
          {/* starting of accord 4 */}
          <Stack>
            <Stack className='yrect' direction='row' alignItems='center'
              justifyContent='space-between' onClick={() => {
                if (cont4) {
                  setCont4(false)
                } else {
                  setCont4(true)
                }
              }} >
              <Stack sx={{ marginLeft: '240px' }}>
                <label className='Extlbl'>Extraa Experience</label>
                <label className='yourlbl'>“Get feedback from all your customers”</label>
              </Stack>
              <Stack sx={{ marginRight: '266px' }}>
                {cont4 && <img src={sub} className='sub' ></img>}
                {!cont4 && <img src={add} className='addimg' ></img>}
              </Stack>
            </Stack>
            <Stack sx={{ display: (cont4 ? "block" : 'none') }} >
              <Stack className='conBg' direction='row' spacing={10} alignItems='center' >
                <img src={group11} className='grp8' ></img>
                <Stack spacing={5} >
                  <label className='grp8lbl'>Good teams deserve great rewards!</label>
                  <ul>
                    <li className='listlbl'>Reward your team with extraa coupons</li>
                    <li className='listlbl'>Choose from a curated collection of brands</li>
                    <li className='listlbl'>Incentivize your employees at the click of a button</li>
                    <li className='listlbl'>Give coupons and gift cards for the festive seasons</li>
                  </ul>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* end of accord 4 */}

          <Stack>
            <label className='pplbl'>Plans & Pricing</label>
          </Stack>
          <div style={{ marginLeft: "50px" }}>
            <Carousel responsive={responsive}>
              {premArr.map((i, index) => (
                <Stack direction='row' alignItems='center'>
                  <Stack className='carview' onClick={(e)=>OnSubClick(e,i.id)} sx={{backgroundColor:(i.id==selId?"#F9B61F":'#FFFFFF')}}  spacing={2}>
                    <span className='cardlbl1'>{i.name}</span>
                    <span className='cardlbl2'>{i.amt}</span>
                    <p className='cardlbl3'>{i.desc}</p>
                    <Stack alignItems='center' sx={{ width: '100%', marginTop: '24px' }}>
                      <button className='subsBtn'>
                        <span className='subslbl'>Subscribe</span>
                      </button>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Carousel>
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ '&:last-child td, &:last-child th,': { border: 0 }, borderTop: 'none' }}>
                    <TableCell sx={{ color: '#ffffff', width: '35%' }}> dsf  </TableCell>
                    <TableCell align="right" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Growth<br></br>1499/month</p>
                    </TableCell>
                    <TableCell padding="1rem" align="right" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Pro<br></br>2999/month</p>
                    </TableCell>
                    <TableCell align="right" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Enterprise<br></br>5999/month</p>
                    </TableCell>
                    <TableCell align="right" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tblHead'>Extraa Extraa<br></br>9999/month</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <span className='tbllbl'>Extraa Reach</span>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>2,500
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>6,000
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10,000
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>15,000
                        <br></br><span style={{ fontSize: '12px' }}>coupons</span></p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Experience <br></br>
                        <p style={{ fontSize: '12px' }}>(Feedback forms with QR codes)</p></p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>4</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>6</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>20</p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Scan Limit</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>1,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>2,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>50,000</p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Whatsapp Credit</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>2,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>10,000</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <p className='tbllbl1'>20,000</p>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Rewards</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Events</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='left' sx={{ width: '35%' }} component="th" scope="row">
                      <p className='tbllbl'>Extraa Perks</p>
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='01'?"#F9B61F":'#ffffff')}}>
                      <img src={wrong} className='wroimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='02'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='03'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                    <TableCell align="center" sx={{backgroundColor:(selId=='04'?"#F9B61F":'#ffffff')}}>
                      <img src={correct} className='corrimg' />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Stack alignItems='center' sx={{ marginTop: '96px', marginBottom: '23px' }}>
            <label className='finlbl'>Need a more customised plan? Mail us at hello@extraa.in</label>
          </Stack>
        </div>}
      <Footer />
    </>
  )
}

export default Products