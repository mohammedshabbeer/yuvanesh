import React from "react";
import './header.css'
import logo from '../icons/extraaLogo.png'
import { Stack } from "@mui/system";
import { AppBar } from "@mui/material";

function Header(){

    return(
        <>     
        <AppBar position='static' sx={{backgroundColor:'white', boxShadow:'0px 0px 0px 0px'}} >  
        <Stack > 
        <Stack className="head" direction='row'   alignItems='center' justifyContent='space-between' >
            <img src={logo} className='logo' />
            <Stack direction='row' spacing={3} alignItems='center' sx={{marginTop:'15px'}}>
                <label className="lbl" >About us</label>
                <label className="lbl" >Spin & Win</label>
                <label className="lbl">Rating</label>
                <label className="lbl">Products</label>
                <label className="lbl">Gift Cards</label>
                <label className="lbl">Contact us</label>
                <button className="logBtn">
                    <label className="logLbl">Login</label>
                </button>
                <button className="partBtn">
                    <label className="partLbl">Become a Partner</label>
                </button>
            </Stack>
            </Stack>
        </Stack>
        </AppBar>
        </>

    )

}


export default Header;