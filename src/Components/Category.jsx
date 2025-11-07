
import React from 'react'
import Container from '../layout/Container'
import Category_Items from './ui/Category_Items'
import gp from '../assets/Group.png'
import net from '../assets/net.png'
import soft from '../assets/soft.png'
import film from '../assets/film.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const Category = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

     responsive: [
   
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  };

  function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-800"
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
      className="absolute left-[-30] top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-800 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </div>
  );
}


  let Items = [
    {
      name: "গ্রাফিকস",
      img : gp
    },
    {
      name: "নেটওয়ার্কিং",
      img : net
    },
    {
      name: "সফটওয়্যার",
      img : soft
    },
    {
      name: "ফিল্ম মিডিয়া",
      img : film
    },
    {
      name: "ফিল্ম মিডিয়া",
      img : film
    },
    {
      name: "ফিল্ম মিডিয়া",
      img : film
    },
  ]
  return (
<section className=' absolute top-[-78px]  w-[80%] md:mx-35 mx-0  rounded-lg shadow-lg'>

        <Container>
                <Slider {...settings}className='mx-[-40px] md:mx-0 '>

          {Items.map((Citem) => (
            <Category_Items item={Citem}/>
          ))
          }
          </Slider>
    </Container>

</section>
  )
}

export default Category