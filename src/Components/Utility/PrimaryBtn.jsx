import React from 'react'

const PrimaryBtn = ({lakha}) => {
  return (
    <div className='bg-secondary py-3.5 px-7 w-full max-w-[220px]'>
      <button className='text-white font-semibold text-lg'>
        {lakha}
      </button>
    </div>
  )
}

export default PrimaryBtn
