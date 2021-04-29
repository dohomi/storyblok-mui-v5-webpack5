import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {},
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: 'black'
          }
        }

      }
    }
  }
})

export default theme
