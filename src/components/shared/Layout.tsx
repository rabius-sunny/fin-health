import Navbar from 'components/navigation'
import Sidebar from 'components/navigation/Sidebar'

import Box from './Box'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`md:grid grid-cols-10`}>
      <div className='col-span-2 relative'>
        <Navbar />
        <Sidebar />
      </div>
      <Box className='col-span-8'>{children}</Box>
    </div>
  )
}
