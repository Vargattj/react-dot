import styled from "styled-components";

export const Container = styled.div`
  max-width: 88%;
  margin: 0 auto;
  .accordion {
    color: #fff;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    width: 100%;
    transition: background-color 0.6s ease;
    border-bottom: 1px solid #fff;
    background-color: ${(props) => (props.active !== "" ? "#fff" : "#6f6f6f")};
    color: ${(props) => (props.active !== "active" ? "#fff" : "#6f6f6f")};
  }

  .accordion-title {
    font-weight: bold;
    font-size: 16px;
  }

  .accordion-icon {
    margin-left: auto;
    transition: transform 0.4s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .accordion-content {
    background-color: #fff;
    overflow: hidden;
    transition: max-height 0.6s ease;
    color: #6f6f6f;
    padding: 0 18px;
    border: none;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border: 12px solid #6f6f6f;
      margin-top: 16px;
    }
  }

  .accordion-text {
    font-weight: normal;
    font-size: 16px;
    margin: 16px 0;
    text-align: center;
  }

  @media (min-width: 800px) {
    max-width: 88%;
    margin: 0 auto;
    .accordion-content {
      max-height: 100%;
      padding: 0 24px;
      display: flex;
      position: relative;
      justify-content: space-around;
      img {
        max-width: 300px;
        height: 200px;
        margin-bottom: 24px;
      }
      .accordion-text {
        align-self: center;
        margin: 24px 0;
        text-align: left;
        max-width: 660px;
        padding: 10px;
      }
    }
  }
`;
