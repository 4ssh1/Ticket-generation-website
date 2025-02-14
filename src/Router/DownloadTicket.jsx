import React, { useState } from 'react'
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
    console.log(validatedFormData)
    
  }

  return (
    <div className='bg h-screen'>
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
            <div className='absolute m-3 activeborder max-w-36 text-xs rounded-md' id='ticketDownload'>
              <h2 className='roadFont font-bold'>Techember Fest ” 25</h2>
              <p>📍04 Rumen Road, Ikoyi, Lagos</p>
              <p>📆 March 15, 2025 | 7:00 PM</p>
              <img src={validatedFormData.image} alt="Validated image" className='h-16 block mx-auto rounded-sm mb-1'/>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Your name </th>
                      <th>Your email *</th>
                    </tr>
                    <tr>
                      <td>{validatedFormData.name}</td>
                      <td> {validatedFormData.email}</td>
                    </tr>
                    <tr>
                      <th>Tier:</th>
                      <th>Ticket:</th>
                    </tr>
                    <tr>
                      <td>{ticketData.type}</td>
                      <td>{ticketData.price}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            <div className='absolute bg-black translate-y-6 translate-x-4 max-h-12 max-w-28 h-12 w-28' >
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
