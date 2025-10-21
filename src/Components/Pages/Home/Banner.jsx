import React from 'react'
import PrimaryBtn from '../../Utility/PrimaryBtn'

const Banner = () => {
  return (
    <section className='bg-primary py-20 lg:py-52'>
        <div className='container flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20 px-4 lg:px-0'>
            <div className='text-center lg:text-left'>
                <h1 className='text-[#F7D38A] font-black text-4xl lg:text-6xl pb-4'>WELCOME!</h1>
                <h2 className='text-4xl lg:text-6xl font-extrabold text-third pb-5'>The Best Hair Saloon</h2>
                <p className='text-third max-w-[600px] pb-8 lg:pb-15 text-base lg:text-lg'>We use quality products and the latest styling techniques to bring out your very best. We promises to provide you with 5-star service.</p>
                <PrimaryBtn lakha="Make Appointment"/>
            </div>
            <div className='w-full lg:w-auto'>
                <img 
                    src="images/banner.jpg" 
                    alt="banner" 
                    className='w-full max-w-[300px] lg:max-w-[380px] mx-auto object-cover rounded-lg shadow-lg'
                />
            </div>
        </div>
    </section>
  )
}

export default Banner
