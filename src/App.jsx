import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import './App.css'
import Layout from './Layout'
import Company from './pages/Company/Company'
import Business from './pages/business/Business'
import PageLayout from './pages/PageLayout'
import company from './assets/company.webp'
import business from './assets/business.webp'
import design from './assets/design.webp'
import support from './assets/support.webp'
import Design from './pages/design/Design'
import Support from './pages/support/Support'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
              <PageLayout thumnail={design}>
                <Design />
              </PageLayout>
            </Layout>
          }
        />
        <Route
          path='/support'
          element={
            <Layout>
              <PageLayout thumnail={support}>
                <Support />
              </PageLayout>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
