import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Header from '../Header'
import './sign.css'
import group16 from '../icons/Group16.png'
import group17 from '../icons/Group17.png'

function SignUp() {

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <>
            <Header />
            {matches ?
                <>
                    <div className='recYellow'>
                        <label className='mhowLbl'>Howdy Partner!</label>
                    </div>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Stack spacing={1} sx={{ marginLeft: '21px', marginTop: '27px' }}>
                            <label className='silbl2'>Extraa Reach</label>
                            <label className='silbl3'>“Your Lead Generation Machine”</label>
                        </Stack>
                        <img src={group17} className='hImg'></img>
                    </Stack>
                    <Stack spacing={1} sx={{ marginLeft: '16px' }} >
                        <label className='grp8lbl'>Makes business a community thing!</label>
                        <li className='listlbl1'>Cross market your brand with 1000+ partner brands</li>
                        <li className='listlbl1'>Grab attention from 70+ global organizations</li>
                        <li className='listlbl1'>Gain mass awareness with coupon giveaways on 50+ partner apps</li>
                        <li className='listlbl1'>Partner with Communities, Clubs and Associations</li>
                        <li className='listlbl1'>Engage with our online customers across multiple platforms</li>
                    </Stack>
                    <Stack spacing={1} sx={{ marginLeft: '21px', marginTop: '27px' }}>
                        <label className='silbl2'>Signup now!</label>
                        <p className='sinlbl1'>You are one step away from becoming a
                            <br></br> partner. Just fill out the form!</p>
                    </Stack>
                    <Stack sx={{ marginBottom: '51px', marginLeft: '16px', marginTop:'22px' }} spacing={1} >
                    <Stack spacing={1}>
                                <label className='silbl5'>Username</label>
                                <input className='txtbx1' type='text' placeholder='Username' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>Company name</label>
                                <input className='txtbx1' type='text' placeholder='Company name' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>GST number</label>
                                <input className='txtbx1' type='text' placeholder='GST number' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>Email address</label>
                                <input className='txtbx1' type='text' placeholder='Email address' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>Password</label>
                                <input className='txtbx1' type='text' placeholder='Enter password' />
                            </Stack>
                            <Stack>
                            <label className='passlbl'>Your password needs to be at least 6 characters.</label>
                            </Stack>
                            <Stack alignItems='center'>
                                <button className='subbtn'>
                                    <span className='subLbl'>Submit</span>
                                </button>
                            </Stack>
                    </Stack>
                </>
                :
                <div>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Stack sx={{ marginLeft: '89px', marginBottom: '51px' }} spacing={5} >
                            <label className='silbl1'>Howdy Partner!</label>
                            <Stack spacing={1}>
                                <label className='silbl2'>Extraa Reach</label>
                                <label className='silbl3'>“Your Lead Generation Machine”</label>
                            </Stack>
                            <img src={group16} className='grpImg'></img>
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
                        <Stack sx={{ marginBottom: '51px', marginRight: '140px' }} spacing={1} >
                            <Stack>
                                <label className='silbl1'>Signup now!</label>
                                <p className='silbl4'>You are one step away from becoming a
                                    <br></br>partner. Just fill out the form!</p>
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>Username</label>
                                <input className='txtbx1' type='text' placeholder='Username' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>Company name</label>
                                <input className='txtbx1' type='text' placeholder='Company name' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>GST number</label>
                                <input className='txtbx1' type='text' placeholder='GST number' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>Email address</label>
                                <input className='txtbx1' type='text' placeholder='Email address' />
                            </Stack>
                            <Stack spacing={1}>
                                <label className='silbl5'>Password</label>
                                <input className='txtbx1' type='text' placeholder='Enter password' />
                            </Stack>
                            <Stack>
                            <label className='passlbl'>Your password needs to be at least 6 characters.</label>
                            </Stack>
                            <Stack alignItems='center'>
                                <button className='subbtn'>
                                    <span className='subLbl'>Submit</span>
                                </button>
                            </Stack>
                        </Stack>
                    </Stack>
                </div>}
        </>
    )
}

export default SignUp