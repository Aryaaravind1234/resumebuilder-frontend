import axiosInstance from "./axiosinstance";

const apiService= async(httpMethod,url,reqBody)=>{
  const reqConfiq={
        method:httpMethod,
        url,
        data:reqBody
  }
   try{
    const response=await axiosInstance(reqConfiq)
    return response
   }
   catch(err){
throw err
   }
  

}
export default apiService