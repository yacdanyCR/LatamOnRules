import React, { createContext, useState } from 'react'
import { ThemeProps } from '../Interface/Interface'

const ThemeContext = createContext<ThemeProps>({} as ThemeProps)

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>("light")

  const handleTheme = () => {
    alert("Hola")
  }

  return (
    <ThemeContext.Provider value={{ handleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeProvider,
  ThemeContext
}