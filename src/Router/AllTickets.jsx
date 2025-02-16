import React from 'react'
import {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

function AllTickets() {
    const [allTickets, setAllTickets] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const availableTickets = JSON.parse(localStorage.getItem("TicketInfo")) || []
        setAllTickets(availableTickets)
    }, [])

  return (
    <div className='bg h-screen md:min-h-[110vh]'>
         <div>
            <Navbar />
         </div>
         <div className='m-5'>
            <button className='border-2 border-teal-500 rounded-lg p-3 hover:opacity-20' onClick={()=>navigate('/')}>Back to Home</button>
         </div>
         <div className=' flex justify-center'>
         <img src="TICKET.svg" alt="Generated ticket" className='ticketheight' />
         <div className='absolute m-3 activeborder max-w-36 text-xs rounded-md' id='ticketDownload'>
              <h2 className='roadFont font-bold text-lg'>Techember Fest ” 25</h2>
              <p>📍04 Rumen Road, Ikoyi, Lagos</p>
              <p>📆 March 15, 2025 | 7:00 PM</p>
              <img  alt="Validated image" className='h-16 block mx-auto rounded-sm mb-1'/>
              <div className= 'small pt-1 leading-5 px-2'>
                <div>
                  <div className='flex justify-between items-start'>
                    <div>
                      <p>Name: </p>
                      <p>Email: </p>
                    </div>
                    <div>
                      <p>{}</p>
                      <p>{}</p>
                    </div>
                  </div>
                </div>
                <div className='flex  justify-between'>
                  <div>
                    <p>Tier:</p>
                    <p>Ticket:</p>
                  </div>
                  <div>
                    <p>{}</p>
                    <p>{}</p>
                  </div>
                </div>
              </div>
            <div className='absolute max-h-12 max-w-28 h-12 w-28 bottom-0 translate-y-16 translate-x-3.5' >
              <img src="barCode.jpg" alt="bar-Code" className='w-full h-full' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default AllTickets
