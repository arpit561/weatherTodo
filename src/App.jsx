// npm install @mui/material @emotion/react @emotion/styled , npm install @fontsource/roboto
// npm install @mui/icons-material

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import MaterialUi from './components1/MaterialUi'
import WeatherApp from './components1/WeatherApp'
import Todo from './components/Todo'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    {/* <MaterialUi/>      */}
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/weather' element={<WeatherApp/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
