import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Layout({ children }) {
  return (
    <div className='relative mt-[60px]'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
