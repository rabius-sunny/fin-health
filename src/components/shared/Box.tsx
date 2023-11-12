import React from 'react'

interface IProps {
  className?: string
  children: React.ReactNode
}
export default function Box({ className, children }: IProps) {
  return (
    <div className='max-w-6xl px-4 md:px-8 xl:px-0 mx-auto'>{children}</div>
  )
}
