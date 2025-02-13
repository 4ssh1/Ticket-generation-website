import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  

  return (
    <div className='w-full  sm:px-14 py-2 '>
      <div className='flex justify-between items-center border-teal-800 border-2 rounded-xl px-3'>
        <div>
          <img src="logo.png" alt="ticketLogo" className='inline-block w-10 h-10 bg-slate-800 rounded-xl p-1.5 m-1' />
           <span className='logoText'>ticz</span>
        </div>
        <div className='hide4small space-x-10 geo'>
          <span><a href="#">Events</a></span>
          <span><a href="#">My Tickets </a></span>
          <span><Link to={'/aboutpage'}>About Project</Link></span>
        </div>
        <div>
          <button className='bg-white black rounded-sm text-sm p-2 geo'>MY TICKETS</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
