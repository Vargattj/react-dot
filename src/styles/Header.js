import styled from "styled-components";

export const Header = styled.header`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    h1 {
      margin-bottom: 16px;
      font-weight: bold;
      font-size: 30px;
      text-transform: uppercase;
    }
    p {
      max-width: 250px;
      text-align: center;
      font-weight: normal;
    }
    div {
      display: flex;
      justify-content: center;
      height: 0;
      a {
        position: relative;
        top: 10px;
      }
    }
  }
  @media (min-width: 800px) {
    position: relative;
    nav {
      position: absolute;
      top: 20px;
      left: calc(50% - 310px);
      z-index: 5;
      h1 {
        font-size: 60px;
        color: #546130;
        font-weight: bold;
      }
      p {
        font-size: 24px;
        color: #546130;
        font-weight: bold;
        max-width: 620px;
      }
    }
  }
`;

export const HeaderSwiper = styled.div`
  .img-slider {
    width: 100%;
    object-fit: cover;
    height: 220px;
  }
  .swiper-pagination {
    background: rgba(25, 25, 25, 0.6);
    bottom: 0;
    padding: 10px 5px;
  }
  .swiper-pagination-bullet {
    bottom: 0;
    background-color: #fff;
    border: 3px solid #444;
    height: 16px;
    width: 16px;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    border-color: #fff;
    background-color: #546130;
  }

  @media (min-width: 800px) {
    .img-slider {
      width: 100%;
      object-fit: cover;
      height: 550px;
    }
  }
`;
