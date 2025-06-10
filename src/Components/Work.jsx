import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Work = () => {

  const projects = [
  {
    title: "AlmaMingle",
    description: "A platform for students to connect, and collaborate on Events, publish blogs and message each other.",
    image: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/projects/project1.png",
    link: "https://se-alma-mingle-18js.vercel.app/"
  },
  {
    title: "Roommate Manager",
    description: "Java-based app to assign tasks, rooms, and manage roommates with an admin dashboard.",
    image: "https://img.icons8.com/ios/50/neighbour.png",
    link: "https://github.com/shashankvrma/RoommatesTaskManagement"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, Tailwind, and hosted on Github.",
    image: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/portfolio.png",
    link: "https://shashankvrma.github.io/portfolio/"
  },
  {
    title: "Travel Bloom",
    description: "Travel recommendation website using Javascript, HTML, and CSS. and hosted on Github.",
    image: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/TravelBloom.png",
    link: "https://shashankvrma.github.io/travel_recommendation/"
  }
];

  return (
    // <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    //   <div className='max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full'>
    //     <div className='pb-8'>
    //       <p className='text-bold text-4xl inline border-b-4 border-pink-600 text-gray-300'>Projects</p>
    //       <p className='py-6'>Check out my recent work</p>
    //     </div>

<div name='work'>
    <section className="relative py-16 from-white to-gray-100 bg-[#0a192f]">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-100">
  <span className="inline-block border-b-4 border-pink-600 pb-1">
    My Projects
  </span>
</h2>

      {/* Custom Arrows */}
      <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2 swiper-button-prev-custom bg-white p-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
        <ArrowLeft />
      </div>
      <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2 swiper-button-next-custom bg-white p-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition cursor-pointer">
        <ArrowRight />
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom"
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500 transform hover:scale-105 h-full"
              >
                <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
</div>


    //</div>
    //</div>
  )
}

export default Work