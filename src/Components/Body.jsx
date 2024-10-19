import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-center'>
        <img src="/public/assets/Blue-Shape.svg" alt="1st" className='-rotate-[45deg]' />
        <img src="/public/assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg]' />
        <img src="/public/assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg]' />
        <img src="/public/assets/result-IeM8PaQvRb.png" alt="Sexy" className='absolute size-80 rounded-full ' />
      </div>
      <div>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>A Night with the Indian Beauty</h1>
        <p className='font-lato text-gray-400 mb-4'>Indian women possess a captivating blend of elegance and grace, with features that reflect a unique cultural richness. From the radiant glow of teenage girls, embodying youth and freshness, to the poised and mature charm of housewives, their beauty spans across generations. Their figures, perfectly proportioned, are celebrated for their natural curves and timeless allure.</p>
        <form action="" className='flex flex-col gap-4'>
          <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='Enter your e-mail'/>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Book Now</button>
        </form>
        <div className='flex gap-2'>
          <img src="/public/assets/Checkmark.svg" alt="check" />
          <p className='font-lato text-gray-400 mt-2 text-sm'>No spam, Cancel anytime</p>
        </div>
      </div>
    </div>

  )
}

export default Body