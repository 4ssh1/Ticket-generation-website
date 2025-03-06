import React from 'react'

function CardButtons({ buttons = [] }) {
  return (
    <div className='flex justify-center gap-5 mx-2 my-5 darkborder backdrop-brightness-50 text-center text-xs md:text-sm '>
      {
        buttons.map(({title, handle}, index) => (
          <div key={index}><button className='rounded-sm border-2 border-teal-900 px-6 py-1  sm:px-10 active' 
           onClick={handle}>{title}</button></div>
        ))
      }
    </div>
  )
}

export default CardButtons
