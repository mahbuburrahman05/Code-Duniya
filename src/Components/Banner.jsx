import React from 'react'
import Container from '../layout/Container'
import Flexbox from '../layout/Flexbox'
import BannerImage from '../assets/banner.png'

export default function Banner() {
    return (
        <section className='bg-[#0D1B2A] pb-[170px] pt-[81px]'>
            <div>
                <Container>
                    <Flexbox>
                        <div className='w-2/4'>
                            <h1 className='text-[50px] font-bold text-white max-w-[435px]'>দেশের সর্ব বৃহৎ
                                আইটি ট্রেনিং প্লাটফর্ম </h1>
                                <p className='text-white max-w-[457px] mt-6'>আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে 
আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                        <button className='bg-[#415A77] px-[58px] rounded-[10px] py-2 mt-8 text-white cursor-'>কোর্স দেখুন</button>
                        </div>
                        <div className='w-2/4'>
                            <img className='' src={BannerImage} alt="" />
                        </div>
                    </Flexbox>
                </Container>
            </div>
        </section>
    )
}
