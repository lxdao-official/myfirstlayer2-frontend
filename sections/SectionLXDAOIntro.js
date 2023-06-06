
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Box, Card, Grid, Link, Typography, useTheme } from '@mui/material';
import SectionSimpleWrapper from './SectionSimpleWrapper';


export default function SectionLXDAOIntro() {
  return (
    <Box justifyContent="center" display={"flex"} my={'60px'}>
       <Box  px={2} sx={{maxWidth:{xs:'auto',md:'1339px'},display:'flex',width:'100%',flexDirection:{xs:'column',md:'row-reverse'},justifyContent:'center',color:'#000'}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'end',md:'start'},ml:{xs:0,md:"57px"}}} >
      <Typography maxWidth={{md:"650px"}} fontSize={{xs:"24px",sm:'52px'}} lineHeight={{xs:"36px",sm:'72px'}}  fontWeight={800}>LXDAO IS AN R&D- FOCUSED DAO IN WEB3</Typography>
        <Typography  fontSize={{xs:'10px',sm:'20px'}} lineHeight={{xs:"15px",sm:"30px"}}  color="#676767">Our mission is bringing together buidlers to buidl and maintain &quot;LX&quot; (Valuable) projects for Web3, in a sustainable manner.</Typography>
        <Link
              target="_blank"
              href={`https://lxdao.io/joinus`}
              color="#ffffff"
              sx={{
                textDecoration: "none",
                marginBottom: 0,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={{ xs: "124px", md: "187px" }}
                mx={{xs:2,md:0}}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                marginTop:'15px',
                color: "#ffffff",
                  borderRadius: "32px",
                  border: "none",
                  outline: "none",
                  padding: {xs:'8px 23px',md:"17px 28px"},
                  fontSize: {xs:"16px",md:'22px'},
                  lineHeight: "24px",
                  fontWeight: "700",
                  background:
                    "linear-gradient(90deg, #305FE8 0%, #3AD9E3 100%)",
                }}
              >
                <Typography>JOIN US</Typography>
              </Box>
        </Link>
      </Box>
      <Box mt={{xs:"39px",md:0}} width={{xs:"auto",sm:"auto"}} borderRadius='20px' component='img' src='/lxdao-intro.png'/>

    </Box>
    </Box>
   
  );
}
