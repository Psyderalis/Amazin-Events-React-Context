import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()
  const roleRef = useRef()

  const [message, setMessage] = useState('')

  const register = () => {
    axios.defaults.withCredentials = true

    axios.post('http://localhost:3000/api/users', {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      role: roleRef.current.value
    })
      .then(response => {
        console.log(response.data)
        setMessage(response.data.message)
      })
      .catch(error => {
        console.log(error.response)
        setMessage(error.response.data.message)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    register()
  }

  return (
    <div>
      <h3>Registre usuario</h3>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            ref={usernameRef}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            ref={passwordRef}
            required
          />
        </div>

        <div>
          <label htmlFor="role">Rol:</label>
          <input
            type="role"
            name="role"
            ref={roleRef}
            required
          />
        </div>
        <button type="submit">Registrar usuario</button>
      </form>
      <h3>{message}</h3>
      <Link to={'/login'}>INICIAR SESIÓN</Link>
    </div>
  )
}

export default Register