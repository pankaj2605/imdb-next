'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" >
        <div className='text-gray-800 dark:text-gray-100 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
    
  )
}
