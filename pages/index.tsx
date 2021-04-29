import { Box, Typography, useTheme, LinearProgress } from "@material-ui/core";

const Home = () => {
  const theme = useTheme();
  return (
    <Box sx={{ m: 2 }}>
      <Typography>theme.palette.mode: {theme.palette.mode}</Typography>
      <br /> <br />
      <LinearProgress variant="determinate" value={50} />
    </Box>
  );
};

export default Home;
