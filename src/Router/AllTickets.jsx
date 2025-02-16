import React from 'react'
import {useEffect, useState} from 'react'

function AllTickets() {
    const [allTickets, setAllTickets] = useState([])

    useEffect(()=>{
        const availableTickets = JSON.parse(localStorage.getItem("TicketInfo")) || []
        setAllTickets(availableTickets)
    }, [])

  return (
    <div>
         <div className='absolute m-3 activeborder max-w-36 text-xs rounded-md' id='ticketDownload'>
              <h2 className='roadFont font-bold text-lg'>Techember Fest ” 25</h2>
              <p>📍04 Rumen Road, Ikoyi, Lagos</p>
              <p>📆 March 15, 2025 | 7:00 PM</p>
              <img src={validatedFormData.image} alt="Validated image" className='h-16 block mx-auto rounded-sm mb-1'/>
              <div className= 'small pt-1 leading-5 px-2'>
                <div>
                  <div className='flex justify-between items-start'>
                    <div>
                      <p>Name: </p>
                      <p>Email: </p>
                    </div>
                    <div>
                      <p>{validatedFormData.name}</p>
                      <p>{validatedFormData.email}</p>
                    </div>
                  </div>
                </div>
                <div className='flex  justify-between'>
                  <div>
                    <p>Tier:</p>
                    <p>Ticket:</p>
                  </div>
                  <div>
                    <p>{ticketType}</p>
                    <p>{ticketPrice}</p>
                  </div>
                </div>
              </div>
            <div className='absolute max-h-12 max-w-28 h-12 w-28 bottom-0 translate-y-16 translate-x-3.5' >
              <img src="barCode.jpg" alt="bar-Code" className='w-full h-full' />
            </div>
            </div>
    </div>
  )
}

export default AllTickets
