import React from 'react'
import Container from '../layout/Container'
import Flexbox from '../layout/Flexbox'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import location from '../assets/location.png'

const Footer = () => {
    return (
        <div className='bg-[#0D1B2A] mt-20'>
            <Container>
                <div className=' mb-10 text-center text-white font-Anik'>
                    <h1 className='md:text-[60px] text-[35px] font-bold'>ভর্তি চলছে!!</h1>
                    <p className='mb-10'>আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন</p>
                </div>
                <div className='mx-auto text-center'>
                    <button className='mr-4 text-white bg-transparent px-4 py-2 border-2 md:h-[55px] md:w-[265px] cursor-pointer rounded-2xl'>সকল কোর্স দেখুন</button>
                    <button className='ml-4 text-white bg-transparent px-4 py-2 border-2 md:h-[55px] md:w-[265px] cursor-pointer rounded-2xl'>আমাদের সেমিনারে যোগ দিন</button>
                </div>
                <div className="text-white grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 mb-10 font-Anik">
                    <div>
                        <h1 className='md:text-3xl text-2xl mb-2'>আমাদের ঠিকানা</h1>
                        <p>২৮ / ২, মেহের প্লাজা, ধানমন্ডি, ঢাকা</p>
                        <p>+৮৮ ০১৭১৫৫৫৭৮৯৬</p>
                        <p>info@codeduniya.com</p>
                    </div>
                    <div>
                        <h1 className='md:text-3xl text-2xl mb-2'>গুরুত্বপূর্ণ লিংক</h1>
                        <p>আমাদের কোর্স</p>
                        <p>মেন্টর</p>
                        <p>আমাদের ব্লগ</p>
                        <p>প্রাইভেসি পলিসি</p>
                        <p>আমাদের সেমিনার</p>
                    </div>
                    <div>
                        <h1 className='md:text-3xl text-2xl mb-2'>জনপ্রিয় কোর্সগুল</h1>
                        <p>ওয়েব ডেভেলপমেন্ট</p>
                        <p>গ্রাফিক্স ডিজাইন</p>
                        <p>অ্যাপ ডেভেলপমেন্ট</p>
                        <p>সাইবার সিকিউরিটি</p>
                        <p>ভিডিও এডিটিং</p>

                    </div>
                    <div>
                        <img src={location} alt="" />
                    </div>
                </div>

            </Container>
            <div>
                <hr className='border-gray-600' />
                <div className="pb-6 text-center font-Anik text-white">
                    <p>© 2024 CodeDuniya. All rights reserved.</p>
                    <ul className='gap-8 mt-1 text-[26px] flex justify-center'>
                        <li><FaTwitter /></li>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedinIn /></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer