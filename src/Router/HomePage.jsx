import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const ticketTitle = [
       { type: "REGULAR ACCESS",
         price: "Free"
       },
       { type: "VIP ACCESS",
         price: "$50"
       },
       { type: "VVIP ACCESS",
         price: "$150"
       }
    ];
    const values = 1

    const navigate = useNavigate()
    
    
    function TicketType() {
        const [ticketRemaining, setTicketRemaining ] = useState(20)

        return (
            <div className='px-2 flex justify-center'>
              <div className='flex sm:justify-between flex-wrap border-2 w-full
               border-teal-950 rounded-2xl sm:py-2 backdrop-brightness-75     ' >
                 {ticketTitle.map(title=>{
                      return (
                          <div key={title.type} className='flex mx-2 border-2 border-teal-950 ticketSelection rounded-2xl w-full
                           sm:w-40 my-2 sm:justify-between'>
                              <div className='px-1.5 flex flex-col items-start text-xs sm:text-sm '>
                                  <p>{title.price}</p>
                                  <p>{title.type}</p>
                                  <p>{ticketRemaining} left</p>
                              </div>
                          </div>
                      )
                 })}
              </div>
            </div>
        )
    }

    function handleOption1() {
        return null
    }

    function handleOption2() {
        return navigate("/ticket")
    }

  return (
    <div className='bg h-screen roboto'>
      <div>
        <Navbar />
      </div>
      <div className='w-full'>
        <Card number={1} cardIntro={"Ticket Selection"} option1={"Cancel"} option2={"Next"} 
        handleOption1={handleOption1} handleOption2={handleOption2}>
            <div>
              <div className='bg border-2 rounded-2xl border-teal-900 m-1 sm:m-3 py-1'>
                  <h2 className='roadFont sm:text-6xl sm:leading-13 tracking-wide'>Techember Fest ” 25</h2>
                  <p>Join us for an unforgettable experience at</p>
                  <p>[Event Name]! Secure your spot now.</p>
                  <p className='sm:leading-8'>📍[Event Location] || March 15, 2025 | 7:00 PM</p>
              </div>
              <div className='border-t-2 border-teal-900'>
                  <p className='py-0.5 pl-4 text-start'>Select Ticket Type</p>
                  <div>
                      <TicketType />
                  </div>
                  <div className='w-full'>
                      <p className='text-start pl-4'>Number of Tickets</p>
                      <div className='mx-3'>
                          <select type="number" name="tickets" className='border-slate-800 border-2 w-full pl-5'>
                                  <option value={values} className='bg-teal-900'>{values}</option>
                          </select></div>
                  </div>
              </div>
            </div>
        </Card>
      </div>
    </div>
  )
}

export default HomePage
