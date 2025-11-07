import React from 'react'
import about from '../assets/about.png'
import Container from '../layout/Container'

const About = () => {
  return (
<Container>
        <div className='md:flex mt-[150px] items-center mx-auto font-Anik'>
        <div className='md:w-1/2'>
            <img className='md:max-w-[500px] ' src={about} alt="about image" />
        </div>
        <div className='md:w-1/2'>
       <h2 className='md:text-[36px] text-2xl font-semibold mt-4 md:font-bold md:mt-[-41px]'>আমাদের ক্লাসের বিশেষত্ব</h2>
       <ul className='list-disc mt-6 flex ml-5 md:ml-0 flex-col gap-4 md:text-[24px]'>
        <li>সপ্তাহে ২ - ৩ দিন ক্লাস</li>
        <li>অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে</li>
        <li>মনোরম ক্লাস রুম</li>
        <li>অনলাইন ২৪/৭ সাপোর্ট</li>
        <li>অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা</li>
       </ul>
        </div>
    </div>
                      
</Container>
  )
}

export default About