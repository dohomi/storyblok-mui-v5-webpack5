import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {},
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        bar: {
          backgroundColor: 'black'
        }
      }
    }
  }
})

export default theme
