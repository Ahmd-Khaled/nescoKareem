import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './SiteMap.module.css'
import { useTranslation } from 'react-i18next'

const SiteMap = () => {


    const {t, i18n}=useTranslation()


  return (
<>
<Box sx={{alignItems:'center', display:'flex', justifyContent:'center', overflow:'hidden', marginTop:'80px',}}>
<Typography component='h1' sx={{color:'#7FC5D6', fontWeight:'bold', fontSize:'45px'}}>{t('sitemap')}
</Typography>
      </Box>


<Box sx={{width:'100%',alignItems:'center', display:'flex', justifyContent:'center'}}>
<Grid container spacing={2} sx={{width:'70%',alignItems:'center', display:'flex', justifyContent:'center', marginY:'60px'}}>

<Grid item xl={4} xs={12}>
    <Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px',marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'', color:'#233746'}} to='/' className={style.hoverClick}>{t('sitemap-home')}</Link>
    </Box>

    <Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px',marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'', color:'#233746'}} to='/about' className={style.hoverClick}>{t('sitemap-about')}</Link>
    </Box>



    <Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px',marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'', color:'#233746'}} to='/' className={style.hoverClick}>{t('sitemap-menu')}</Link>
    </Box>


    <Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px', marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'',color:'#233746'}} to='/' className={style.hoverClick}>{t('sitemap-family')}</Link>
    </Box>


    
</Grid>

<Grid item xl={4} xs={12} sx={{marginLeft:'10px'}}>
<Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px', marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'',color:'#233746'}} to='/contact-us'>{t('sitemap-contact')}</Link>
    </Box>

    <Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px', marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'', color:'#233746'}} to='/about'> {t('sitemap-store')}</Link>
    </Box>



    <Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px', marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'', color:'#233746'}} to='/faqs'>{t('sitemap-fqa')}</Link>
    </Box>


    <Box sx={{display:'flex'}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px', marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'', color:'#233746'}} to='/termsConditions'>{t('sitemap-terms')}</Link>
    </Box>
</Grid>


<Grid item xl={3} xs={12}>
<Box sx={{display:'flex', marginTop:{xl:'-50px', xs:'10px'}}}>
        <Box sx={{width:'6px', height:'6px', backgroundColor:'#233746', borderRadius:'50%', marginTop:'10px'}}></Box>
        <Link style={{textDecoration:'none', fontSize:'16px',marginLeft: i18n.dir()==="ltr"?'11px':'',marginRight: i18n.dir()==="rtl"?'11px':'',color:'#233746'}} to='/register'> {t('sitemap-register')}</Link>
    </Box>
</Grid>



</Grid>
</Box>




</>
  )
}

export default SiteMap