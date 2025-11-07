import React from 'react'
import Container from '../layout/Container'
import SuccessCard from './ui/SuccessCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Success = () => {
 function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute md:right-120 mb-[200px]  md:mt-4 transform -translate-y-1/2 text-white bg-[#1B263B] p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight size={24} /> {/* control size here */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute md:left-140 md:top-2/2 mt-4 transform -translate-y-1/2 text-white bg-[#1B263B] p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </div>
  );
}



    var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
              swipe: true,         
          slidesToScroll: 1,
             infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
        }
      }
    ]
  };
    let successData = [
        {
            title: "৯০%",
            heading: "সফলতার হার",
            description:" এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে",
        },
        {
            title: "১০,০০০ + ",
            heading: "ক্যারিয়ার প্লেসমেন্ট",
            description:" এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে",
        },
        {
            title: "১০০০০০ + ",
            heading: "স্টুডেন্ট এর পছন্দ",
            description:"এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে",
        },
        {
            title: "৯০%",
            heading: "সফলতার হার",
            description:" এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে",
        },
        {
            title: "৯০%",
            heading: "সফলতার হার",
            description:" এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে",
        }
    ]
  return (
    <div>
        <Container>
        <div className=' text-center rounded-lg p-6 mt-10 font-Anik'>
            <h2 className='text-2xl font-semibold mb-2'>কেন আমরাই সেরা!</h2>
            <p className=''>কেন আপনি আমাদের লার্নার হবেন</p>
        </div>

                
     <Slider {...settings} className="my-10">
                     {successData.map((Cdata) => (
                    <SuccessCard data={Cdata} />
      ))}
     </Slider>
                
        </Container>
    </div>
  )
}

export default Success