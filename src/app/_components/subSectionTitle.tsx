"use client"

import React from 'react'
import { FaCircleNodes } from "react-icons/fa6";
import { Appearing } from './appearing';

const SubSectionTitle = ({title}:{title:string}) => {
  return (


    <h2 className='text-secondary text-center ' >
      <FaCircleNodes className='inline text-xl mr-2 text-secondary '  />
      {title}
   </h2>
 
  )
}

export default SubSectionTitle
