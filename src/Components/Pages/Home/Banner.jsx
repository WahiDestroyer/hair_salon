import React from 'react'
import PrimaryBtn from '../../Utility/PrimaryBtn'

const Banner = () => {
  return (
    <section className='bg-primary py-52'>
        <div className='container flex justify-between items-center gap-20'>
            <div>
                <h1 className='text-[#F7D38A] font-black text-6xl pb-4'>WELCOME!</h1>
                <h2 className='text-6xl font-extrabold text-third pb-5'>The Best Hair Saloon</h2>
                <p className='text-third max-w-[600px] pb-15'>We use quality products and the latest styling techniques to bring out your very best. We promises to provide you with 5-star service.</p>
                <PrimaryBtn lakha="Make Appointment"/>
            </div>
            <div>
                <img src="images/banner.jpg" alt="banner" className='max-w-[380px]'/>
            </div>
        </div>
      
    </section>
  )
}

export default Banner
