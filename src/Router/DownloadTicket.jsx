import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
function DownloadTicket() {
  const navigate = useNavigate()
  const validatedFormData = JSON.parse(localStorage.getItem("UserInfo"))
  const ticketData = JSON.parse(localStorage.getItem("TicketInfo"))

  function handleOption1() {
     navigate("/")
  }
  function handleOption2() {
    return null
  }

  return (
    <div className='bg'>
      <div>
        <Navbar />
      </div>
      <div>
        <Card number={3} cardIntro={"Ready"} option1={"Book Another Ticket"} option2={"Download Ticket"}
         handleOption1={handleOption1} handleOption2={handleOption2}>
          <h2>Your Ticket is Booked</h2>
          <p>Check your email for a copy or You can <strong>download</strong>.</p>
          <div className=' flex justify-center m-2'>
            <img src="TICKET.svg" alt="Generated ticket" className='ticketheight' />
            <div className='absolute m-3 activeborder max-w-36 text-xs rounded-md h-60' id='ticketDownload'>
              <h2 className='roadFont font-bold'>Techember Fest ” 25</h2>
              <p>📍04 Rumen Road, Ikoyi, Lagos</p>
              <p>📆 March 15, 2025 | 7:00 PM</p>
              <img src={validatedFormData.image} alt="Validated image" className='h-16 block mx-auto rounded-sm mb-1'/>
              <div className= 'small pt-2 leading-5'>
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
                    <p>{ticketData.type}</p>
                    <p>{ticketData.price}</p>
                  </div>
                </div>
              </div>
            <div className='absolute max-h-12 max-w-28 h-12 w-28 bottom-0 translate-y-17 translate-x-3' >
              <img src="barCode.jpg" alt="bar-Code" className='w-full h-full' />
            </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DownloadTicket
