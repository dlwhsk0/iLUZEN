import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import './App.css'
import Layout from './Layout'
import Company from './pages/Company/Company'
import Business from './pages/business/Business'
import PageLayout from './pages/PageLayout'
import company from './assets/company.jpg'
import business from './assets/business.jpg'
import Design from './pages/design/Design'
import Support from './pages/support/Support'

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
              <PageLayout thumnail={company}>
                <Company />
              </PageLayout>
            </Layout>
          }
        />
        <Route
          path='/business'
          element={
            <Layout>
              <PageLayout thumnail={business}>
                <Business />
              </PageLayout>
            </Layout>
          }
        />
        <Route
          path='/design'
          element={
            <Layout>
              <PageLayout thumnail={business}>
                <Design />
              </PageLayout>
            </Layout>
          }
        />
        <Route
          path='/support'
          element={
            <Layout>
              <PageLayout thumnail={business}>
                <Support />
              </PageLayout>
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}
