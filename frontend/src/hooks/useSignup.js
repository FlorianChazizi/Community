import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();

  const signup = async ( username, email, password ) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://community-api-gamma.vercel.app/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'REGISTER', payload: json})
      navigate('/login', { state: { message: 'Registration successful! Please login.' } });
      
      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}