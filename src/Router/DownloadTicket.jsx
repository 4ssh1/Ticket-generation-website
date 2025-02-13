import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
function DownloadTicket() {
  const [download, setDownload] = useState(false)
  const navigate = useNavigate()
  const validatedFormData = JSON.parse(localStorage.getItem("UserInfo"))

  function handleOption1() {
    return navigate("/")
  }
  function handleOption2() {
    console.log(validatedFormData)
    return setDownload(true)
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
            <div className='absolute m-2 activeborder max-w-36 text-xs rounded-md'>
              <h2 className='roadFont md:text-2xl font-bold'>Techember Fest ” 25</h2>
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
                      <th>Ticket for:</th>
                    </tr>
                    <tr>
                      <td>affggf</td>
                      <td>hb hbnjj</td>
                    </tr>
                  </thead>
                </table>
              </div>
            <div className='absolute translate-y-12 translate-x-12'>
            </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DownloadTicket
