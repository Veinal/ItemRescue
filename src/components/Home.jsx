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
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home() {

    const [reqState,setReqState]=useState();

    const [item,setItem]=useState();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const handleItemChange=(e)=>{
        setItem({...item,[e.target.name]:e.target.value})
    }
    console.log(item,'item')

    const handleItemSubmit=(e)=>{
        e.preventDefault()

        axios.post('http://localhost:7000/api/item/insert',item)
        .then((res)=>{
            console.log(res.data)
            handleClose()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleChange=(e)=>{
        setReqState({...reqState,[e.target.name]:e.target.value})
    }
    console.log(reqState,'setreqstate');

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post('http://localhost:7000/api/request/insert',reqState)
        .then((res)=>{
            console.log(res.data)
            handleClose2()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

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

        <div className=' bg-slate-900 flex flex-col justify-center items-center my-10 p-16'>
        <h1 className='text-white text-3xl font-semibold mb-8'>UPLOAD ITEM DETAILS</h1>
        <Button onClick={handleOpen} className='' variant='contained' color="inherit">+</Button>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            
            <div className="flex flex-col justify-center items-center p-5 rounded-lg shadow-lg w-auto mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Enter Item Details</h2>
                <span className="mb-4 w-full">
                    <label htmlFor="item-name" className="block text-gray-700 mb-1">Item Name:</label>
                    <TextField
                        id="item-name"
                        label="Item Name"
                        variant="outlined"
                        className="w-full"
                        name='itemName'
                        onChange={(e)=>handleItemChange(e)}
                    />
                </span>
                <span className="mb-4 w-full">
                    <label htmlFor="description" className="block text-gray-700 mb-1">Description:</label>
                    <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                        className="w-full"
                        name='description'
                        onChange={(e)=>handleItemChange(e)}
                        multiline
                        rows={3}
                    />
                </span>
                <span className="mb-4 w-full">
                    <label htmlFor="image-upload" className="block text-gray-700 mb-1">Upload Image:</label>
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        // name='image'
                        // onChange={(e)=>handleItemChange(e)}
                    />
                </span>
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    onClick={handleItemSubmit}
                >
                    Submit
                </button>
            </div>

            </Box>
        </Modal>
        </div>

        <div className=' flex flex-col justify-center items-center mb-10 p-6'>
        <h1 className='text-3xl font-semibold mb-8'>REQUEST FOR ITEM</h1>
        <Button onClick={handleOpen2} className='' variant='contained' color="inherit">+</Button>

        <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style2}>
            <div className="flex flex-col justify-center items-center p-5 rounded-lg shadow-lg w-auto mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Enter Request Details</h2>
                <span className="mb-4 w-full">
                    <label htmlFor="req-item" className="block text-gray-700 mb-1">Item Name:</label>
                    <TextField
                        id="req-item"
                        label="Request item"
                        variant="outlined"
                        className="w-full"
                        name='reqItem'
                        onChange={(e)=>handleChange(e)}
                    />
                </span>
                <span className="mb-4 w-full">
                    <label htmlFor="desc" className="block text-gray-700 mb-1">Description:</label>
                    <TextField
                        id="desc"
                        label="Description"
                        variant="outlined"
                        className="w-full"
                        multiline
                        rows={3}
                        name='desc'
                        onChange={(e)=>handleChange(e)}
                    />
                </span>
                
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Submit
                </button>
            </div>
            </Box>
        </Modal>
        </div>

        <Footer/>
    </div>
  )
}
