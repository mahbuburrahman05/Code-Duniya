import {React, useState} from 'react'
import Container from '../layout/Container'
import Flexbox from '../layout/Flexbox'
import { CiMenuFries } from "react-icons/ci";


export default function Header() {
  let [showBar, setShowBar] = useState(false);

  function handleShowBar() {
    setShowBar(!showBar);
  }
  return (
<header className='bg-[#0D1B2A] font-Anik'>
    <nav className='py-[22px] px[23px]'>
        <Container>
          <Flexbox className="justify-between items-center">
                    <img className='w-[100px] md:w-auto' src="logo.png" alt="" />
        <ul className={`md:flex md:gap-10 text-white text-[12px] md:text-[20px] ${showBar ? 'flex flex-col gap-3 absolute top-[70px] left-0 bg-[#0D1B2A] w-full p-5 md:static md:bg-transparent md:w-auto md:p-0' : 'hidden'}`}>
          <li>হোম</li>
          <li>আমাদের কোর্সসমহ</li>
          <li>যোগাযোগ</li>
          <li>ক্যারিয়ার গাইডলাইন</li>
        </ul>
    <div className='flex gap-5 items-center'>
              <button className='bg-[#415A77] px-3 md:px-[58px] rounded-[10px] py-2 text-[12px] md:text-[20px] text-white cursor-pointer'>কোর্স দেখুন</button>
        <CiMenuFries onClick={handleShowBar} className='md:hidden text-white text-[25px]' />
    </div>

          </Flexbox>
        </Container>
    </nav>
</header>
  )
}
