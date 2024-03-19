import React from 'react'
import Routers from '../routes/Routers'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const layout = () => {
  return <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
  </>
}

export default layout