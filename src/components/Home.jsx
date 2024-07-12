import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import lostimg from '../lostimg.jpg'

export default function Home() {
  return (
    <div>

        <div className=' flex justify-center items-center  my-14 gap-6 h-96'>
            <div className='  w-1/3'>
                <h1 className=' font-bold text-5xl mb-4'>ITEM RESCUE</h1>
                {/* <h2 className='text-lg mb-3'>Your Lost Items Deserve a Second Chance!</h2> */}
                <h2 className='text-lg'>"Together, we can make every lost item a story of reunion."</h2>
            </div>
            <div className='  w-1/3'>
                <img src={lostimg} alt="hehehe" />
            </div>
        </div>

        <div className=' flex justify-center items-center gap-6 my-16'>
            <Card variant="outlined" sx={{ minWidth: "25%",border:"3px solid black" }}>
            <CardContent>
                <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                    LOST ITEMS
                </Typography>
                <img src="#" alt="lost" />
            </CardContent>
            <CardActions>
                <Link to="/lostitems">
                    <Button size="large" variant="contained" color='primary'>More</Button>
                </Link>
            </CardActions>
            </Card>
    
            <Card variant="outlined" sx={{ minWidth: "25%",border:"3px solid black" }}>
            <CardContent>
                <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                    FOUND ITEMS
                </Typography>
                <img src="#" alt="found" />
            </CardContent>
            <CardActions>
                <Link to="/founditems">
                    <Button size="large" variant="contained" color='primary'>More</Button>
                </Link>
            </CardActions>
            </Card>
        </div>

        <Footer/>
    </div>
  )
}
