import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Home from './Pages/Home'


function App() {

  return (
    <>
      <Header />
      <>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </>
      <Footer />
    </>
  )
}

export default App
