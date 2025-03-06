import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [errorMessage, setErrorMessage]= useState("")
  const [sTicket, setTicket] = useState("")

    const ticketTitle = [
       { type: "REGULAR ACCESS",
         price: "Free",
         remains: 20
       },
       { type: "VIP ACCESS",
         price: "$50",
         remains: 20
       },
       { type: "VVIP ACCESS",
         price: "$150",
         remains: 20
       }
    ];
    const navigate = useNavigate()

    
    useEffect(()=>{
        const savedValues = JSON.parse(localStorage.getItem("sTicket")) || [];
        setTicket(savedValues);
    },[])

    function handleOption1() { 
      setTicket({})
      setErrorMessage("")       
    }

    function handleOption2() {
      if(sTicket){
        localStorage.setItem('sTicket',JSON.stringify(sTicket));
        navigate("/ticket")
      }else{
        setErrorMessage("Choose a price")
      }
    }
    
    function updateAll(ticket) {
      setTicket(ticket)
    }
     
    function TicketType() {
        return (
            <div className='sm:px-2 px-4 flex justify-center'>
              <div className='flex sm:justify-between flex-wrap border-2 w-full
               border-teal-950 rounded-2xl py-2 backdrop-brightness-75 px-5 sm:px-0' >
                 {ticketTitle?.map((singleTicket)=>{
                      return (
                          <div key={singleTicket.type} className={`flex mx-2 border-2  border-teal-950 dark:border-teal-950 ticketSelection rounded-2xl w-full
                           sm:w-40 my-2 sm:justify-between ${sTicket.price === singleTicket.price ? "bg-teal-600" : ""}`} onClick={()=>updateAll(singleTicket)}>
                              <div className='p-1.5 flex flex-col items-start text-xs sm:text-sm leading-7'>
                                  <span >{singleTicket.price}</span  >
                                   {errorMessage && <span className='font-mono red'>{errorMessage}</span>}
                                  {errorMessage && <span className='sr-only' id='ticketHint'>{errorMessage}</span>}
                                  <p>{singleTicket.type}</p>
                                  <p>{singleTicket.remains} left</p>
                              </div>
                          </div>
                      )
                 })}
              </div>
            </div>
        )
    }


    const mybuttons = [
      {
        title : "Cancel", 
        handle : handleOption1
      }, 
      {
        title: "Next", 
        handle : handleOption2
      }
    ]
   

  return (
    <div className='bg roboto px-1.5 md:min-h-[130vh]'>
      <div>
        <Navbar />
      </div>
      <div className='w-full pt-11'>
        <Card number={1} cardIntro={"Ticket Selection"} buttons={mybuttons}>
            <div>
              <div className='bg border-2 rounded-2xl border-teal-900 m-3 py-1 px-2'>
                  <h2 className='roadFont sm:text-6xl sm:leading-13 tracking-wide text-2xl'>Techember Fest ” 25</h2>
                  <p>Join us for an unforgettable experience at</p>
                  <p>[Event Name]! Secure your spot now.</p>
                  <p className='sm:leading-8'>📍[Event Location] || March 15, 2025 | 7:00 PM</p>
              </div>
              <div className='border-t-2 border-teal-900'>
                  <p className='py-2.5 pl-2 text-start '>Select Ticket Type</p>
                  <div>
                      <TicketType />
                  </div>
                  <div className='w-full'>
                      <p className='text-start pl-4 py-2'>Number of Tickets</p>
                      <div className='mx-3'>
                          <select type="number" name="tickets" className='border-slate-800 border-2 w-full pl-5'>
                                  <option value={1} className='bg-teal-900'>1</option>
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
