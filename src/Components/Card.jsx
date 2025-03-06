import React from 'react'
import CardButtons from './CardButtons'

function Card({ number, cardIntro, children, buttons }) {
  return (
    <div className='sm:flex sm:justify-center sm:items-center'>
      <div className={`border-2 border-teal-900 sm:w-1/2 rounded-4xl py-8 sm:leading-7 mt-1`}>
        <div className='flex px-3  justify-between -translate-y-2'>
          <div className='geo md:text-4xl text-2xl'>{cardIntro}</div>
          <div>Step {number} / 3</div>
        </div>
        <div className={`${number === 1 && 'transition'}  ${number === 2 && 'transition1'} ${number === 3 && 'transition2'} mx-4`}></div>
        <div className='sm:border-2 border-teal-900 rounded-2xl mx-3 text-center'>
          <div>
            {children}
          </div>
          <CardButtons buttons={buttons} />
        </div>
      </div>
    </div>
  )
}

export default Card
