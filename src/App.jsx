import React from 'react'
import Header from './components/Header'
import './App.css'
import Main from './pages/main/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='relative'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
