import axios from "axios";
import server from "../../server";
// load USer

export const loadUser = async (dispatch)=>{
     
   try{

    dispatch({type:"UserLoadStart"})

    
    const response =  await axios.get(`${server}/user/getuser`, {withCredentials:true})
     
    dispatch({type:"UserLoadSuccessfull",payload: response.data})

   }catch(error){
     
    dispatch({type:"UserLoadFail",payload:error.response.data.message})

    dispatch({type:"ClearError",payload:""});
}
    

        
}