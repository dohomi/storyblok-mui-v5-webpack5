import { Box, LinearProgress, ThemeProvider } from '@material-ui/core'
import theme from '../../theme/theme'
import theme2 from '../../theme/theme2'

export default {
  title: 'Progress'
}

export const LinearNotWorking = () =>
  (
    <ThemeProvider theme={theme}>
      <Box padding={3}><LinearProgress variant={'determinate'} value={50} /></Box>
    </ThemeProvider>
  )
export const LinearWorking = () =>
  (
    <ThemeProvider theme={theme2}>
      <Box padding={3}><LinearProgress variant={'determinate'} value={50} /></Box>
    </ThemeProvider>
  )
