import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import './App.css'
import Layout from './Layout'
import Contact from './pages/main/sections/Contact'
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
        <Route
          path='/work'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='/items'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='/contact'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}
