import React from 'react'
import Container from '../layout/Container'
import storys from '../assets/storys.png'
import { FaPlayCircle } from "react-icons/fa";


const Storys = () => {
  return (
    <Container >
        <div className='text-center mt-[120px] mb-10 font-Anik'>
            <h2 className='md:font-bold md:text-[36px] text-2xl font-semibold'>আমাদের সফলতার গল্পগুলো</h2>
            <p>আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র</p>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 md:mb-20">
        <div className="story-card relative"> <img src={storys} alt="" /><FaPlayCircle className='absolute rounded-[50%] border-2 border-white top-[45%] left-[48%] text-white   text-6xl' /></div>  
        <div className="story-card relative"> <img src={storys} alt="" /><FaPlayCircle className='absolute rounded-[50%] border-2 border-white top-[45%] left-[48%] text-white   text-6xl' /></div>  
        <div className="story-card relative"> <img src={storys} alt="" /><FaPlayCircle className='absolute rounded-[50%] border-2 border-white top-[45%] left-[48%] text-white   text-6xl' /></div>  
        <div className="story-card relative"> <img src={storys} alt="" /><FaPlayCircle className='absolute rounded-[50%] border-2 border-white top-[45%] left-[48%] text-white   text-6xl' /></div>  

    </div>
    <button className='bg-[#415A77] px-5 md:px-[58px] rounded-[10px] py-3 text-[15px] md:text-[20px] text-white block mx-auto cursor-pointer'>আরও দেখুন</button>
    </Container>
  )
}

export default Storys