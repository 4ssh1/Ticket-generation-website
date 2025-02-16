import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [AllValues, setAllValues] = useState([])
  const [selectedPrice, setSelectedPrice] = useState("")
  const [errorMessage, setErrorMessage]= useState("")
  const [ticketTier, setTicketTier] = useState("")

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

    
    // useEffect(()=>{
    //   try {
    //     const savedValues = JSON.parse(localStorage.getItem("TicketInfo")) || [];
    //     setAllValues(savedValues);
    //   } catch (error) {
    //     console.error("Error reading from localStorage", error);
    //   }
    // },[])

    function handleOption1() { 
      setSelectedPrice('')
      setErrorMessage("")       
    }

    function handleOption2() {
      if(selectedPrice){
        // localStorage.setItem("TicketInfo", JSON.stringify(AllValues))
        // localStorage.setItem('CurrentPrice',JSON.stringify(selectedPrice))
        // localStorage.setItem('CurrentTier',JSON.stringify(ticketTier))
        navigate("/ticket")
      }else{
        setErrorMessage("Click any button")
      }
    }
    
    function updateAll(e, ticket){
      setSelectedPrice(e.target.value);
      setTicketTier(ticket.type);
      // setAllValues(prev => {
      //   const updatedValues = [...prev, { price: e.target.value, type: ticket.type }];
      //   return updatedValues;
      // });
    }

    function TicketType() {
        return (
            <div className='sm:px-2 px-4 flex justify-center'>
              <div className='flex sm:justify-between flex-wrap border-2 w-full
               border-teal-950 rounded-2xl py-2 backdrop-brightness-75 px-5 sm:px-0' >
                 {ticketTitle?.map((title)=>{
                      return (
                          <div key={title.type} className={`flex mx-2 border-2  border-teal-950 dark:border-teal-950 ticketSelection rounded-2xl w-full
                           sm:w-40 my-2 sm:justify-between ${selectedPrice === title.price ? "bg-teal-600" : ""}`}>
                              <div className='p-1.5 flex flex-col items-start text-xs sm:text-sm leading-7'>
                                  <label htmlFor="price">{title.price}</label> <input type="radio" name="price" aria-describedby='ticketHint'
                                   value={title.price} id='price' className='outline-0' checked= {selectedPrice === title.price}
                                  onChange={(e)=>updateAll(e, title)} />{errorMessage && <span className='font-mono red'>{errorMessage}</span>}
                                  {errorMessage && <span className='sr-only' id='ticketHint'>{errorMessage}</span>}
                                  <p>{title.type}</p>
                                  <p>{title.remains} left</p>
                              </div>
                          </div>
                      )
                 })}
              </div>
            </div>
        )
    }

   

  return (
    <div className='bg roboto px-1.5 md:min-h-[120vh]'>
      <div>
        <Navbar />
      </div>
      <div className='w-full pt-11'>
        <Card number={1} cardIntro={"Ticket Selection"} option1={"Cancel"} option2={"Next"} 
        handleOption1={handleOption1} handleOption2={handleOption2}>
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
