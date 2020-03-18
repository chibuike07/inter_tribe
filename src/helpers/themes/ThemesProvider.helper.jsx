import React from 'react'
import {MuiThemeProvider, CssBaseline} from "@material-ui/core"
import {theme} from './themes'

export const ThemeProvider =({children})=>(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </MuiThemeProvider>

);

