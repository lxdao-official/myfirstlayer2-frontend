import { Box, Typography, CircularProgress, LinearProgress, Button } from '@mui/material';

export default function TabChapter(props) {

  const onPrevious = () => {

  };

  const onNext = () => {

  };


  return (
    <Box display="flex" justifyContent="space-between" paddingX={10} {...props}>
      <Button variant="contained" color="secondary">上一章</Button>
      <Button variant="contained" color="secondary">下一章</Button>
    </Box>
  )
}
