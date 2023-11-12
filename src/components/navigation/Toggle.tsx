'use client'

import { motion } from 'framer-motion'

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='white'
    strokeLinecap='round'
    {...props}
  />
)

export default function NavToggler({ toggle }: { toggle: any }) {
  return (
    <button
      className=' outline-none border-none fixed top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center'
      onClick={toggle}
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 15 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          transition={{ duration: 0.5 }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 25 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </button>
  )
}
