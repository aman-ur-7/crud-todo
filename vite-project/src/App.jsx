import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import AllPost from './AllPost'
import ReadPost from './ReadPost'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/allpost' element={<AllPost/>} />
      <Route path='/readpost' element={<ReadPost/>} />
      <Route path='/readpost' element={<ReadPost/>} />
    </Routes>
    </>
  )
}

export default App