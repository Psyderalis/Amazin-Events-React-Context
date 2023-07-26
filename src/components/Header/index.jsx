import './styles/header.css'
import Nav from "./Nav"

import { useState } from 'react'
import axios from 'axios';


const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const logout = () => {
    axios.defaults.withCredentials = true
    axios.post('http://localhost:3000/api/auth/logout')
      .then(response => {
        console.log(response.data)
        window.location.href = '/login'
      })
      .catch(error => console.log(error.response))
  }

  return (
    <header>
      <div className='title-menu'>
        <h3>Amazing Events ✨</h3>
        <p onClick={toggleMenu} className='menu-btn'>Menú</p>
        <p onClick={logout} className='menu-btn'>Cerrar sesión</p>
      </div>

      <Nav showMenu={showMenu} />
    </header>
  )
}

export default Header