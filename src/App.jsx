import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './Components/Homepage'

import Navbar from './Components/Navbar'
import Post from './Components/Post'
const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>

     <Route path='/' element={<Homepage/>}></Route>
     <Route path='//:pid' element={<Post/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App