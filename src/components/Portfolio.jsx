import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import projects from "../data/projects.json";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-10 flex items-center bg-mauve text-gray-800 text-lg font-josefin-sans lg:text-xl">
      <div className="container px-5 py-20 mx-auto text-center xl:px-40">
        <h1 className="text-4xl sm:text-5xl font-medium mb-4">My Portfolio</h1>
        <Swiper
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation, Autoplay]}
          className="mySwiper max-w-[350px] h-[580px] sm:max-w-full md:h-[560px]">
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.title}>
                <img
                  alt=""
                  className="w-full h-[250px] object-cover object-bottom rounded-t"
                  src={project.image}
                />
                <div className="h-[275px] px-8 py-5 bg-cream rounded-b md:h-[255px]">
                  <h2 className="text-base font-bold mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-base text-dark-rose font-bold mb-3 md:text-xl">
                    <a href={project.link} target="_blank">
                      {project.title}
                    </a>
                  </h1>
                  <p className="text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
