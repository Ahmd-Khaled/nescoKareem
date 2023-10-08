import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './style.module.css'
import img from '../../assets/Images/visapay.PNG'
const PaymentOrder = ({handleNext, handleBack}) => {
  return (
  
    <Box sx={{marginTop:'50px', width:'100%'}}>
<Grid container spacing={2}>

<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{margin:'0px 45px'}}>
      <Link style={{textDecoration:'none', color:'black', fontSize:'14px', fontWeight:'bold'}} onClick={handleBack}> <ArrowForwardIosIcon sx={{fontSize:'11px', marginTop:'9px'}}/> الرجوع إلي معلومات التوصيل</Link>

<Box sx={{marginTop:'40px',margin:'30px 6px',}}>
<Typography variant='h5' sx={{color:'#7FC5D6', fontWeight:'600',marginY:'10px'}}> اختيار بطاقة الدفع </Typography>

<form >
<Typography variant='h6' sx={{color:'#7FC5D6', fontWeight:'600', fontSize:'18px'}}> بطاقة الإئتمان</Typography>
<Box>
  <img src={img} alt="" srcset="" style={{width:'300px'}}/>
</Box>
<Typography variant='h6' sx={{color:'#7FC5D6', fontWeight:'600', fontSize:'18px'}}>  معلومات البطاقة</Typography>

<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={12} xl={12}>
  <input type="text" className={style.form_control} placeholder=' اسم صاحب البطاقة*' />
</Grid>

</Grid>



<Box>
<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={12} xl={12}>
<input type="text" className={style.form_control} placeholder='رقم البطاقة*'/>
</Grid>

</Grid>
</Box>



<Box>
<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={8} xl={8}>
<select class="form-control" name="expiry_month" className={style.select}>
														<option value="01">يناير</option>
														<option value="02">فبراير</option>
														<option value="03">مارس</option>
														<option value="04">أبريل</option>
														<option value="05">مايو</option>
														<option value="06">يونيو</option>
														<option value="07">يولية</option>
														<option value="08">أغسطس</option>
														<option value="09">سبتمبر</option>
														<option value="10">أكتوبر</option>
														<option value="11">نوفمبر</option>
														<option value="12">ديسمبر</option>
													</select></Grid>
<Grid item xs={12} md={12} lg={4} xl={4}>
<select class="form-control" name="expiry_year"  className={style.select2}>
																												<option value="23">2023</option><option value="24">2024</option><option value="25">2025</option><option value="26">2026</option><option value="27">2027</option><option value="28">2028</option><option value="29">2029</option><option value="30">2030</option><option value="31">2031</option><option value="32">2032</option><option value="33">2033</option>													</select></Grid>
</Grid>
</Box>





<Box>
<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={12} xl={12}>
<input type="text" className={style.form_control} placeholder=' الرقم السري للبطاقة الإئتمانية*'/>
</Grid>

</Grid>
</Box>



<div style={{display:"flex", marginTop:'30px'}}>
                          <input type="checkbox" id="mycheckbox" class="check_box" name="accept_conditions" className={style.checkbox}/>
                          <label id="mylabel" for="mycheckbox"></label>
                          <h4 style={{color:'#7FC5D6', fontSize:'18px', marginRight:'11px', marginTop:'9px'}}>لقد قرأت وقبلت <Link to="/termsConditions" data-toggle="modal" style={{color: 'inherit',textDecoration: 'underline'}}>الشروط والأحكام</Link></h4>
                      </div>



                      <button type='submit' style={{color:'#fff', marginTop:'30px'}} className={style.btn} onClick={handleNext}>إكمال عملية الشراء</button>
</form>

</Box>

  </Box>




</Grid>






<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{marginTop:'70px'}}>
  <Typography variant='h5' sx={{color:'#7FC5D6', fontWeight:'500',marginY:'10px'}}>   ملخص الطلب </Typography>
  </Box>
 <Box sx={{maxWidth:'500px', height:'670px', border:'1px solid #ced4da'}}>


