import { useState } from 'react'
import './App.css'

import Layout from './layouts/layout'
import Home from './pages/Home/index';
import CallToAction from './components/CallToAction';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <CallToAction />
        <Home />
      </Layout>
    </>
  )
}

export default App
