import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import imgBox from '../../assets/Images/Group_62.png'
import styles from './About.module.css'
import imgCoffe from '../../assets/Images/1614063643.png'
import cooffe from '../../assets/Images/1576652744.png'
import { useTranslation } from 'react-i18next'









const About = () => {

const {t, i18n}=useTranslation()
  return (
    <Box sx={{marginTop:'120px', overflow:'hidden'}}>
      <Box sx={{alignItems:'center', display:'flex', justifyContent:'center', overflow:'hidden'}}>
<Typography component='h1' sx={{color:'#7FC5D6', fontWeight:'800', fontSize:'33px'}}>{t('about-about-us')}
</Typography>
      </Box>


      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={4} lg={4}>
            <Box sx={{backgroundColor:'#EAE6E1', maxWidth:'552,91px', height:'170px', padding:'40px 21px', marginTop:'60px', position:'relative', display:'flex', justifyContent:'end'}}>
<Box sx={{marginTop:'15px'}}>
<Typography component='p' sx={{color:'#233746', fontSize:'18px', fontWeight:'600', fontStyle:'italic'}}>{t('about-history')}
</Typography>
<Box sx={{width:'211px', height:'70px'}}>
<Typography component='h2' sx={{color:'#7FC5D6', fontSize:'36px', fontWeight:'bold', fontStyle:'italic', lineHeight:'35px'}}>{t('about-love')}
</Typography>

  </Box> 
   </Box>  


   <Box sx={{width:'115px', height:'89px', position:'absolute', left:'220px', bottom:'0px', zIndex:'10000', rotate:'-250deg'}}>
    <img src={imgBox} alt="" srcset="" style={{width:'100px'}}/>
    </Box>      
      </Box>
          </Grid>


          <Grid item xs={12} md={12} xl={8} lg={8}>
            
<Box sx={{width:'552,91px', height:{xs:'190px'}, padding:'40px 21px', marginTop:'30px',}}>
<Box sx={{width:{xl:'650px', xs:'600px'}, height:{xl:"30px", xs:'90px'}}}>
<Typography component='p' sx={{color:'#233746', fontSize:'16px',  fontStyle:'italic'}}> {t('about-text-one')}</Typography>

<Typography component='p' sx={{color:'#233746', fontSize:i18n.dir() === "rtl" ?'16px':'15px',  fontStyle:'italic', paddingTop:i18n.dir() === "rtl" ?'30px':'20px'}}>{t('about-text-two')}



</Typography>

</Box>
</Box>


</Grid>



        </Grid>
      </Box>


<Box className={styles.homepage} sx={{width:{xl:'1580px', lg:'1280px', xs:'1180px'},height:{xs:'1060px', xl:'560px'},marginTop:'1px', overflow:'hidden'}}>
<Grid container spacing={2}>

<Grid item xs={12} md={12} xl={5} lg={5}>
  <Box sx={{marginTop:'120px', rotate:i18n.dir() === "rtl" ?'-180deg':'0deg', marginLeft:i18n.dir() === "rtl" ?{xl:'230px', lg:'130px', md:'750px', xs:'750px'}:{xl:'0px', lg:'0px', md:'0px', xs:'0px'}}}>
    <img src={imgCoffe} alt="" srcset="" style={{width:'430px'}} />
  </Box>
</Grid>




<Grid item xs={12} md={12} xl={7} lg={7}>
  <Box  sx={{marginTop:'50px', backgroundColor:'#233746', padding:'60px 44px', poistion:'absolute', width:'694.5px', height:'400px', marginLeft:i18n.dir() === "rtl" ?'-90px':'0px', overflow:'hidden'}}>
<Typography component='p' sx={{color:'#EAE6E1', fontStyle:'italic', fontSize:'18px', fontWeight:'600'}}>
{t('about-text-three')}</Typography>

<Typography component='p' sx={{color:'#7FC5D6', fontStyle:'italic', fontSize:'36px', fontWeight:'bold'}}>
{t('about-text-four')}
</Typography>




  <Typography component='p' sx={{color:'#EAE6E1', fontStyle:'italic', fontSize:'16px',  lineHeight:'30px', width:'555px', height:'261px'}}>
  {t('about-text-five')}
</Typography>


  
  <Typography component='p' sx={{color:'#EAE6E1',  fontSize:'20px',fontFamily:'Jewel Hill', marginTop:i18n.dir() === "rtl" ?'-80px':'-40px'}}>
  {t('about-text-six')}</Typography>

  
  
  </Box>
</Grid>



</Grid>






</Box>

{/* <Box sx={{position:'absolute', left:{xs:'-100px', lg:'-100px', xl:'-100px', md:'0'}, top:{xs:'1080px', xl:'360px', lg:'310px', md:'1010px'},  rotate:'-130deg', overflow:'hidden'}}>
  <img src={imgHand} alt="" srcset="" style={{overflow:'hidden'}}/>
</Box> */}


<Grid container spacing={2}>



<Grid item xs={12} md={12} xl={6} lg={6}>


<Box sx={{width:{lg:'580px', xl:'668px'}, height:{lg:'424px', xl:'320px'}, backgroundColor:'#EAE6E1', padding:'50px 30px', marginRight:i18n.dir() === "rtl" ?'100px':'-120px'}}>

<Typography component='h2' sx={{color:'#7FC5D6', fontSize:i18n.dir() === "rtl" ?'36px':'25px', fontWeight:'700', marginRight:'100px'}}>{t('about-text-8')}</Typography>

<Typography component='h2' sx={{color:'#4A4A4A', fontSize:i18n.dir() === "rtl" ?'19px':'18px',  marginRight:'100px', fontWeight:'600', marginTop:i18n.dir() === "ltr" ?'10px':''}}>
{t('about-text-9')}
</Typography>




<Typography component='h2' sx={{color:'#4A4A4A', fontSize:i18n.dir() === "rtl" ?'19px':'18px',  marginRight:'100px', marginTop:'10px', fontWeight:'600'}}>
{t('about-text-10')}</Typography>

</Box>


</Grid>

<Grid item xs={12} md={12} xl={6} lg={6}>


<Box sx={{width:{lg:'580px', xl:'890px'}, height:{lg:'424px', xl:'320px'}, backgroundColor:'#7FC5D6', padding:'50px 30px', marginRight:'-40px'}}>

<Typography component='h2' sx={{color:'#EAE6E1', fontSize:i18n.dir() === "rtl" ?'36px':'23px', fontWeight:'700', marginRight:'30px', }}>{t('about-text-11')}</Typography>

<Typography component='h2' sx={{color:'#EAE6E1', fontSize:i18n.dir() === "rtl" ?'19px':'18px',  marginRight:'30px', fontWeight:'600'}}>{t('about-text-12')}

</Typography>




<Typography component='h2' sx={{color:'#EAE6E1', fontSize:i18n.dir() === "rtl" ?'19px':'17px',  marginRight:'30px', marginTop:i18n.dir() === "rtl" ?'0px':'10px', fontWeight:'600'}}>
{t('about-text-13')}</Typography>

<Typography component='h2' sx={{color:'#EAE6E1', fontSize:i18n.dir() === "rtl" ?'19px':'17px',  marginRight:'30px', marginTop:i18n.dir() === "rtl" ?'0px':'15px', fontWeight:'600'}}>
{t('about-text-14')}</Typography>

</Box>
</Grid>

    
</Grid>


<Grid container spacing={2}>

<Grid item xs={12} md={12} xl={3} lg={3}>
  <Box sx={{marginRight:i18n.dir() === "rtl" ?'90px':'20px', marginTop:'80px'}}>
    <Typography component='p' sx={{color:'#233746', fontSize:'18px', fontStyle:'italic', fontWeight:'600'}}>
    {t('about-text-15')}    </Typography>

    <Typography component='h2' sx={{color:'#7FC5D6', fontSize:'36px', fontStyle:'italic', lineHeight:'40px', fontWeight:'bold'}}>
    {t('about-text-16')}   </Typography>
  </Box>
</Grid>


<Grid item xs={12} md={4} xl={3} lg={3}>
<Box sx={{marginRight:i18n.dir() === "rtl" ?'20px':'150px', marginTop:'100px', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Typography component='p' sx={{color:'#233746', fontSize:'24px',  fontWeight:'600', marginTop:i18n.dir() === "rtl" ?'0px':'0'}}>
    {t('about-text-17')}    </Typography>


  </Box>  
    <Typography component='h2' sx={{color:'#4A4A4A', fontSize:'20px', marginRight:{xs:'200px', xl:'110px', lg:'110px', md:'110px'} , maxWidth:i18n.dir() === "rtl" ?'60%':'110%', marginLeft:i18n.dir() === "ltr" ?{xs:'130px'}:''}}>
    {t('about-text-18')}

      </Typography>
</Grid>



<Grid item xs={12} md={4} xl={3} lg={3}>
<Box sx={{ marginTop:'100px', display:'flex', justifyContent:'center', alignItems:'center',marginLeft:i18n.dir() === "rtl" ?{xs:'0px', xl:'120px', lg:'120px', md:'120px'}:{xs:'0px', xl:'-120px', lg:'-120px', md:'-120px'}}}>
    <Typography component='p' sx={{color:'#233746', fontSize:'24px',  fontWeight:'600'}}>
    {t('about-text-19')}       </Typography>


  </Box>  
    <Typography component='h2' sx={{color:'#4A4A4A', fontSize:'20px',  marginTop:'5px', marginRight:{xs:'190px', xl:'40px', md:'40px', lg:'40px'} , maxWidth:i18n.dir() === "rtl" ?'60%':'80%', marginLeft:i18n.dir() === "ltr" ?{xs:'130px'}:''}}>
    {t('about-text-20')}


      </Typography>
</Grid>


<Grid item xs={12} md={4} xl={3} lg={3}>

<Box sx={{ marginTop:'100px', display:'flex', justifyContent:'center', alignItems:'center',marginLeft:i18n.dir() === "rtl" ?{xs:'0px', xl:'220px', md:'220px', lg:'220px'}:{xs:'0px', xl:'-180px', md:'-180px', lg:'-180px'}}}>
    <Typography component='p' sx={{color:'#233746', fontSize:'24px',  fontWeight:'600'}}>
    {t('about-text-21')}   </Typography>


  </Box>  
    <Typography component='h2' sx={{color:'#4A4A4A', fontSize:'20px',  marginTop:'5px' , marginRight:{xs:'190px', xl:'0',  lg:'0',  md:'0'}, maxWidth:i18n.dir() === "rtl" ?'60%':'90%', marginLeft:i18n.dir() === "ltr" ?{xs:'130px'}:''}}>
    {t('about-text-22')}



      </Typography>


</Grid>





</Grid>





<Box className={styles.Banner} sx={{maxWidth:{xl:'1680px', lg:'1280px', xs:'1180px'},height:{xs:'70px', xl:'100px'},marginTop:'40px', overflow:'hidden'}}>

<Typography component='p' sx={{color:'#7FC5D6', fontSize:'36px',  fontWeight:'bold', lineHeight:'41px',  display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
{t('about-text-23')}      </Typography>



</Box>



<Box className={styles.coffe} sx={{maxWidth:{xl:'1780px', lg:'1300px', xs:'1180px'},height:{xs:'1060px', xl:'660px'},marginTop:'1px', overflow:'hidden'}}>
<Box sx={{ textAlign:'center', maxWidth:'40%', marginX:'auto'}}>
  
<Typography component='p' sx={{color:'#7FC5D6', fontSize:'24px',  fontWeight:'bold', lineHeight:'41px', marginTop:'20px'}}>
{t('about-text-24')}  </Typography>



<Typography component='p' sx={{color:'#233746', fontSize:'28px',   lineHeight:'30px',  fontStyle:'italic', marginTop:'10px'}}>
{t('about-text-25')}  </Typography>



</Box>



<Box sx={{ textAlign:'center', marginTop:'60px', maxWidth:'40%', marginX:'auto'}}>
  
<Typography component='p' sx={{color:'#7FC5D6', fontSize:'24px',  fontWeight:'bold', lineHeight:'30px', marginTop:'20px'}}>
{t('about-text-26')}  </Typography>



<Typography component='p' sx={{color:'#233746', fontSize:'28px',  lineHeight:'43px',  fontStyle:'italic', marginTop:'10px'}}>
{t('about-text-27')}
  </Typography>



</Box>



<Box sx={{ textAlign:'center', marginTop:'60px', maxWidth:'40%', marginX:'auto'}}>
  
<Typography component='p' sx={{color:'#7FC5D6', fontSize:'24px',  fontWeight:'bold', lineHeight:'30px', marginTop:'20px'}}>
{t('about-text-29')}
  </Typography>



<Typography component='p' sx={{color:'#233746', fontSize:'28px',  lineHeight:'43px',  fontStyle:'italic', marginTop:'10px'}}>
{t('about-text-30')}

  </Typography>



</Box>

</Box>

<Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', paddingY:'40px',marginTop:'-50px'}}>
  <img src={cooffe} alt="" srcset="" />
</Box>




    </Box>
  )
}

export default About