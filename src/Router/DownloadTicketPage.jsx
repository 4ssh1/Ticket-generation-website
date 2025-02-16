import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

function DownloadTicketPage() {
  const navigate = useNavigate()
  const validatedFormData = JSON.parse(localStorage.getItem("UserInfo"))
  const ticketPrice = JSON.parse(localStorage.getItem("CurrentPrice"))
  const ticketType = JSON.parse(localStorage.getItem("CurrentTier"))

  function handleOption1() {
     navigate("/")
  }
  function handleOption2() {
    return null
  }

  return (
    <div className='bg h-screen md:min-h-[115vh]'>
      <div>
        <Navbar />
      </div>
      <div className='pt-11'>
        <Card number={3} cardIntro={"Ready"} option1={"Book Another Ticket"} option2={"Download Ticket"}
         handleOption1={handleOption1} handleOption2={handleOption2}>
          <h2 className='pt-1'>Your Ticket is Booked</h2>
          <p>Check your email for a copy or You can <strong>download</strong>.</p>
          <div className=' flex justify-center mt-2'>
            <img src="TICKET.svg" alt="Generated ticket" className='ticketheight' />
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
        </Card>
      </div>
    </div>
  )
}

export default DownloadTicketPage
