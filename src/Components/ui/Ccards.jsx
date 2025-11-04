import React from 'react'
import Container from '../../layout/Container'

const Ccards = ({ card }) => {
    return (
        <div>
            <Container>
             <div className='max-w-[377px] bg-[#415A77] rounded-lg text-white'>
                   <div className=''>
                    <img src={card.img} alt="" />
                <div className='p-4'>
                   <div className="flex justify-between mb-2 text-[14px] font-normal">
                         <span>{card.cat}</span>
                    <span>{card.students}</span>
                   </div>
                    <h2 className='text-[24px] font-bold'>{card.title}</h2>
                    <div className='flex justify-between items-center'>
                        <div>
                            <span>{card.rating}</span>
                            <h3>{card.price}</h3>
                        </div>
                        <button className='px-4 rounded-[15px] py-1 bg-black text-white'>Buy Now</button>
                    </div>
                </div>
                </div>
             </div>
            </Container>
        </div>
    )
}

export default Ccards