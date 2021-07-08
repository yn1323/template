import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/constant/theme'
import * as nextImage from 'next/image'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const withThemeProvider = (Story, context) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Story {...context} />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}
export const decorators = [withThemeProvider]

// Next.jsのimgを上書き
nextImage
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />,
})
