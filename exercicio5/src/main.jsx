import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Estudante from './components/Estudante'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Estudante estudante = {true}/>
    <Estudante estudante = {false}/>
  </StrictMode>,
)
