import { useState } from 'react'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Router from './routes/router'

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
