import { Card, Grid, Stack, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import group14 from '../icons/Group14.png'
import group15 from '../icons/Group15.png'
import spin from '../icons/spin.png'
import myntra from '../icons/myntra.png'
import mcd from '../icons/mcD.png'
import divayoga from '../icons/divaLogo.png'
import wheatbake from '../icons/wheatbake.jpg'
import efif from '../icons/efif.png'
import brownie from '../icons/brownie.png'
import jelabi from '../icons/jelabi.png'
import sowbaghya from '../icons/sowbaghya.png'
import coffee from '../icons/coffee.png'
import logo from '../icons/loBack.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './spinwin.css'

function SpinWin() {

  const matches = useMediaQuery('(max-width:600px)');

  var gridArr=[{
    id:'01',
    icon:"myntra",
    lbl1:'Fashion & Clothing',
    coupon:'MYEXTRAA',
    name:'Myntra',
    offer:'10% OFF UPTO RS.500',
    subLbl:'On Myntra Select..',
    date:'31/07/2023'
  },
  {
    id:'02',
    icon:"mcd",
    lbl1:'Hotels & Restraunts',
    coupon:'EXTRAFRIES',
    name:"Mcdonald's",
    offer:'GET A FREE REGULAR FRIES',
    subLbl:'On Purchase Of 199',
    date:'31/05/2023'
  },
  {
    id:'03',
    icon:"divayoga",
    lbl1:'Gyms',
    coupon:'extraadiva3',
    name:'Divayoga',
    offer:'100% OFF ',
    subLbl:'3 Days Free Yoga',
    date:'31/04/2023'
  },
  {
    id:'04',
    icon:"wheatbake",
    lbl1:'Bakery/ cafe & Confectionary',
    coupon:'WHEATBAKES10',
    name:'Wheat Bakes',
    offer:'FLAT 15% OFF',
    subLbl:'ON ALL ITEM',
    date:'31/03/2023'
  },
  {
    id:'05',
    icon:"efif",
    lbl1:'Jewellery',
    coupon:'EFIF2000',
    name:'Efif',
    offer:'NOSEPIN OF RS.2000 FREE',
    subLbl:'Join our monthly s..',
    date:'31/12/2023'
  },
  {
    id:'06',
    icon:"jelabi",
    lbl1:'Hotels & Restraunts',
    coupon:'JELABIEXTRAA10',
    name:'Jelabi Kadai',
    offer:'FLAT 10% OFF',
    subLbl:'ON ORDERS ABOVE..',
    date:'31/01/2023'
  },
  {
    id:'07',
    icon:"sowbaghya",
    lbl1:'Home Applainces',
    coupon:'SOW25',
    name:'Sowbaghya',
    offer:'FLAT 25% OFF',
    subLbl:'ON MRP',
    date:'30/12/2023'
  },
  {
    id:'08',
    icon:"coffee",
    lbl1:'Bakery/ cafe & Confectionary',
    coupon:'COFFEEEXTRAA15',
    name:'Coffee Shastra',
    offer:'15% OFF',
    subLbl:'ON MINIMIUM PUR..',
    date:'15/02/2023'
  },
  {
    id:'09',
    icon:"brownie",
    lbl1:'Bakery/ cafe & Confectionary',
    coupon:'EXTRAABROWNIE1',
    name:'Brownie Heaven',
    offer:'FREE BROWNIE',
    subLbl:'1FREE BROWNIE ON..',
    date:'01/07/2023'
  }
]
  return (
    <>
    <Header />
    {matches ? 
    <>
    <div style={{position:'relative', backgroundColor:'#4F3084'}}>
      <Stack sx={{position:'absolute', width:'100%'}} spacing={1.5}  alignItems='center'>
      <p className='coupLbl'>Coupon of the day!</p>
        <img src={spin} className='spinImg' />
        <button className='spinBtn'>
            <span className='spinTxt'>Spin</span>
          </button>
          <p className='csublbl'>Spin & win 1 out of 4 curated coupons!</p>
      </Stack>  
      <img src={group15} className='bsRect' />   
      </div> 
      <div style={{paddingTop:'38px'}}>
        <span className='youCo'>Your</span><br></br>
        <span className='youCo'>Coupons</span><br></br>
        <span className='youCos'>Make sure to redeem your coupons or they’ll expire!</span>
        <input className='searchBox' type='text' placeholder='search with brand name / industry'/>
      <Stack direction='row' alignItems='center'>
      <button className='sortBtn'>
                <span className='btnTxt'>Sort</span>
              </button>
              <button className='sortBtn'>
              <span className='btnTxt'>Filter</span>
              </button>
      </Stack>
      <Grid container spacing={2} sx={{margin:'10px 10px 10px 10px', width:'300px'}} alignItems='center'>
            {gridArr.map((i,index)=>(
              <Grid item md={4} xs={12} key={index}>
              <Card sx={{width:'100%', height:'140px', borderRadius:'20px'}}>
                <Box>
                  <Stack direction='row' alignItems='center' sx={{backgroundColor:'pink'}}>
                    <Stack spacing={2} sx={{width:'40%', height:'210px', backgroundColor:'pink',
                     paddingLeft:'10px'}} alignItems='center'>
                      <Stack alignItems='center'>
                      <img src={myntra} className='gLogoImg' />
                      <label className='gLbl1' >{i.lbl1}</label>
                      </Stack>
                      <label className='gLbl2' >{i.coupon}</label>
                    </Stack>
                    <Stack spacing={0} sx={{backgroundColor:"#ffffba", width:'60%',
                     height:'210px', paddingLeft:'10px', paddingTop:'15px'}}>
                      <label className='gLbl3' >{i.name}</label>
                      <label className='gLbl4' >{i.offer}</label>
                      <Stack direction='row' alignItems='center' justifyContent='space-between'>
                      <label className='gLbl5' >{i.subLbl}</label>
                      <KeyboardArrowRightIcon  sx={{color:'#4F3084'}} />
                      </Stack>
                      <label className='gLbl6' >valid till<span className='gLbl7'>:{i.date}</span></label>
                      <div className='divi'></div>
                      <Stack direction='row' alignItems='center' sx={{marginTop:'10px', marginBottom:'5px'}}>
                        <label className='gLbl8'>Powered by</label>
                        <img src={logo} className='loogo' />
                      </Stack>
                      <label className='gLbl9'>www.extraa.in</label>
                    </Stack>
                  </Stack>
                </Box>
              </Card>
            </Grid> 
            ))}
                       
          </Grid>
      </div>
    </>
    :
    <>
      <div style={{position:'relative', backgroundColor:'#4F3084'}}>
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
            <Stack direction='row' alignItems='center' sx={{marginRight:'87px'}} >
              <button className='sortBtn'>
                <span className='btnTxt'>Sort</span>
              </button>
              <button className='sortBtn'>
              <span className='btnTxt'>Filter</span>
              </button>
            </Stack>
          </Stack>
          <Grid container spacing={2} sx={{margin:'15px 10px 15px 10px'}}>
            {gridArr.map((i,index)=>(
              <Grid item md={4} key={index}>
              <Card sx={{width:'330px', height:'210px', borderRadius:'20px'}}>
                <Box>
                  <Stack direction='row' alignItems='center' sx={{backgroundColor:'pink'}}>
                    <Stack spacing={2} sx={{width:'40%', height:'210px', backgroundColor:'pink',
                     paddingLeft:'10px'}} alignItems='center'>
                      <Stack alignItems='center'>
                      <img src={myntra} className='gLogoImg' />
                      <label className='gLbl1' >{i.lbl1}</label>
                      </Stack>
                      <label className='gLbl2' >{i.coupon}</label>
                    </Stack>
                    <Stack spacing={0} sx={{backgroundColor:"#ffffba", width:'60%',
                     height:'210px', paddingLeft:'10px', paddingTop:'15px'}}>
                      <label className='gLbl3' >{i.name}</label>
                      <label className='gLbl4' >{i.offer}</label>
                      <Stack direction='row' alignItems='center' justifyContent='space-between'>
                      <label className='gLbl5' >{i.subLbl}</label>
                      <KeyboardArrowRightIcon  sx={{color:'#4F3084'}} />
                      </Stack>
                      <label className='gLbl6' >valid till<span className='gLbl7'>:{i.date}</span></label>
                      <div className='divi'></div>
                      <Stack direction='row' alignItems='center' sx={{marginTop:'10px', marginBottom:'5px'}}>
                        <label className='gLbl8'>Powered by</label>
                        <img src={logo} className='loogo' />
                      </Stack>
                      <label className='gLbl9'>www.extraa.in</label>
                    </Stack>
                  </Stack>
                </Box>
              </Card>
            </Grid> 
            ))}
                       
          </Grid>
        </Stack>
      </div>
    </>}
    <Footer />
    </>
  )
}

export default SpinWin