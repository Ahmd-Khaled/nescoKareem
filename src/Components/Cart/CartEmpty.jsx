import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const CartEmpty = () => {

  const {t, i18n}=useTranslation()


  return (
   <Box sx={{textAlign:'center', marginTop:'10px' }}>

<Typography component='h2' sx={{    color: '#233746', fontSize: '22px', fontWeight: 600, paddingTop: '50px', paddingBottom: '30px'}} >{t('empty-cart-title')}</Typography>


<img src='https://barns.com.sa/public/assets/store/themes/ecomm/store/images/cart-icon.png' alt="" srcset="" />

<Box sx={{marginTop:'50px', marginBottom:'120px'}}>
<Link to="https://barns.com.sa/ar/store" style={{    borderRadius: "5px",backgroundColor: "#7FC5D6", width:'10px',
    border: 0,
    fontSize: "18px",
    fontWeight: 300 ,
    lineWeight: "27px",
    padding: "10px 45px", color:'#fff' }}>{t('empty-cart-btn')}</Link>
</Box>

   </Box>
  )
}

export default CartEmpty
