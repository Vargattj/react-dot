import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Container } from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/swiper.scss";

SwiperCore.use([Navigation]);

const SectionSlider = () => {
  const content = [
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
    {
      title: "LOREM IPSUM",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      img: "https://source.unsplash.com/4miBe6zg5r0",
    },
  ];
  return (
    <Container>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
              nextEl: ".button-next-desk",
              prevEl: ".button-prev-desk",
            },
          },
        }}
      >
        {content.map((item, key) => (
          <SwiperSlide key={key}>
            <div className="content-slider">
              <img
                src={item.img}
                alt="Beautiful landscape "
                className="img-slider"
              />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className="navigation-wrapper">
                <FaArrowLeft className="button-prev" size="2em" />
                <FaArrowRight className="button-next" size="2em" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <FaArrowLeft className="button-prev-desk" size="3em" />
      <FaArrowRight className="button-next-desk" size="3em" />
    </Container>
  );
};

export default SectionSlider;
