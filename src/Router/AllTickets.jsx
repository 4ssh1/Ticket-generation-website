import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Card from '../Components/Card'


function AllTickets() {
  const navigate = useNavigate()
  const allTicket = JSON.parse(localStorage.getItem("allTicket"))

  const myButtons = [
    {
      title: "Back to Home",
      handle: ()=>navigate("/")
    }
  ]

  return (
    <div className='bg h-screen md:h-max'>
      <div>
        <Navbar />
      </div>
      <Card buttons={myButtons} number={3} cardIntro={"Tickets"}>
      {allTicket.length == 0 ?
        <h1 className='text-center text-2xl mt-8'>No ticket available</h1>
        :
        <div className='flex px-6 gap-6 flex-wrap'>
          {
            allTicket.map((tic) => (
              <div className=' flex justify-center mt-15'>
          <img src="TICKET.svg" alt="Generated ticket" className='ticketheight' />
          <div className='absolute m-3 activeborder max-w-36 text-xs rounded-md' id='ticketDownload'>
            <h2 className='roadFont font-bold text-lg  text-center'>Techember Fest ” 25</h2>
            <p>📍04 Rumen Road, Ikoyi, Lagos</p>
            <p>📆 March 15, 2025 | 7:00 PM</p>
            <img src={tic.image} alt="Validated image" className='h-16 block mx-auto rounded-sm mb-1' />
            <div className='small pt-1 leading-5 px-2'>
              <div>
                <div className='flex justify-between items-start'>
                  <div>
                    <p>Name: </p>
                    <p>Email: </p>
                  </div>
                  <div>
                    <p>{tic.name}</p>
                    <p>{tic.email}</p>
                  </div>
                </div>
              </div>
              <div className='flex  justify-between'>
                <div>
                  <p>Tier:</p>
                  <p>Ticket:</p>
                </div>
                <div>
                  <p>{tic.type}</p>
                  <p>{tic.price}</p>
                </div>
              </div>
            </div>
            <div className='absolute max-h-12 max-w-28 h-12 w-28 bottom-0 translate-y-16 translate-x-3.5' >
              <img src="barCode.jpg" alt="bar-Code" className='w-full h-full' />
            </div>
          </div>
        </div>
            ))
          }
        </div>
      }   
      </Card>     
    </div>
  )
}

export default AllTickets
