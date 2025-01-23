import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import './App.css'
import Layout from './Layout'
import Contact from './pages/main/sections/Contact'

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
          path='/company-info'
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path='/work-info'
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
