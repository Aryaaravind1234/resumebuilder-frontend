import apiService from "../api/apiService";

//  api call for Add Resume
export const addResumeAPI = async (reqBody) => {
  return await apiService("POST", `/allResumes`, reqBody)
}

//  api call for Get Single Resume
export const getSingleResumeAPI = async (id) => {
  return await apiService("GET", `/allResumes/${id}`, {})
}

//api call for download resume
export const downloadResumeAPI = async (reqBody) => {
   return await apiService("POST", `/history`, reqBody)
}
//api call for edit Resume
export const editResumeAPI = async (id,reqBody) => {
  return await apiService("PUT", `/allResumes/${id}`,reqBody)
}
//api call for get download history
export const getHistoryAPI = async () => {
   return await apiService("GET", `/history`, {})
}

// api call for delete resume
//api call for delete downloaded resume
export const deleteHistoryAPI=async(id)=>{
    return await apiService("DELETE",`/history/${id}`,{})
}