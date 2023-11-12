import React from 'react'
import { Link } from 'react-router-dom'
import { navmenu } from 'static/site'

export default function Sidebar() {
  return (
    <div className='h-screen absolute w-full bg-indigo-600 text-white'>
      <div className='my-8'>
        <h1 className='font-bold text-3xl text-center'>Fin Health</h1>
      </div>
      {navmenu.map((item, idx) => (
        <Link
          to={item.link}
          className='block hover:bg-indigo-300 hover:border-l-4 duration-75 hover:border-indigo-500 my-4 py-3 px-4 font-semibold'
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
