
import { useContext } from 'react';
import { Box, Typography, CircularProgress, LinearProgress, Button } from '@mui/material';
import { ReadContext } from './context.js';

export default function TabChapter(props) {
	const contextData = useContext(ReadContext);
	const { readData, setReadData } = contextData;
	const { counter, unRead, currentIndex, actionFrom } = readData;
	console.log('contextData', contextData)

  const onPrevious = () => {

  };

  const onNext = () => {
		setReadData({counter, unRead: unRead + 1, currentIndex: currentIndex + 1, actionFrom: 'nextButton' })
  };


  return (
    <Box display="flex" justifyContent="space-between" paddingX={10} {...props}>
      <Button variant="contained" color="secondary">上一章</Button>
      <Button variant="contained" color="secondary" onClick={() => onNext()}>下一章</Button>
    </Box>
  )
}