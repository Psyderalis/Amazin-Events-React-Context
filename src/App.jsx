import './App.css'

import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Stats from './pages/Stats'
import Details from './pages/Details'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import StateContext from './store/StateContext'

function App() {

  // const [data, setData] = useState(null)
  const [isUserLogged, setIsUserLogged] = useState(false)

  const { loadEvents, setCurrentDate } = useContext(StateContext)
  const navigate = useNavigate()

  const getEvents = () => {
    // axios.get('https://mindhub-xj03.onrender.com/api/amazing')

    axios.get('http://localhost:3000/api/events')
      .then(response => {
        // setData(true)
        setCurrentDate(response.data.currentDate)
        loadEvents(response.data.events)
      })
      .catch(error => {
        console.log(error.response)
        navigate('/login')
      })
  }

  const getLogged = () => {
    axios.get('http://localhost:3000/api/auth/logged')
      .then(() => setIsUserLogged(true))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.defaults.withCredentials = true

    getLogged()
    getEvents()
    
  }, [])

  // if (!data) {
  //   return (
  //     <main>
  //       <h1 className='loading'>Cargando...</h1>
  //     </main>
  //   )
  // }

  return (
    <>
      <Header isUserLogged={isUserLogged} />
      <Routes>
        <Route path='/' element={<Home typeOfEvents={'all'} />} />
        <Route path='/past' element={<Home typeOfEvents={'past'} />} />
        <Route path='/upcoming' element={<Home typeOfEvents={'upcoming'} />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login isUserLogged={isUserLogged} />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App 
