import { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = ({ isUserLogged }) => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [message, setMessage] = useState('')

  const login = () => {

    axios.defaults.withCredentials = true

    axios.post('http://localhost:3000/api/auth/login' + `?email=${emailRef.current.value}&password=${passwordRef.current.value}`)
      .then(response => {
        console.log(response.data)
        window.location.href = '/'
      })
      .catch(error => {
        console.log(error.response)
        setMessage(error.response.data.message)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(`Form Data: { email: ${emailRef.current.value}, password: ${passwordRef.current.value} }`)
    login()
  }

  if (isUserLogged) return (
    <>
      <h3>Ya se ha iniciado sesión.</h3>
      <Link to={'/'}>Ir a HOME</Link>
    </>
  )

  return (
    <div>
      <h3>Inicie sesión</h3>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            ref={emailRef}
            name="email"
            required />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            ref={passwordRef}
            name="password"
            required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <h3>{message}</h3>
      <Link to={'/register'}>REGISTRARSE</Link>
    </div>
  );
}

export default Login