import { ThemeProvider } from './Context/ThemeContext'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <HomePage />
      </ThemeProvider>
    </>
  )
}

export default App
