import {
  Link,
  Card,
  Box,
  Typography,
  Grid,
  CardContent,
  CardActions,
} from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const directoryText = [
  [{ text: '前言（Before Layer2）', main: true }, { text: '区块链的不可能三角',  main: false }],
  [{ text: 'Layer2演进历程',  main: true }, { text: '状态通道侧链' }, { text: 'Plasma', main: false}, { text: 'Rollup', main: false}],
  [{ text: 'Rollup机制与原理',  main: true }, { text: 'Rollup扩容核心原理之一：压缩', main: false }, { text: 'Optimistic Rollup', main: false}, { text: 'ZK-Rollup', main: false}],
  [{ text: 'Layer2未来展望',  main: true }, { text: 'Validium', main: false }, { text: 'Volition', main: false}],
];

export default function Directory() {

  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <Box>mdx content</Box>
      </Box>

            
      <Box>
          <ConnectButton />
          <Box
            sx={{ 
              width: 247,
              // backgroundColor: 'primary.dark',
              border: '1px dashed grey' }}
            marginTop={2}
          >
          <Box>
            <Box>
              {
                directoryText?.map((row, index) => (
                  <Item data={[...row]} key={index}/>
                ))
              }
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

const Item = (props) => {
  const { data } = props;
  return (
    <Box>
      {
        data?.map((item, index) => (
          <Box
            key={index}
            display="flex"
            paddingLeft={!item?.main ? 4 : 0}
          >
            <Box>
              <img src='./team/muxin.png' width={12} height={12}/>
            </Box>
            <Box>
                <Typography variant={item?.main ? 'h6' : 'subtitle1'}>{item?.text}</Typography>
            </Box>
          </Box>
        ))
      }

    </Box>
  )
}