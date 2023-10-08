import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Terms = () => {

  const {t, i18n}=useTranslation()


 
  return (
<Box sx={{marginTop:'70px', overflow:'hidden'}}>

<Box sx={{alignItems:'center', display:'flex', justifyContent:'center', overflow:'hidden'}}>
<Typography component='h1' sx={{color:'#7FC5D6', fontWeight:'bold', fontSize:'40px'}}>{t('terms-text-1')} 
</Typography>
      </Box>

<Box sx={{maxWidth:'80%', marginRight: i18n.dir()==='rtl'?'130px':'0', marginTop:'80px', marginLeft: i18n.dir()==='ltr'? '130px':''}}>

<Box>
<Typography component='h1' sx={{color:'black', fontWeight:'bold', fontSize:'26px'}}>{t('terms-text-2')}
</Typography> 

{/* #7C7C7C */}
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'20px'}}>
{t('terms-text-3')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'18px', marginY:'10px'}}>
{t('terms-text-5')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'30px'}}>
{t('terms-text-6')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'15px'}}>
{t('terms-text-7')}</Typography> 



</Box>

<Box sx={{marginTop:"50px"}}>
<Typography component='h1' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>{t('terms-text-8')}</Typography> 



<Box sx={{marginRight:'10px', marginTop:'15px'}}>

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}> {t('terms-text-9')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>  {t('terms-text-10')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}> {t('terms-text-11')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>  {t('terms-text-12')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-13')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-14')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-15')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-16')} </Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-17')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-18')}</Typography>
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}> {t('terms-text-19')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-20')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-21')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-22')}ن</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-23')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px'}}>{t('terms-text-24')}</Typography> 



</Box>








</Box>




<Box sx={{marginTop:"50px"}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>{t('terms-text-25')}</Typography> 
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'20px', marginY:'20px'}}>
{t('terms-text-26')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>
{t('terms-text-27')}</Typography> 



<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'20px', marginY:'20px'}}>
{t('terms-text-28')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>
{t('terms-text-29')}</Typography> 


<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'20px', marginY:'20px'}}>
{t('terms-text-30')}
</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>
{t('terms-text-31')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>
{t('terms-text-32')}</Typography> 




<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'20px', marginY:'20px'}}>
{t('terms-text-33')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>
{t('terms-text-34')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>
{t('terms-text-35')}
</Typography> 




</Box>




<Box sx={{marginTop:'30px'}}>

<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>{t('terms-text-36')}</Typography> 


<Box sx={{marginRight:'20px'}}>
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'5px'}}>
{t('terms-text-37')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'15px'}}>
{t('terms-text-38')}</Typography> 
</Box>


<Box>
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}> {t('terms-text-39')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>{t('terms-text-40')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>ا{t('terms-text-41')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>{t('terms-text-42')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>{t('terms-text-43')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>{t('terms-text-44')}:</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>{t('terms-text-45')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>{t('terms-text-46')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'13px', marginY:'1px'}}>{t('terms-text-47')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'17px', marginY:'18px', marginRight:'20px'}}>{t('terms-text-48')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'1px'}}>{t('terms-text-49')}</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>{t('terms-text-50')}
</Typography> 
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'15px', marginY:'10px'}}>{t('terms-text-51')}
</Typography> 


</Box>




</Box>


<Box sx={{marginTop:'10px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  {t('terms-text-52')}</Typography> 



<Box sx={{marginRight:'10px'}}>
  
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-53')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'15px'}}>
{t('terms-text-54')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'15px'}}>
{t('terms-text-55')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'15px'}}>
{t('terms-text-56')}
</Typography> 
</Box>


</Box>





<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-57')}</Typography> 



<Box sx={{marginRight:'10px'}}>
  
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-58')}
</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'25px'}}>
{t('terms-text-59')}</Typography> 

</Box>


</Box>




<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-60')}</Typography> 



<Box sx={{marginRight:'10px'}}>
  
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-61')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'50px'}}>
{t('terms-text-62')}</Typography> 




<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'50px'}}>
{t('terms-text-63')}</Typography> 





<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'50px'}}>
{t('terms-text-64')}</Typography> 




<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'50px'}}>
{t('terms-text-65')}</Typography> 




<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'50px'}}>
{t('terms-text-66')}</Typography> 




</Box>


</Box>




<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-67')}</Typography> 



<Box sx={{marginRight:'10px'}}>
  
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'19px', marginY:'5px'}}>
{t('terms-text-68')}

</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-69')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'15x'}}>
{t('terms-text-70')}</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'15px'}}>
{t('terms-text-71')}</Typography> 




</Box>


</Box>



<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-72')}</Typography> 



  
<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-73')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'19px', marginTop:'40px'}}>
{t('terms-text-74')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-75')}</Typography> 




<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'19px', marginTop:'40px'}}>
{t('terms-text-76')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-77')}</Typography> 




<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'19px', marginTop:'40px'}}>
{t('terms-text-78')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-79')}</Typography> 





<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'19px', marginTop:'40px'}}>
{t('terms-text-80')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-81')}</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'19px', marginTop:'40px'}}>
{t('terms-text-82')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-83')}</Typography> 




</Box>


<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-84')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-85')}</Typography> 

</Box>




<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-86')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-87')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'25px'}}>
{t('terms-text-88')}</Typography> 

</Box>



<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-89')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-90')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'25px'}}>
{t('terms-text-91')}</Typography> 

</Box>



<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-92')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-93')}</Typography> 

</Box>



<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-94')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-95')}</Typography> 

</Box>






<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-96')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-97')}
</Typography> 

</Box>






<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-98')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-99')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginTop:'40px'}}>
{t('terms-text-100')}</Typography> 

</Box>







<Box sx={{marginTop:'40px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-101')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-102')}</Typography> 

</Box>




<Box sx={{marginTop:'20px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-103')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'5px'}}>
{t('terms-text-104')}</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-105')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-106')}</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-107')}</Typography> 




<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-108')}</Typography> 





<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'10px'}}>
{t('terms-text-109')}</Typography> 



</Box>






<Box sx={{marginTop:'20px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-110')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-111')}
</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-112')}
</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-113')}</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-114')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-115')}</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-116')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-117')}
</Typography> 




<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-118')}
</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-119')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-120')}

</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-121')}
</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-122')}
</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-123')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-124')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-125')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-126')}

</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-127')}
</Typography> 









</Box>



<Box sx={{marginTop:'20px'}}>
<Typography component='p' sx={{color:'black', fontWeight:'bold', fontSize:'29px'}}>  
{t('terms-text-128')}</Typography> 


<Typography comonent='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-129')}</Typography> 



<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'35px'}}>
{t('terms-text-130')}
</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-131')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-132')}</Typography> 


<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-133')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>
{t('terms-text-134')}</Typography> 

<Typography component='p' sx={{color:'#7C7C7C', fontWeight:'bold', fontSize:'16px', marginY:'9px'}}>{t('terms-text-34')}</Typography> 



</Box>


</Box>



</Box>


    )
}

export default Terms