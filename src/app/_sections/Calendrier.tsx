"use client"
import React, { useState, useEffect, ReactNode } from 'react'
import SectionTitle from '../_components/sectionTitle'
import { FaCalendarDay } from "react-icons/fa";
import SubSectionTitle from '../_components/subSectionTitle';
import DateCard from '../_components/dateCard';
import { Appearing } from '../_components/appearing';
import FormationSect from '../_components/formationSection';




interface AutoScrollCarouselProps {
  children: ReactNode[];
}

interface Event {
  startDate: string;
  endDate: string;
  title: string;
  desc: string;
}

interface CalendarProps {
  events: Event[],
  formations : Event[]
}

const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 8000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <div className="w-full overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

const Calendrier = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <SectionTitle title={"Calendrier"} icon={<FaCalendarDay className='text-primary -rotate-45'/>}/>
      
      {/* <SubSectionTitle title={'Prochains événements'}/> */}
      
     
      <hr className='border-t mt-6 border-muted w-3/4' />
      <SubSectionTitle title={'Formations'}/>
      <FormationSect/>
      <hr className='border-t mt-6 border-muted w-3/4' />
    </div>
  )
}

export default Calendrier