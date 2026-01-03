import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: "Ariana Sultana",
    role: "Pet Adopter",
    image:
      "https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw=",
    feedback:
      "I adopted Bella through PawMart after she was found abandoned. Now our mornings start with joyful runs and end with endless cuddles.",
  },
  {
    id: 2,
    name: "Nayem Rahman",
    role: "Foster Parent",
    image:
      "https://media.istockphoto.com/id/517696693/photo/pitbull-kiss.jpg?s=612x612&w=0&k=20&c=DRtgG-l2ZT6U6G5LPbFbcpqBN21di3KPVtlQf1RE66Q=",
    feedback:
      "Through PawMart, I was able to foster 12 street cats and help them find safe, loving homes. The platform makes adoption easy and meaningful.",
  },
  {
    id: 3,
    name: "Sadia Akter",
    role: "Volunteer Caregiver",
    image:
      "https://img.freepik.com/free-photo/woman-with-chihuahua-dog_52683-110311.jpg?semt=ais_hybrid&w=740&q=80",
    feedback:
      "Every weekend, I help care for rescued dogs I found on PawMart. It’s more than a platform — it’s a compassionate community for animal lovers.",
  },
  {
    id: 4,
    name: "Rafiul Hasan",
    role: "Pet Owner",
    image:
      "https://www.liveincostarica.com/wp-content/uploads/pet-culture-costa-rica-1024x682.jpg",
    feedback:
      "Adopting Max through PawMart gave both of us a second chance. The process was simple, transparent, and full of heart.",
  },
];


const Testimonials = () => {
  return (
  <>
  <div className='h-[400px] max-w-7xl mx-auto'>
  <SectionTitle title="Testimonials" subtitle="Our Testimonials said about the faithness!"></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((hero) => (
            <SwiperSlide>
          {/* <div
            key={hero.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-60 object-cover hover:scale-105 transition"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {hero.name}
              </h3>
              <p className="text-pink-600 text-sm font-medium mb-3">
                {hero.role}
              </p>
              <p className="text-gray-600 text-sm">{hero.story}</p>
            </div>
          </div> */}
          <div className="flex justify-center items-center h-[400px]">
      <div className="relative w-72 bg-white shadow-lg hover:shadow-2xl rounded-xl pt-14">
        
        {/* Avatar */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 rounded-full border-4  border-[#B7B89F] flex items-center justify-center">
            <span className="text-3xl ">
                <img className='rounded-full h-20 w-20 object-cover' src={hero.image} alt="" />
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-[#B7B89F] text-white rounded-b-xl rounded-t-[2rem] px-6 py-8 text-center">
          
          {/* Quote */}
          <p className="text-sm leading-relaxed relative">
            <span className="text-3xl absolute -left-2 -top-4">“</span>
           {hero.feedback}
            <span className="text-3xl absolute -right-2 bottom-0">”</span>
          </p>

          {/* Name */}
          <h4 className="mt-6 font-semibold tracking-wide uppercase">
            {hero.name}
          </h4>
        </div>
      </div>
    </div>
          </SwiperSlide>
        ))}
       
        
      </Swiper>
    </div>
    </>)
};

export default Testimonials;
