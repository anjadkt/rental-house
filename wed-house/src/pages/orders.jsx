import Header from "../components/header"
import OrderItems from "../components/orderItem";
import { useState } from "react";
export default function Orders (){
  const [userObj,setUserObj] = useState(JSON.parse(localStorage.getItem('user')));
  return(
    <>
      <Header /> 
      {
        userObj.orders.map((v,i)=>(
          <OrderItems key={i} data={v} />
        ))
      }
    </>
  )
}