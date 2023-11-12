import React from 'react'

export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-6xl px-4 md:px-8 xl:px-0 mx-auto bg-pink-500 h-screen'>
      {children}
    </div>
  )
}
