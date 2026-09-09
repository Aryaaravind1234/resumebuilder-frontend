import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Stack } from '@mui/material'
import { IoDownload, IoPlayBackSharp } from 'react-icons/io5'
import { FaHistory } from 'react-icons/fa'
import Edit from '../Components/Edit'
import Preview from '../Components/Preview'
import { downloadResumeAPI, getSingleResumeAPI } from '../services/allAPI'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'




function ViewResume() {
  const [resumeData, setResumeData] = useState({})
  console.log(resumeData);


  const PreviewRef = useRef() //{current:}




  const { id } = useParams()




  // console.log(id);
  useEffect(() => {
    getResumeDetails()

  }, [])

  const downloadResume= async () => {

    const PreviewTag = PreviewRef.current
    const canvas = await html2canvas(PreviewTag)
    canvas.toDataURL('image/png')
    // convert image url to short url
    canvas.toBlob(async(blob) => {
         
        const formdata=new FormData()
        formdata.append("file",blob)
        formdata.append("upload_preset","my_preset")

    const res= await fetch("https://api.cloudinary.com/v1_1/nidbcvtc/image/upload", {
        method: "POST",
        body:formdata
   })
   
   const data= await res.json()
   const short_url=data.secure_url
   console.log(short_url);
   generatePDF(short_url)
   
   
    })

  }


  const getResumeDetails = async () => {
    if (id) {
      const response = await getSingleResumeAPI(id)
      // console.log(response);
      setResumeData(response.data)

    }
  }
  
const generatePDF=async(resumeImg)=>{
  const today=new Date()
  
  const timestamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
  console.log(timestamp);
  const pdf=new jspdf()
 const imgwidth=pdf.internal.pageSize.getWidth()
 const imgheight=pdf.internal.pageSize.getHeight()
  pdf.addImage(resumeImg,"PNG",0,0,imgwidth,imgheight)
  const downloadDetails={
    timestamp,resumeId:id,resumeImg,jobRole:resumeData.job
  }
  const response= await downloadResumeAPI(downloadDetails)
  console.log(response);
  if(response.status==201){
    pdf.save(`${resumeData.fullname}-resume.pdf`)
  }
  
 
  
  
}

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '70px' }}>
            {/* {downld} */}
                  <button onClick={downloadResume} className='btn fs-2 text-danger'>
  <IoDownload />
</button>

            {/* edit */}
            <Edit  resumeData ={resumeData}setResumeData={setResumeData} />
            {/* history */}
            <Link to={'/history'} className='btn fs-1 ms-2 text-warning'><FaHistory /></Link>

            {/* back */}
            <Link to={'/form'} className='btn fs-1 ms-3 text-success'><IoPlayBackSharp /></Link>


          </Stack>
          <div ref={PreviewRef}>
            <Preview resumeData={resumeData} />
          </div>
          <div className='col-lg-2'>

          </div>
        </div>


      </div>
    </div>
  )
}

export default ViewResume