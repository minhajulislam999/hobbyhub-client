import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      className="w-full h-[500px]"
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[500px]">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;