import './App.css'

import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Stats from './pages/Stats'
import Details from './pages/Details'
import Contact from './pages/Contact'
import StateContext from './store/StateContext'

function App() {

  const [data, setData] = useState(null)

  const { loadEvents, setCurrentDate } = useContext(StateContext)

  useEffect(() => {
    axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then(response => {
        setData(true)
        setCurrentDate(response.data.currentDate)
        loadEvents(response.data.events)
      })
      .catch(error => console.log(error))
  }, [])

  if (!data) {
    return (
      <main>
        <h1 className='loading'>Cargando...</h1>
      </main>
    )
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home typeOfEvents = {'all'} />} />
        <Route path='/past' element={<Home typeOfEvents={'past'} />} />
        <Route path='/upcoming' element={<Home typeOfEvents={'upcoming'} />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App 
