import {ThemeProvider as MuiThemeProvider, createTheme, CssBaseline} from '@mui/material'
import React from "react";

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = createTheme();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
