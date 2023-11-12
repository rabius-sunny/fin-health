import { lazy } from 'react'
import Layout from 'components/shared/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

const Home = lazy(() => import('pages/index'))
const Auth = lazy(() => import('pages/Auth'))

export default function Routings() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/login' element={<Auth />} />
          <Route
            index
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
