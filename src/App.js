import React, { useRef } from "react";
import { GlobalStyle } from "./styles/global";
import { Header, HeaderSwiper } from "./styles/Header";
import { SectionOne } from "./styles/SectionOne";
import { SectionThree } from "./styles/SectionThree";
import { SectionTwo, SectionTwoContent } from "./styles/SectionTwo";

import "swiper/components/pagination/pagination.scss";
import SectionSlider from "./Components/SectionSlider";
import Accordion from "./Components/Accordion";
import { Footer } from "./styles/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import { FaArrowDown } from "react-icons/fa";

SwiperCore.use([Pagination]);

const content = [
  "https://source.unsplash.com/4miBe6zg5r0",
  "https://source.unsplash.com/4miBe6zg5r0",
  "https://source.unsplash.com/4miBe6zg5r0",
];
function App() {
  const scrollRef = useRef(null);
  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Header>
        <HeaderSwiper>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {content.map((item, key) => (
              <SwiperSlide key={key}>
                <nav>
                  <h1>Lorem IPSUM</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div>
                    <a
                      href="#section-one"
                      onClick={executeScroll}
                      className="scrollToSection"
                    >
                      <FaArrowDown color="#333" size="3em">
                        arrow_downward
                      </FaArrowDown>
                    </a>
                  </div>
                </nav>
                <img src={item} alt="img-slider" className="img-slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </HeaderSwiper>
      </Header>
      <main>
        <SectionOne ref={scrollRef}>
          <SectionSlider />
        </SectionOne>
        <SectionTwo>
          <SectionTwoContent>
            <img src="https://source.unsplash.com/4miBe6zg5r0" alt="" />
            <div>
              <h1>LOREM IPSUM</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p className="boldText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p className="italicText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          </SectionTwoContent>
        </SectionTwo>
        <SectionThree>
          <Accordion
            title="Lorem ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
            imgUrl="https://source.unsplash.com/4miBe6zg5r0"
          />
          <Accordion
            title="Lorem ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
          />
          <Accordion
            title="Lorem ipsum"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
            imgUrl="https://source.unsplash.com/4miBe6zg5r0"
          />
        </SectionThree>
      </main>
      <Footer>
        <div className="custom-shape-divider-top-1608323797">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <form>
          <div>
            <label htmlFor="name">*Nome: </label>
            <input
              id="name"
              type="text"
              required
              name="name"
              placeholder="Informe seu nome"
            />
          </div>
          <div className="two-items-wrapper">
            <div>
              <label htmlFor="email">*E-mail: </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Informe seu e-mail"
                required
              />
            </div>

            <div>
              <label htmlFor="phone">*Telefone: </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(_)____-____"
                required
                pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                title="Número de telefone precisa ser no formato (99) 99999-9999"
              />
            </div>
          </div>

          <div className="textarea-wrapper">
            <label htmlFor="message">*Mensagem: </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Escreva aqui"
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div className="bottom-area">
          <p>LOREM IPSUM</p>
        </div>
      </Footer>
      <GlobalStyle />
    </>
  );
}

export default App;
