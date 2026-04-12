import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Discover Your Passion",
      description: "Find and join local hobby groups that match your interests.",
      image: "https://i.ibb.co.com/QFBqDLcd/elias-tsapaliaris-K0sri-Gz2-QYk-unsplash.jpg",
    },
    {
      id: 2,
      title: "Connect With People",
      description: "Meet like-minded people and build lasting friendships.",
      image: "https://i.ibb.co.com/32qhJtL/camilo-jimenez-q-Zen-O-g-Q7-QA-unsplash.jpg",
    },
    {
      id: 3,
      title: "Build Your Community",
      description: "Create your own hobby group and invite others to join.",
      image: "https://i.ibb.co.com/vxBQGZQ1/vlad-hilitanu-1-FI2-QAYPa-Y-unsplash.jpg",
    },
  ];

  return (
    <div className="w-full"> {/* মেইন প্যারেন্ট ডিভ */}
      
      {/* Typewriter Section */}
      <div className="text-center py-10 bg-base-200">
        <h2 className="text-3xl md:text-4xl font-bold">
          We love{' '}
          <span className="text-primary">
            <Typewriter
              words={['Drawing & Painting', 'Photography', 'Video Gaming', 'Cooking', 'Reading', 'Hiking']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
      </div>

      {/* Swiper Slider Section */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-[400px] md:h-[550px]"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Image */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover" 
              />
              
              {/* Text Overlay with background shadow for readability */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div> 
  );
};

export default Banner;
