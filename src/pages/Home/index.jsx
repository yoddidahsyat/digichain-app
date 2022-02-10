import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  // sementara dinavigate ke admin
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/admin')
  })
  

  return (
    <div></div>
  )
}

export default Home