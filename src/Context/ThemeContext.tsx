import React, { createContext, useState } from 'react'
import { SetThemeProps, ThemeProps } from '../Interface/Interface'

const ThemeContext = createContext<ThemeProps>({} as ThemeProps)

enum Screenthemes {
  light = "lightTheme",
  dark = "darkTheme"
}
interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<SetThemeProps>({ checked: false, themeSelected: Screenthemes.light })


  const handleTheme = () => {
    const boolChecked = theme.checked
    const newTheme = theme.themeSelected === Screenthemes.light ? Screenthemes.dark : Screenthemes.light
    setTheme({ ...theme, themeSelected: newTheme, checked: !boolChecked })
  }

  return (
    <ThemeContext.Provider value={{ handleTheme, setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeProvider,
  ThemeContext,
  Screenthemes
}