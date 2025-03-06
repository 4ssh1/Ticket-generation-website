import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

function DownloadTicketPage() {
  const navigate = useNavigate()
  const [ticket, setTicket] = useState({})

  useEffect(()=>{
    const alltickets = JSON.parse(localStorage.getItem("allTicket"));
    const index = [alltickets.length  - 1];
    setTicket(alltickets[index])
  }, [])


  function handleOption1() {
     navigate("/")
  }
  function handleOption2() {
    return null
  }

  const myButtons = [
    {
      title: "Book Another Ticket",
      handle: handleOption1
    },
    {
      title: "Download Ticket",
      handle: handleOption2
    },
  ]

  return (
    <div className='bg h-screen md:min-h-[120vh]'>
      <div>
        <Navbar />
      </div>
      <div className='pt-11'>
        <Card number={3} cardIntro={"Ready"} buttons={myButtons}>
          <h2 className='py-2'>Your Ticket is Booked</h2>
          <p>Check your email for a copy or You can <strong>download</strong>.</p>
          <div className=' flex justify-center mt-5 '>
            <img src="TICKET.svg" alt="Generated ticket" className='ticketheight' />
            <div className='absolute m-3 activeborder max-w-36 text-xs rounded-md' id='ticketDownload'>
              <h2 className='roadFont font-bold text-lg'>Techember Fest ” 25</h2>
              <p>📍04 Rumen Road, Ikoyi, Lagos</p>
              <p>📆 March 15, 2025 | 7:00 PM</p>
              <img src={ticket?.image} alt="Validated image" className='h-16 block mx-auto rounded-sm mb-1'/>
              <div className= 'small pt-1 leading-5 px-2'>
                <div>
                  <div className='flex justify-between items-start'>
                    <div>
                      <p>Name: </p>
                      <p>Email: </p>
                    </div>
                    <div>
                      <p>{ticket?.name}</p>
                      <p>{ticket?.email}</p>
                    </div>
                  </div>
                </div>
                <div className='flex  justify-between'>
                  <div>
                    <p>Tier:</p>
                    <p>Ticket:</p>
                  </div>
                  <div>
                    <p>{ticket?.type}</p>
                    <p>{ticket?.price}</p>
                  </div>
                </div>
              </div>
            <div className='absolute max-h-12 max-w-28 h-12 w-28 bottom-0 translate-y-16 translate-x-3.5' >
              <img src="barCode.jpg" alt="bar-Code" className='w-full h-full' />
            </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DownloadTicketPage
