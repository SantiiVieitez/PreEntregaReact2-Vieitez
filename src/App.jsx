import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  const enlaces = [
    "Inicio",
    "Contacto",
    "Menu"
  ]

  const greeting = "Bienvenido a Kanna Cocina"
  return (
    <>
      <Navbar links={enlaces}/>
      <ItemListContainer mensaje={greeting}/>
    </>
  )
}

export default App
