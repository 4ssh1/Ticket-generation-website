import React from 'react'

function CardButtons({option1 = "Cancel", option2 = "Next", handleOption1, handleOption2 }) {
  return (
    <div className='flex justify-center gap-5 mx-2 my-2 darkborder backdrop-brightness-50 text-center text-xs md:text-sm '>
      <div><button className='rounded-sm border-2 border-teal-900 px-6 py-1 sm:px-8 active'
       onClick={handleOption1}>{option1}</button></div>
      <div><button className='rounded-sm border-2 border-teal-900 px-6 py-1 sm:px-10 active' 
      onClick={handleOption2}>{option2}</button></div>
    </div>
  )
}

export default CardButtons
