import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div>
        <NavBar/>

        <div className=' flex justify-center items-center border-2 my-12 gap-10 h-40'>
            <div className=' border-2 w-1/3 '>
                <h1>ITEM RESCUE</h1>
            </div>
            <div className=' border-2 w-1/3'>
                <img src="#" alt="hehehe" />
            </div>
        </div>

        <div className=' flex justify-center items-center gap-6'>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
    
            <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>

        <Footer/>
    </div>
  )
}
