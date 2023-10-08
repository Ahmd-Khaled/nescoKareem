import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CartEmpty from './CartEmpty'
import style from './Cart.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Cart = () => {


// const data=[
//   {title: 'قهوة اسبرسو فاهخرة',quantity: 4,total: 388,favorite: false, image: "https://nestrettocoffee.com/dashboard/images/rose-coffee-pot.jpeg"}, 
//   {title: 'قهوة اسبرسو فاهخرة',quantity: 4,total: 388,favorite: false, image: "https://nestrettocoffee.com/dashboard/images/rose-coffee-pot.jpeg"}, 
//   {title: 'قهوة اسبرسو فاهخرة',quantity: 4,total: 388,favorite: false, image: "https://nestrettocoffee.com/dashboard/images/rose-coffee-pot.jpeg"}, 

// ]

const[count,setCount]=useState(0)

const {t, i18n}=useTranslation()

  return (

<Box sx={{overflow:'hidden'}}>

<Box sx={{marginRight:i18n.dir() === "rtl" ?'210px':'', marginTop:'60px', marginLeft:i18n.dir() === "ltr" ? "210px":''}}>
<Typography component='h2' sx={{    color: '#233746', fontSize: '16px', fontWeight: 600, paddingTop: '50px', paddingBottom: '30px'}} > {t('cart-shopping')}</Typography>







<Box sx={{marginTop:'60px'}}> 

<Grid  container spacing={2} sx={{overflow:'hidden'}}>

<Grid item xl={1} xs={12} lg={1} md={1} className={style.paymentForm}  >
<input type="checkbox" checked="" name="selected_products[]" value="63890"/>
</Grid>



<Grid item xl={1} xs={12} lg={1} md={2}>

  <Box sx={{marginTop:{xl:'-20px', xs:'10px'}, marginLeft:{xl:'40px', xs:'0'}}}>
  <img src="https://barns.com.sa/public/assets/manage_store/images/product/1672565183.png" alt="" style={{maxWidth: '70%', height: '70px', }}/>
  </Box>
</Grid>

<Grid item xl={2} xs={12} lg={2} md={2}>
  <Box>
    <Typography component='h2' sx={{    fontSize: '18px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'black', marginTop:'-15px'}}>{t('cart-title')}</Typography>
    <Typography component='h4' sx={{    fontSize: '18px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'#6c757d', marginTop:'5px'}}>{t('cart-pkt')}</Typography>250G

  </Box>
</Grid>

<Grid item xl={1} xs={12} lg={2} md={2}>
<Box sx={{width:{lg:'100px',xl:'100px', md:'100px', xs:'150x' }}}>
<Typography component='h4' sx={{    fontSize: '26px', fontWeight: '800', lineHeight: '36px', marginBottom: 0, color:'#7FC5D6',marginTop:{xl:'-20px', xs:'20px', lg:'-15px'} }}>{t('cart-price')}</Typography>
</Box>
</Grid>

<Grid item xl={3} xs={12} lg={3} md={4}>
  <Box sx={{marginTop:'50', marginLeft:i18n.dir() === "rtl" ?'100px':'0px', display:'flex'}}>
  <Typography component='p' sx={{    fontSize: '18px', fontWeight: '400', marginTop:'30px', color:'black'}}>{t('cart-qty')}:</Typography>
  <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-around',width:'160px', height:'40px', backgroundColor:'#D8DED8',marginRight:'20px' , marginTop:'23px'}}>
<Box sx={{color:'black', fontSize:'30px', marginTop:'-10px', cursor:'pointer'}} onClick={()=>setCount(count+1)}>+</Box>
<Typography component='h5' sx={{color:'black'}}>{count}</Typography>
<Box onClick={()=>setCount(count+1)} sx={{color:'black', fontSize:'30px', marginTop:'-10px', cursor:'pointer'}}>-</Box>
  </Box>

  </Box>
</Grid>
<Grid item xl={1} xs={12} lg={2} md={2}>
<Box sx={{width:{lg:'100px',xl:'100px', md:'100px', xs:'150x' }}}>
<Typography component='h4' sx={{    fontSize: '26px', fontWeight: '800', lineHeight: '36px', marginBottom: 0, color:'#7FC5D6', marginTop:{xl:'-20px', xs:'20px', lg:'-15px'}, marginLeft:'0px'}}>{t('cart-price')}</Typography>

</Box>

</Grid>
<Grid item xl={1} xs={12} lg={1} md={1}>

<Box sx={{marginTop:{xl:'10px', xs:'40px', lg:'8px'}}}>
  <img src="https://barns.com.sa/public/assets/store/themes/ecomm/store/images/Delete_icon.png" alt="" style={{ marginTop:'10px', marginRight:'20px', cursor:'pointer'}}/>

</Box>
</Grid>




<Grid item xl={10} xs={10} lg={11.5} md={10}>
  <Box sx={{backgroundColor:'#6c757d', height:'2px',}}>

  </Box>
</Grid>



</Grid>



</Box>









<Box>
<Typography component='h2' sx={{    color: 'green', fontSize: '16px', fontWeight: 400, paddingTop: '50px', paddingBottom: '10px'}} >{t('cart-promotion')}</Typography>
<Box sx={{display:'flex'}}>
<input type="text" name="coupon" value=""  style={{padding:'20px', height:'20px', fontFamily:'inherit', border:'1px solid #7FC5D6', borderRadius:'5px', backgroundColor:'#EAE6E1'}} id="Promotion" placeholder={t('cart-promo')}/>

<button style={{    borderRadius: "5px",backgroundColor: "#4A4A4A",height:'40px',marginRight:'20px',
    border: 0,
    fontSize: "18px",
    fontWeight: 300 ,
    lineWeight: "27px",
    padding: "10px 45px", color:'#fff' }}>{t('cart-add-promotion')}</button>
</Box>

</Box>




<Box sx={{backgroundColor:'#cfd1d3', width:{xl:'1150px', xs:'350px', md:'800px',lg:'1065px' }, height:{xl:'190px', xs:'300px', md:'210px', lg:'160px'}, marginTop:'40px', borderRadius:'5px', padding:'20px 30px'}}>
<Box>
<Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Typography component='h4' sx={{    fontSize: '18px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'#6c757d', marginTop:'5px'}}>{t('cart-SubTotal')}</Typography>
<Typography component='h4' sx={{    fontSize: '20px', fontWeight: '600', lineHeight: '36px',  color:'#7FC5D6',marginTop:{xl:'5px', xs:'20px', lg:'-15px'} }}>{t('cart-subTotal-price')}</Typography>

</Box>
<Box sx={{backgroundColor:'#6c757d', height:'1px',}}></Box>
</Box>



<Box>
<Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Typography component='h4' sx={{    fontSize: '18px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'#6c757d', marginTop:'5px'}}> {t('cart-vat')}</Typography>
<Typography component='h4' sx={{    fontSize: '20px', fontWeight: '600', lineHeight: '36px',  color:'#7FC5D6',marginTop:{xl:'5px', xs:'20px', lg:'-15px'} }}> {t('cart-vat-price')}</Typography>

</Box>
<Box sx={{backgroundColor:'#6c757d', height:'1px',}}></Box>
</Box>



<Box>
<Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Typography component='h4' sx={{    fontSize: '18px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'#6c757d', marginTop:'5px'}}> 
{t('cart-total')}<br/>
<span style={{fontSize:'15px'}}>{t('cart-sub-total')}
</span>
</Typography>
<Typography component='h4' sx={{    fontSize: '22px', fontWeight: '600', lineHeight: '36px',  color:'#7FC5D6',marginTop:{xl:'5px', xs:'20px', lg:'-15px'} }}>{t('cart-total-price')}</Typography>



</Box>



</Box>



</Box>



<Grid container spacing={2}>

<Grid item xl={7} xs={12} lg={7} md={12}>
<Typography component='h4' sx={{    fontSize: '14px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'#6c757d', marginTop:'20px'}}> 
{t('cart-checkout')}
</Typography>
</Grid>


<Grid item xl={5} xs={12} lg={5} md={12}>
<Box sx={{marginTop:'10px', marginY:'30px', marginRight:{xl:'110px', lg:'120px'}}}>
<Link to="/checkout" style={{    borderRadius: "5px",backgroundColor: "#7FC5D6", width:'10px',
    border: 0,
    fontSize: "18px",
    fontWeight: 300 ,
    lineWeight: "27px",
    padding: "10px 45px", color:'#fff' }}> {t('cart-checkout-btn')}</Link>
</Box>
</Grid>


</Grid>



</Box>



{/* <CartEmpty/> */}


</Box>




    )
}

export default Cart