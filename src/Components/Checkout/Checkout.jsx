import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CompleteOrder from './CompleteOrder';
import PaymentOrder from './PaymentOrder'
import Summary from './Summary';
import axios from 'axios';
import { useEffect } from 'react';

const steps = ['استكمال الطلب', 'الدفع', 'ملخص'];


const Checkout = () => {







    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };





// const getData =async()=>{
//   const res =await axios.get('https://nestrettocoffee.com/dashboard/api/categories',{
//     headers:{
//       api_password:'123456',
//       language:'ar',
//       Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0`,
//       Accept:'application/json'
//     }
//   })

//   console.log('Data', res);
// }

// useEffect(() => {
// getData()
// }, [])



  return (
<Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
<Box sx={{ width: '70%', marginTop:'70px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps order completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset} sx={{textTransform:'capitalize'}}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
           {activeStep===0&& <CompleteOrder handleNext={handleNext} /> }
           {activeStep===1&& <PaymentOrder handleBack={handleBack}/>}
           {activeStep===2&& <Summary/>}


          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 , textTransform:'capitalize'}}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
         

            {/* <Button onClick={handleNext} sx={{textTransform:'capitalize'}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
</Box>


    )
}

export default Checkout