<Box sx={{padding:'20px 20px', display:'flex'}}>
<Box sx={{marginTop:'40px'}}>
  <img src="https://barns.com.sa/public/assets/manage_store/images/product/1672565183.png" alt="" style={{width: '80px', height: '70px', }}/>
  </Box>
  <Box sx={{width:'200px', marginRight:'30px'}}>
    <Typography component='h2' sx={{    fontSize: '17px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'#7FC5D6', marginTop:'15px', marginLeft:'10px'}}>قهوة تركي (خلطة خاصة) مطحون مع الهيل 250 غرام</Typography>
    <Typography component='h4' sx={{    fontSize: '18px', fontWeight: 600, lineHeight: '27px', marginBottom: 0, color:'#6c757d', marginTop:'15px'}}>باكت</Typography>250G

  </Box>
  <Box sx={{width:'100px'}}>
<Typography component='h4' sx={{    fontSize: '18px', fontWeight: '800', lineHeight: '26px', marginBottom: 0, color:'#7FC5D6',marginTop:'40px' }}>19.00 ريال سعودى</Typography>
</Box>
</Box>

<Box sx={{width:'100%', height:'1px', backgroundColor:'black'}}></Box>


<Box sx={{height:'73%', backgroundColor:'#f1f1f1'}}>
  
  <Box sx={{padding:'20px 20px'}}>

<Box sx={{display:'flex',justifyContent:'space-between'}}>

<Box>
<Typography component='h5' sx={{color:'#7FC5D6', fontSize:'20px', fontWeight:'800'}} >عنوان التوصيل</Typography>
<Typography component='h5' sx={{color:'black', fontSize:'20px', fontWeight:'300'}} > جدة</Typography>
</Box>

<Box sx={{width:'1px', height:'70px', backgroundColor:'black'}}></Box>

<Box>
<Typography component='h5' sx={{color:'#7FC5D6', fontSize:'20px', fontWeight:'800'}} >ملاحظات </Typography>
<Typography component='h5' sx={{color:'black', fontSize:'14px', fontWeight:'300'}} > يتم ارجاع المنتيج ف الوقت المحدد</Typography>

</Box>

</Box>
<Box sx={{textAlign:'center', marginTop:'30px'}}>
<Typography component='h5' sx={{color:'#233746', fontSize:'20px', fontWeight:'500'}} > أيام / وقت التسليم المقدّر</Typography>
<Typography component='h5' sx={{color:'#233746', fontSize:'15px', fontWeight:'800'}} >  From 3 - 8 Days</Typography>

</Box>

  </Box>
  <Box sx={{width:'100%', height:'1px', backgroundColor:'black'}}></Box>
  <Typography component='h5' sx={{color:'#7FC5D6', fontSize:'20px', fontWeight:'500',margin:'15px 20px'}} >الدفع </Typography>




<Box sx={{backgroundColor:'#d8d8d8', width:'100%', height:'40px', display:'flex', justifyContent:'space-between', padding:'5px 10px'}}>
<Typography component='h5' sx={{color:'#233746', fontSize:'18px', fontWeight:'700'}} >المبلغ الإجمالي </Typography>
<Typography component='h5' sx={{color:'#7FC5D6', fontSize:'19px', fontWeight:'700'}} > 16.52 ريال سعودى </Typography>


</Box>

<Box sx={{backgroundColor:'#d8d8d8', width:'100%', height:'40px', display:'flex', justifyContent:'space-between', padding:'5px 10px', marginTop:'7px'}}>
<Typography component='h5' sx={{color:'#233746', fontSize:'18px', fontWeight:'700'}} > تكلفة الشحن</Typography>
<Typography component='h5' sx={{color:'#7FC5D6', fontSize:'19px', fontWeight:'700'}} >  23.00 ريال سعودى </Typography>
</Box>

<Box sx={{backgroundColor:'#d8d8d8', width:'100%', height:'40px', display:'flex', justifyContent:'space-between', padding:'5px 10px', marginTop:'7px'}}>
<Typography component='h5' sx={{color:'#233746', fontSize:'18px', fontWeight:'700'}} >  ضريبة القيمة المضافة 15%</Typography>
<Typography component='h5' sx={{color:'#7FC5D6', fontSize:'19px', fontWeight:'700'}} >   2.48 ريال سعودى </Typography>


</Box>

<Box sx={{backgroundColor:'#A2E5E3', width:'100%', height:'100px', display:'flex', justifyContent:'space-between', padding:'15px 10px', marginTop:'7px'}}>
<Typography component='h5' sx={{color:'#233746', fontSize:'18px', fontWeight:'700'}} >  ضريبة القيمة المضافة 15%</Typography>
<Typography component='h5' sx={{color:'#7FC5D6', fontSize:'23px', fontWeight:'700'}} >   2.48 ريال سعودى </Typography>


</Box>

</Box>





 </Box>
</Grid>


</Grid>
    </Box>
  )
}

export default PaymentOrder
