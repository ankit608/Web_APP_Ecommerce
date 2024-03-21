import { createReducer } from "@reduxjs/toolkit";
import { startTransition } from "react";




export const UserReducer = (state,action)=> {
 console.log(action.type,action.payload);

 switch(action.type){
    
    case "UserLoadStart": 
    return{
      Authenticated:false
    }

    case "UserLoadSuccessfull":
      return {
      Authenticated: true,
      user: action.payload
    }

    case "UserLoadFail": 
    return{
      Authenticated: false,
      user:action.payload
    }
 
    case "ClearError": 
    return{
        Authenticated: false,
        user: null,
    }

  }
 
 }
  



/*


*/