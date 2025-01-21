"use client"
import React from 'react'
import SectionTitle from '../_components/sectionTitle'
import { FaRegNewspaper } from "react-icons/fa";
import ActualiteCard from '../_components/actualiteCard';
import { Appearing } from '../_components/appearing';

interface ActualiteProps {
  actualites: {
    title: string,
    date: string,
    img : string,
  }[]
}

const Actualites = () => {
  return (
    <div className='flex flex-col items-center mt-6 gap-4'>
      <SectionTitle title="Actualités" icon={<FaRegNewspaper className='text-primary rotate-45 mt-2' />} />
      <div className='flex gap-4 flex-wrap justify-center items-center'>
        
      </div>
    </div>
  )
}

export default Actualites
