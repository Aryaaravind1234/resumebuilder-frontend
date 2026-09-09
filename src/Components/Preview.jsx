import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Preview({resumeData}) {
  console.log(resumeData);
  
    return (
        <div>
            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                    <h2>{resumeData.fullname}</h2>
                    <h6>{resumeData.job}</h6>

                    <p><span>{resumeData.location}</span>||<span>{resumeData.email}</span>||<span>{resumeData.phone}</span></p>

                    <p><Link>{resumeData.github}</Link>|<Link>{resumeData.linkedin}</Link>|<Link>{resumeData.portfolio}</Link></p>

                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Summmary</Divider>

                    <p>{resumeData.summary}</p>

                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>EDUCATION</Divider>
                    <h6>{resumeData.education}</h6>
                    <p><span>{resumeData.degree}</span>||<span>{resumeData.university}</span>||<span>{resumeData.passoutYear}</span></p>

                    {/* <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Proffesional Experience</Divider>
                    <h6>{resumeData.job}</h6>
                    <p><span>{resumeData.company}</span>||<span>{resumeData.location}</span>||<span>{resumeData.duration}</span></p> */}


                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Skills</Divider>
                    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: '10px' }}>
                        {
                       resumeData?.skills?.map((skill, index) => (
    <Button key={index} variant="contained">
        {skill}
    </Button>
                       ))
                    }

                    </Stack>

                </Paper>
            </Box>
        </div>
    )
}

export default Preview