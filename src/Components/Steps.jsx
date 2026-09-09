import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobType from '../assets/jobRole.json';
import jobSkills from '../assets/jobSkills.json';
import summaries from '../assets/summaries.json';
import { addResumeAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Review & Submit'];

function Steps({ setResumeData, resumeData }) {
    
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate=useNavigate()
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const generateAI = () => {
        setResumeData(() => ({
            ...resumeData,
            skills: jobSkills[resumeData.job],
            summary: summaries[resumeData.job]
        }))
        handleNext();
    }

    const addResume = async () => {

        const { fullname, job, location, email, phone, github, linkedin, degree, university, passoutYear, skills, summary } = resumeData
        if (fullname && job && location && email && phone && github && linkedin && degree && university && passoutYear && skills.length > 0 && summary) {
          //api call 
          const response = await addResumeAPI(resumeData)
           console.log(response);
           if(response.status==201){
            alert("resume generated successfully")
            let resumeId=response.data.id
            navigate(`/resume/${resumeId}/view`)
           }
        }
        else {
            alert("Please fill all the fields before submitting the resume")
        }
    }



        const previousActiveStepRef = React.useRef(activeStep);
        const resetButtonRef = React.useRef(null);
        const nextButtonRef = React.useRef(null);

        // render the content corresponding to array index

        const renderStepArrayContent = (stepCount) => {
            switch (stepCount) {
                case 0: return (
                    <div className='mt-3'>
                        <h3>Personal Details</h3>
                        <div className='mt-3'>
                            <div>
                                <TextField value={resumeData.fullname} onChange={(e) => setResumeData({ ...resumeData, fullname: e.target.value })} id="standard-name" label="Full Name" variant="standard" className='w-100' />
                            </div>
                            <div>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='w-100'>
                                    <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                    <Select onChange={(e) => setResumeData({ ...resumeData, job: e.target.value })} value={resumeData.job}
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"

                                    >
                                        {
                                            jobType.jobRoles.map(role => (
                                                <MenuItem key={role} value={role}>{role}</MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <TextField value={resumeData.location} onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })} id="standard-loc" label="Location" variant="standard" className='w-100' />
                            </div>
                        </div>
                    </div>
                )

                case 1: return (
                    <div className='mt-3'>
                        <h3>Contact Details</h3>
                        <div className='mt-3'>
                            <div>
                                <TextField value={resumeData.email} onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} id="standard-email" label="Email" variant="standard" className='w-100' />
                            </div>
                            <div>
                                <TextField value={resumeData.phone} onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-phone" label="Phone" variant="standard" className='w-100' />
                            </div>
                            <div>
                                <TextField value={resumeData.github} onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })} id="standard-github" label="Github Link" variant="standard" className='w-100' />
                            </div>
                            <div>
                                <TextField value={resumeData.linkedin} onChange={(e) => setResumeData({ ...resumeData, linkedin: e.target.value })} id="standard-linkedin" label="Linkedin Link" variant="standard" className='w-100' />
                            </div>
                        </div>
                    </div>
                )

                case 2: return (
                    <div className='mt-3'>
                        <h3>Education Details</h3>
                        <div className='mt-3'>
                            <div>
                                <TextField value={resumeData.degree} onChange={(e) => setResumeData({ ...resumeData, degree: e.target.value })} id="standard-course" label="Bachelor's Degree" variant="standard" className='w-100' />
                            </div>
                            <div>
                                <TextField value={resumeData.university} onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })} id="standard-clg" label="College/University" variant="standard" className='w-100' />
                            </div>
                            <div>
                                <TextField value={resumeData.passoutYear} onChange={(e) => setResumeData({ ...resumeData, passoutYear: e.target.value })} id="standard-year" label="Passout Year" variant="standard" className='w-100' />
                            </div>
                        </div>
                    </div>
                )

                case 3: return (
                    <div className='mt-3'>
                        <h3>Skills</h3>
                        <p>Our Ai will generate skills & Summary according to your job role.lick the <b>AI SKILL & SUMMARY</b> button to proceed</p>

                    </div>
                )
                default: null

            }
        }

        return (
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={addResume} ref={resetButtonRef}>
                                Finish
                            </Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {/* view of each step */}
                        <Box>
                            {renderStepArrayContent(activeStep)}
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {
                                activeStep == steps.length - 1 ?
                                    <Button onClick={generateAI}>Generate Skill & summary</Button>
                                    :
                                    <Button onClick={handleNext}>Next</Button>
                            }


                        </Box>
                    </React.Fragment>
                )}
            </Box>
        );
    }

export default Steps