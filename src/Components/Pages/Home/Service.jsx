import React from 'react'
import PrimaryBtn from '../../Utility/PrimaryBtn'

const Service = () => {
  return (
    <section className='container my-25 flex gap-16'>
      <div className='flex gap-6 '>
        <div className='grid grid-row-3 gap-6'>
            <img src="images/blank.png" alt="blank" className='w-[170px]'/>
            <img src="images/blank.png" alt="blank" className='w-[170px]'/>
            <img src="images/blank.png" alt="blank" className='w-[170px]'/>
        </div>
        <div>
            <img src="images/blank.png" alt="blank" className='min-h-[480px] max-w-[458px]'/>
        </div>
      </div>
      <div className='max-w-[465px]'>
        <h3 className='font-extrabold text-5xl leading-15 text-black pb-5'>We're Here To Service Your Hair Care Needs</h3>
        <p className='text-lg text-[#524D43] pb-14'>House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen.</p>
        <div className='max-w-[150px]'>
        <PrimaryBtn lakha="Learn More"/>
        </div>
      </div>
    </section>
  )
}

export default Service
