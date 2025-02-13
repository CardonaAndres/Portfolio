import React from 'react'

export const DividerTop = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg className="relative block w-full h-20 rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,80C150,20,350,100,600,80S1050,20,1200,60V0H0Z" className="fill-white dark:fill-blue-700 transition-all duration-700 ease-in-out" />
        <path d="M0,100C180,60,400,120,600,100S1020,40,1200,80V0H0Z" className="fill-blue-500 dark:fill-blue-900 opacity-75 transition-all duration-700 ease-in-out" />
      </svg>
    </div>
  )
}
