import React from 'react'
import Container from '../layout/Container'
import Flexbox from '../layout/Flexbox'

export default function Header() {
  return (
<header className='bg-[#0D1B2A] font-Anik'>
    <nav className='py-[22px] px[23px]'>
        <Container>
          <Flexbox className="justify-between items-center">
                    <img src="logo.png" alt="" />
        <ul className='text-white flex gap-15 font-semibold text-[22px]'>
          <li>হোম</li>
          <li>আমাদের কোর্সসমহ</li>
          <li>যোগাযোগ</li>
          <li>ক্যারিয়ার গাইডলাইন</li>
        </ul>
        <button className='bg-[#415A77] px-[58px] rounded-[10px] py-2 text-white cursor-'>কোর্স দেখুন</button>
          </Flexbox>
        </Container>
    </nav>
</header>
  )
}
