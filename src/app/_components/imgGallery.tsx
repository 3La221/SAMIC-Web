'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Organisation {
  id: number;
  title: string;
  desc: string;
  img: string;
}

interface ImageGalleryProps {
  initalOrganisations  : Organisation[];

}

export default function ImgGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)


  
  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        
      </div>
      
       
    </div>
  )
}