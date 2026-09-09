import React from 'react'
import { RiFileEditFill } from "react-icons/ri";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import jobType from '../assets/jobRole.json';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useRef } from 'react';
import { editResumeAPI } from '../Services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Edit({ resumeData, setResumeData }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeSkill = (skill) => {
    setResumeData({ ...resumeData, skills: resumeData?.skills?.filter((item) => item !== skill) });
  }
  const skillRef = useRef()
  const addSkill = (skill) => {
    if (skill) {
      if (resumeData?.skills?.map(item => item.toLowerCase()).includes(skill.toLowerCase())) {
        alert("Skill already added..")
      }
      else {
        setResumeData({ ...resumeData, skills: [...resumeData?.skills, skill] });
        alert("Skill added successfully..")
      }
      skillRef.current.value = ""
    }
    else {
      alert("Please enter a skill to add!!")
    }
  }
  const editResume = async () => {

    const { fullname, job, location, email, phone, github, linkedin, degree, university, passoutYear, skills, summary } = resumeData
    if (fullname && job && location && email && phone && github && linkedin && degree && university && passoutYear && skills.length > 0 && summary) {
      const responce = await editResumeAPI(resumeData?.id, resumeData);
      console.log(responce)
      if (responce.status == 200) {
        alert("Resume updated successfully")
        handleClose()
         }
    }

    else {
      alert("Fill the fields completely")
    }
  }
  return (
    <>
      <button onClick={handleOpen} className='btn fs-1 text-primary'><RiFileEditFill /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='mt-3'> <div className='mt-3'>
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
            </div></div>
            <div className='mt-3'><div className='mt-3'>
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
            </div></div>
            <div className='mt-3'> <div className='mt-3'>
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
            </div></div>

            <div className='mt-3'><div className='mt-3'>
              <h3>Skills</h3>
              <div className='mt-3'>
                <input ref={skillRef} sx={{ width: '400px' }} id="standard-skill" label="Add Skills" variant="outlined" />
                <Button variant="contained" className='ms-3' onClick={() => addSkill(skillRef.current.value)}>ADD</Button>
              </div>
            </div>
              <h5>Added Skills:</h5>
              <div className='d-flex my-3 flex-wrap justify-content-between'>
                {
                  resumeData?.skills?.map((skill) => (
                    <span key={skill} className='btn btn-dark m-1 d-flex align-items-center'>{skill}
                      <button className='btn btn-text-light' onClick={() => removeSkill(skill)}>
                        ×
                      </button>
                    </span>
                  ))
                }

              </div>

            </div>
            <div className='mt-3'><div className='mt-3'>
              <h3>Professional Summary</h3>

              <div className='mt-3'>
                <div>
                  <TextField value={resumeData?.summary} onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })} id="standard-summary" placeholder="Write a short summary of yourself" variant="standard" className='w-100' multiline rows={4}
                  /> </div>

              </div>
            </div></div>
            <button className='btn btn-dark mt-3' onClick={editResume}>Update</button>

          </Typography>

        </Box>
      </Modal>
    </>
  )
}

export default Edit