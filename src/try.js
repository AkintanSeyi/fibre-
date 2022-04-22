import React, {useEffect, useState} from "react";
import {BiWinkSmile} from 'react-icons/bi'


const Word2 = ({runn}) => {
     
    useEffect(() => {
      const res =   setTimeout(() => {
        console.log('gfdsdfghjk');
          runn()
        } , 3500)
        return () => clearTimeout(res)
        
    } , [])
  
    return <div className="sixth-body__head">
           <h3 className="sixth-body__header">  <BiWinkSmile className="sixth-body__header-icon" /> successfully registered</h3>
    </div>
  
  
  }
  
export default Word2  