import { useState } from 'react'
import Box from 'components/shared/Box'
import { motion, useCycle } from 'framer-motion'

import SideNavbar from './SideNavbar'
import NavToggler from './Toggle'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [blur, setBlur] = useState(false)

  return (
    <header>
      <Box>
        <div className='flex items-center justify-between' aria-label='Global'>
          <div className='z-[1000] md:hidden'>
            <motion.nav
              className=' absolute top-0 left-0 bottom-0 w-[300px]'
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
            >
              <motion.div
                className=' absolute top-0 left-0 bottom-0 w-[300px] bg-rose-500'
                variants={sidebar}
              />
              <SideNavbar />
              <NavToggler
                toggle={() => {
                  toggleOpen()
                  setTimeout(
                    () => {
                      setBlur(!blur)
                    },
                    isOpen ? 600 : 300
                  )
                }}
              />
            </motion.nav>
          </div>
          {blur && (
            <div
              className='fixed inset-0 z-50 bg-black/20 backdrop-blur-sm'
              aria-hidden='true'
            />
          )}
        </div>
      </Box>
    </header>
  )
}
