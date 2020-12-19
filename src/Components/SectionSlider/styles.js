import styled from "styled-components";

export const Container = styled.div`
  .content-slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-slider {
      width: 100%;
      object-fit: cover;
      height: 220px;
      border: 10px solid #6f6f6f;
    }
    h2 {
      font-size: 24px;
      margin: 20px 0;
      font-weight: bold;
    }
    p {
      font-size: 19px;
      text-align: center;
      font-weight: normal;
      line-height: 1.3;
    }
  }
  .button-prev-desk,
  .button-next-desk {
    display: none;
  }

  .navigation-wrapper {
    justify-content: center;
    display: flex;
    width: 100%;
    align-items: center;
    margin: 20px 0;
    .button-next {
      margin: 0 20px;
    }
  }

  @media (min-width: 800px) {
    position: relative;
    padding: 60px 0;
    .button-prev-desk,
    .button-next-desk {
      display: initial;
      position: absolute;
      top: 28%;
      left: -20px;
      z-index: 20;
      cursor: pointer;
    }
    .button-next-desk {
      left: initial;
      right: -20px;
    }

    .navigation-wrapper {
      display: none;
    }
  }
`;
