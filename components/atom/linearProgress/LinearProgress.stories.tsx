import { Box, LinearProgress } from '@material-ui/core'

export default {
  title: 'Progress'
}

export const Linear = () => <Box padding={3}><LinearProgress variant={'determinate'} value={50} /></Box>
