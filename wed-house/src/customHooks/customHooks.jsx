import { useReducer } from "react";
import axios from 'axios'

export function  useError (){
  const [error,setError] = useReducer(updateError,{})

  function updateError(error,action){
    const errorObj = {...error}
    switch(action.type){
      case "name":
        const value = action.value.trim();
        if(!value){
          errorObj.name = "Name is important!"
        }else{
          errorObj.name = ""
        }
        return errorObj;

      case "password":
        const length = action.value.length;
        if(length < 6){
          errorObj.password = "Password should be 6 charecter!"
        }else{
          errorObj.password = ""
        }
        return errorObj;

      case "email" :
        const email = action.value;
        if(!email.includes('@')){
          errorObj.email = "Enter a valid email!"
        }else{
          errorObj.email = ""
        }
        return errorObj ;

      default :
        return errorObj
    }
  }

  return [error,setError]
}


export function useFetch (url){
  
}