import React, { useState,useEffect } from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getHistoryAPI, deleteHistoryAPI } from '../Services/allAPI';



function History() {
const [downloads,setDownloads]= useState([])
useEffect(()=>{
  getDownloads()
},[])

const getDownloads=async()=>{
  const response=await getHistoryAPI()
  // console.log(response);
  setDownloads(response.data)
  
}
const removeHistory=async(id)=>{
  const res=await deleteHistoryAPI(id)
console.log(res);
getDownloads()

}
  return (
<div>
      
      <h1 className='text-center text-danger' style={{marginTop:'100px'}}>Downloaded Resumes</h1>
    <Link to={'/'} style={{marginTop:'-40px',marginRight:'20px'}} className='float-end'>Back</Link>
    <Box component="section" className="container-fluid">
      <div className='row'>
     {
      downloads?.length>0 ?
downloads?.map(dwnld=>(

        <div className='col-md-4'>
          <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
            <div className='d-flex align-items-center justify-content-between'>
              <h5>Review at:{dwnld.timestamp}</h5>
              <button onClick={()=>removeHistory(dwnld.id)} className='btn text-danger fs-2'><MdDelete />
</button>
            </div>
            {/* preview */}
            <div>
             <Link to={`resume/${dwnld.resumeId}/view`}>
              <img src={dwnld.resumeImg} className='w-100' style={{height:'300px'}}alt="" />
              </Link>
            </div>

          </Paper>
        </div>
))
      :
      <p className='text-center text-danger fw-bold my-5'>No resume downloaded yet</p>
     }

      </div>
    </Box>
</div>
  )
}

export default History