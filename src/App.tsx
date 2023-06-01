import { ThemeProvider } from './Context/ThemeContext'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './pages/HomePage'
import { PaginationProvider } from './Context/PaginationContext'

function App() {
  return (
    <>
      <PaginationProvider>
        <ThemeProvider>
          <NavBar />
          <HomePage />
        </ThemeProvider>
      </PaginationProvider>
    </>
  )
}

export default App
