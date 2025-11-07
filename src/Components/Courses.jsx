import { useState } from 'react'
import Container from '../layout/Container'
import Ccards from './ui/Ccards'
import mern from '../assets/mern.png'
import uiux from '../assets/uiux.png'
import video from '../assets/video.png'

const Courses = () => {
  let [showMore, setShowMore] = useState(false);

  let cards = [
    {
      img: mern,
      cat: "Web and Software",
      students: "1200 Students",
      title: "MERN Stack Development",
      rating: "Rating | 450 Reviews",
      price: "50000৳",
    },
    {
      img: video,
      cat: "Films & Media",
      students: "1200 Students",
      title: "Professional Video Editing",
      rating: "Rating | 450 Reviews",
      price: "50000৳",
    },
    {
      img: uiux,
      cat: "Graphics & Multimedia",
      students: "1200 Students",
      title: "UI/UX Design",
      rating: "Rating | 450 Reviews",
      price: "50000৳",
    },
    {
      img: mern,
      cat: "Web and Software",
      students: "1200 Students",
      title: "MERN Stack Development",
      rating: "Rating | 450 Reviews",
      price: "50000৳",
    },
  ];

  let visibleCourses = showMore ? cards : cards.slice(0, 3);

  return (
    <Container>
      <div className='mt-[170px] text-center font-Anik'>
        <h1 className='md:text-[36px] font-semibold text-2xl mb-[15px]'>আমাদের কোর্স সমুহ</h1>
        <p>আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ</p>
      </div>

      <div className='gap-5 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden'>
        {
          visibleCourses.map((card) => (
            <Ccards key={card.title} card={card} />
          ))
        }
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-8 px-8 py-3 bg-[#415A77] text-white  rounded-lg transition"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </Container>
  );
};

export default Courses;
