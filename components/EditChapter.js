import { Box } from '@mui/material';

export default function EditChapter(props) {
  const { url = ''} = props;
  return (
    <Box sx={{
      textAlign: 'right',
      marginTop: '20px',
      fontWeight: 700,
    }}>
      <a href={url}>【编辑文档】</a>
    </Box>
  )
}