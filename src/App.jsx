import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import './App.css'
import Layout from './Layout'
import Company from './pages/Company/Company'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path='/company'
          element={
            <Layout>
              <Company />
            </Layout>
          }
        />
        <Route path='/work' element={<Layout></Layout>} />
        <Route path='/items' element={<Layout></Layout>} />
        <Route path='/contact' element={<Layout></Layout>} />
      </Routes>
    </Router>
  )
}
