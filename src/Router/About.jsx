import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()

    function handleOption1() {
        return navigate('/')
    }
    function handleOption2() {
        return navigate('/ticket')
    }
    

  return (
    <div  className='bg roboto'>
       <div>
            <Navbar />
        </div>
        <div>
            <Card number={0} cardIntro={"About"} option1={"Back to Home"} option2={"Go to Ticket Page"}
             handleOption1={handleOption1} handleOption2={handleOption2}>
                
                <div>
                    <p className=' whitespace-pre-line'>HNG Event Ticket Booking UI – Open Source Practice Project 🎟️
<p><strong>Overview</strong></p>
<p>
    This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore,
     and build upon. The design focuses on a seamless,
     login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.
    The project consists of a three-step ticket booking flow
    Flow & Features
</p><br />

<ul>
    <li>
        1️⃣ Ticket Selection
            •	Users can browse available tickets (Free & Paid).
            •	Ticket options are displayed in a list or card view.        
    </li><br />
    <li>
        2️⃣ Attendee Details Form
            •	Users input their Name, Email, and optional Phone Number.
            •	Profile picture upload option with preview functionality.
            •	Ticket summary is visible to ensure users review their details before submission.
    </li>
</ul>

      </p>
                </div>
            </Card> 
        </div>
    </div>
  )
}

export default About
