import { Box, LinearProgress } from '@material-ui/core'

const Page = () => (
  <div>
    <Box padding={3}>
      <LinearProgress variant={'determinate'} value={50} />
    </Box>
  </div>
)
export default Page
