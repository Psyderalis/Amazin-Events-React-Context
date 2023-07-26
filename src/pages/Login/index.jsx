import { useRef } from 'react'
import axios from 'axios'

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const login = () => {

    axios.defaults.withCredentials = true

    axios.post('http://localhost:3000/api/auth/login' + `?email=${emailRef.current.value}&password=${passwordRef.current.value}`)
      .then(response => {
        console.log(response.data)
        window.location.href = '/'
        })
      .catch(error => console.log(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // console.log(`Form Data: { email: ${emailRef.current.value}, password: ${passwordRef.current.value} }`)

    login()
  }

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
    </div>
  );
}

export default Login