import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Login from '../../Pages/Login/LoginPage'
import style from './style.module.css'
import 'react-phone-input-2/lib/style.css'




const CompleteOrder = ({handleNext}) => {





  return (

    <Box sx={{marginTop:'50px', width:'100%'}}>
<Grid container spacing={2}>

<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{margin:'0px 45px'}}>
      <Link style={{textDecoration:'none', color:'black', fontSize:'14px', fontWeight:'bold'}} to='/cart'> <ArrowForwardIosIcon sx={{fontSize:'11px', marginTop:'9px'}}/> الرجوع إلى عربة التسوق</Link>

<Box sx={{marginTop:'40px',margin:'20px 6px',}}>
<Typography variant='h5' sx={{color:'#7FC5D6', fontWeight:'600'}}>استكمال الطلب </Typography>

<form >
<Typography variant='h6' sx={{color:'#7FC5D6', fontWeight:'600', fontSize:'18px'}}> العنوان</Typography>

<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={6} xl={6}>
  <input type="text" className={style.form_control} placeholder='الاسم الأول*' />
</Grid>
<Grid item xs={12} md={12} lg={6} xl={6}>
<input type="text" className={style.form_control} placeholder='اللقب*'/>
</Grid>
</Grid>



<Box>
<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={6} xl={6}>
<input type="text" className={style.form_control} placeholder='اللقب*'/>
</Grid>
<Grid item xs={12} md={12} lg={6} xl={6}>
<input type="text" className={style.form_control} placeholder='الايميل*'/>
</Grid>
</Grid>
</Box>


<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={12} xl={12}>
<Typography variant='h6' sx={{color:'#7FC5D6', fontWeight:'600', fontSize:'18px', marginTop:'11px'}}> معلومات التوصيل</Typography>
<textarea class="form-control" name="default_address" id="exampleFormControlTextarea1" rows="3" placeholder="عنوان التوصيل*" className={style.text}></textarea>
</Grid>
</Grid>


<Box sx={{marginY:'20px'}}>
  
<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={12} xl={12}>
<select name="state_id" class="form-control clear-style" className={style.text}>
                                 <option value="">حدد المدينة</option>
                                                                  <option value="4192">ابها</option>
                                                                  <option value="4181">ابو عريش</option>
                                                                  <option value="4182">احد المسارحه</option>
                                                                  <option value="4193">احد رفيده</option>
                                                                  <option value="4224">الأحساء</option>
                                                                  <option value="4221">الأفلاج</option>
                                                                  <option value="3159">الارطاويه</option>
                                                                  <option value="3146">الباحه</option>
                                                                  <option value="4141">البدائع</option>
                                                                  <option value="4175">البدع</option>
                                                                  <option value="4237">البرك</option>
                                                                  <option value="9472">البشائر</option>
                                                                  <option value="4142" selected="">البكيريه</option>
                                                                  <option value="4155">الثقبه</option>
                                                                  <option value="4156">الجبيل</option>
                                                                  <option value="4157">الجشه</option>
                                                                  <option value="4202">الجموم</option>
                                                                  <option value="3151">الجوف</option>
                                                                  <option value="3160">الحريق</option>
                                                                  <option value="4147">الحناكيه</option>
                                                                  <option value="4245">الحوية</option>
                                                                  <option value="4203">الحويه</option>
                                                                  <option value="4158">الخبر</option>
                                                                  <option value="3161">الخرج</option>
                                                                  <option value="4204">الخرمه</option>
                                                                  <option value="4159">الخفجي</option>
                                                                  <option value="4250">الخفجي</option>
                                                                  <option value="4251">الخماسين</option>
                                                                  <option value="4183">الدرب</option>
                                                                  <option value="3162">الدرعية</option>
                                                                  <option value="3163">الدلم</option>
                                                                  <option value="4223">الدلمية</option>
                                                                  <option value="4160">الدمام</option>
                                                                  <option value="4121">الدوادمى</option>
                                                                  <option value="4143">الرس</option>
                                                                  <option value="4122">الرياض</option>
                                                                  <option value="4123">الزلفى</option>
                                                                  <option value="4124">السليل</option>
                                                                  <option value="4229">السياه</option>
                                                                  <option value="4228">الشقيق</option>
                                                                  <option value="4205">الطائف</option>
                                                                  <option value="4230">الطوليه</option>
                                                                  <option value="4184">الظبيه</option>
                                                                  <option value="4161">الظهران</option>
                                                                  <option value="4292">العضيلية</option>
                                                                  <option value="3147">العقيق</option>
                                                                  <option value="4148">العلا</option>
                                                                  <option value="4162">العواميه</option>
                                                                  <option value="4295">العيون </option>
                                                                  <option value="4125">الغاط</option>
                                                                  <option value="4264">القحمة</option>
                                                                  <option value="3152">القريات</option>
                                                                  <option value="4267">القصيم</option>
                                                                  <option value="4163">القطيف</option>
                                                                  <option value="4206">القنفذه</option>
                                                                  <option value="4126">القويعيه</option>
                                                                  <option value="4164">القيصومه</option>
                                                                  <option value="9471">الليث</option>
                                                                  <option value="4207">الليث</option>
                                                                  <option value="4165">المبرز</option>
                                                                  <option value="4194">المجارده</option>
                                                                  <option value="4127">المجمعه</option>
                                                                  <option value="3148">المخواه</option>
                                                                  <option value="4225">المدى</option>
                                                                  <option value="4149">المدينة المنورة</option>
                                                                  <option value="4144">المذنب</option>
                                                                  <option value="4128">المزاحمية</option>
                                                                  <option value="4256">المزاحمية</option>
                                                                  <option value="4185">المضايا</option>
                                                                  <option value="4208">المظيلف</option>
                                                                  <option value="4257">النابية</option>
                                                                  <option value="9468">النعيرية</option>
                                                                  <option value="4195">النماص</option>
                                                                  <option value="4260">النوارية</option>
                                                                  <option value="4259">النويرية</option>
                                                                  <option value="4209">الهدا</option>
                                                                  <option value="4166">الهفوف</option>
                                                                  <option value="4176">الوجه</option>
                                                                  <option value="4293">ام الجماجم</option>
                                                                  <option value="4177">املج</option>
                                                                  <option value="4235">بارق</option>
                                                                  <option value="4236">باطحه</option>
                                                                  <option value="4154">باطحه</option>
                                                                  <option value="4233">بالحمر</option>
                                                                  <option value="4232">بحرت المجود</option>
                                                                  <option value="4210">بحره</option>
                                                                  <option value="4150">بدر</option>
                                                                  <option value="4145">بريده</option>
                                                                  <option value="4167">بقيق</option>
                                                                  <option value="3149">بلجرشي</option>
                                                                  <option value="4234">بللسمر</option>
                                                                  <option value="4186">بيش</option>
                                                                  <option value="4196">بيشه</option>
                                                                  <option value="4168">تاروت</option>
                                                                  <option value="4290">تبراك</option>
                                                                  <option value="4178">تبوك</option>
                                                                  <option value="4197">تثليش</option>
                                                                  <option value="4211">تربه</option>
                                                                  <option value="4129">تمير</option>
                                                                  <option value="4288">تنجيب</option>
                                                                  <option value="4287">تندا</option>
                                                                  <option value="4198">تنومة</option>
                                                                  <option value="4289">تيمة</option>
                                                                  <option value="4130">ثادق</option>
                                                                  <option value="4212">ثول</option>
                                                                  <option value="4281">جبيل المدينة الصناعية الثانية</option>
                                                                  <option value="4213">جدة</option>
                                                                  <option value="4246">جرانية</option>
                                                                  <option value="4247">جفر</option>
                                                                  <option value="4169">جليجله</option>
                                                                  <option value="4187">جيزان</option>
                                                                  <option value="4241">حائل</option>
                                                                  <option value="4242">حالة عمار</option>
                                                                  <option value="4240">حديثة</option>
                                                                  <option value="4244">حراجة</option>
                                                                  <option value="4243">حرض</option>
                                                                  <option value="4131">حريملاء</option>
                                                                  <option value="9474">حفار</option>
                                                                  <option value="4170">حفر البطن</option>
                                                                  <option value="4179">حقل</option>
                                                                  <option value="4132">حوطه بنى تميم</option>
                                                                  <option value="4133">حوطه سدير</option>
                                                                  <option value="4249">خربوس</option>
                                                                  <option value="4253">خضارية</option>
                                                                  <option value="4214">خليص</option>
                                                                  <option value="4199">خميس مشيط</option>
                                                                  <option value="4151">خيبر</option>
                                                                  <option value="4238">دراب</option>
                                                                  <option value="4239">دومة الجندل</option>
                                                                  <option value="4300">ذهبان</option>
                                                                  <option value="4215">رابغ</option>
                                                                  <option value="4268">راحيمه</option>
                                                                  <option value="4269">راس الخير</option>
                                                                  <option value="4270">راس تنور</option>
                                                                  <option value="4271">رجال</option>
                                                                  <option value="3155">رفحة</option>
                                                                  <option value="4134">رماح</option>
                                                                  <option value="4216">رنيه</option>
                                                                  <option value="4273">روضة السدير</option>
                                                                  <option value="4274">رويضة</option>
                                                                  <option value="4272">رياض الخبرا</option>
                                                                  <option value="4135">ساجر</option>
                                                                  <option value="3156">سارات عبيدة</option>
                                                                  <option value="4275">سبت العين</option>
                                                                  <option value="4277">سحنة</option>
                                                                  <option value="4280">سرار</option>
                                                                  <option value="3153">سكاكا</option>
                                                                  <option value="4279">سلوى</option>
                                                                  <option value="4171">سيهات</option>
                                                                  <option value="4284">شرائع</option>
                                                                  <option value="4219">شروره</option>
                                                                  <option value="4283">شعيبة</option>
                                                                  <option value="4136">شقراء</option>
                                                                  <option value="4285">شميسي</option>
                                                                  <option value="4282">شيفاء</option>
                                                                  <option value="4188">صامطه</option>
                                                                  <option value="4286">صبحيكا</option>
                                                                  <option value="4189">صبيا</option>
                                                                  <option value="4276">صفانيا</option>
                                                                  <option value="4172">صفوى</option>
                                                                  <option value="4278">صلبوخ</option>
                                                                  <option value="4180">ضباء</option>
                                                                  <option value="4137">ضرما</option>
                                                                  <option value="9469">ضلم</option>
                                                                  <option value="4190">ضمد</option>
                                                                  <option value="3154">طبرجل</option>
                                                                  <option value="4291">طريب</option>
                                                                  <option value="9473">طريب</option>
                                                                  <option value="3157">طريف</option>
                                                                  <option value="4200">ظهران الجنوب</option>
                                                                  <option value="4262">عثمانية</option>
                                                                  <option value="3158">عرعر</option>
                                                                  <option value="4227">عسفان</option>
                                                                  <option value="4138">عفيف</option>
                                                                  <option value="4294">عقلت الصغر</option>
                                                                  <option value="4226">عماق</option>
                                                                  <option value="4173">عنك</option>
                                                                  <option value="4146">عنيزه</option>
                                                                  <option value="4261">عوجان</option>
                                                                  <option value="4222">عين دار</option>
                                                                  <option value="4231">عين فحيد</option>
                                                                  <option value="4263">عيينة</option>
                                                                  <option value="4191">فرسان</option>
                                                                  <option value="4265">قاراه</option>
                                                                  <option value="4174">قريه العليا</option>
                                                                  <option value="4252">قسوية</option>
                                                                  <option value="4266">قصب</option>
                                                                  <option value="3150">قلوه</option>
                                                                  <option value="4248">كارع</option>
                                                                  <option value="4201">محائل</option>
                                                                  <option value="4254">مدينهب</option>
                                                                  <option value="4139">مرات</option>
                                                                  <option value="9466">مزدلفة</option>
                                                                  <option value="4217">مستوره</option>
                                                                  <option value="4218">مكة المكرمة</option>
                                                                  <option value="4255">مليجة</option>
                                                                  <option value="4152">مهد الذهب</option>
                                                                  <option value="4220">نجران</option>
                                                                  <option value="4258">نمرا</option>
                                                                  <option value="9467">نمره</option>
                                                                  <option value="9470">هالى</option>
                                                                  <option value="4140">وادى الدواسر</option>
                                                                  <option value="4297">وادي بن حسبل</option>
                                                                  <option value="4298">وادي فاطمة</option>
                                                                  <option value="4296">وادينين</option>
                                                                  <option value="4299">ينبع</option>
                                                                  <option value="4153">ينبع البحر</option>
</select>
</Grid>
</Grid>
</Box>



<Grid container spacing={0}>
<Grid item xs={12} md={12} lg={12} xl={12}>
<textarea class="form-control" name="default_address" id="exampleFormControlTextarea1" rows="3" placeholder=" ملاحظة*" className={style.text}></textarea>
</Grid>
</Grid>

<div style={{display:"flex", marginTop:'10px'}}>
                          <input type="checkbox" id="mycheckbox" class="check_box" name="accept_conditions" className={style.checkbox}/>
                          <label id="mylabel" for="mycheckbox"></label>
                          <h4 style={{color:'#7FC5D6', fontSize:'18px', marginRight:'11px', marginTop:'9px'}}>لقد قرأت وقبلت <Link to="/termsConditions" data-toggle="modal" style={{color: 'inherit',textDecoration: 'underline'}}>الشروط والأحكام</Link></h4>
                      </div>



                      <button type='submit' style={{color:'#fff', marginTop:'20px'}} className={style.btn} onClick={handleNext}>إكمال عملية الشراء</button>
</form>

</Box>

  </Box>




</Grid>






<Grid item xs={12} md={12} lg={6} xl={6}>
  <Box sx={{width:'250%'}}>
  <Login/>
  </Box>
</Grid>


</Grid>
    </Box>

  )
}

export default CompleteOrder
