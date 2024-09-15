import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageOne from './Pages/PageOne'
import PageTwo from './Pages/PageTwo'

export default function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route index element={<PageOne/>}/>
  <Route path="/pageOne" element={<PageOne/>}/>
  <Route path="/pageTwo" element={<PageTwo/>}/>
</Routes>
</BrowserRouter>
      
    </div>
  )
}
