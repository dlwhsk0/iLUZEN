import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/main/Main'
import Footer from './components/Footer'
import Request from './pages/request/Request'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='relative'>
              <Header />
              <Main />
              <Footer />
            </div>
          }
        />
        <Route path='/request' element={<Request />} />
      </Routes>
    </Router>
  )
}
