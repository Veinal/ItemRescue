import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import LostItems from './LostItems'
import FoundItems from './FoundItems'
import NavBar from './NavBar'
import LostItemList from './LostItemList'
import FoundItemList from './FoundItemList'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/lostitems' element={<LostItems/>}/>
                <Route exact path='/founditems' element={<FoundItems/>}/>
                <Route exact path='/lostitemlist' element={<LostItemList/>}/>
                <Route exact path='/founditemlist' element={<FoundItemList/>}/>
                <Route exact path='/signin' element={<SignIn/>}/>
                <Route exact path='/signup' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
