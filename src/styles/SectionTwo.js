import styled from "styled-components";

export const SectionTwo = styled.section`
  background: #6f6f6f;
  padding: 16px 0;
`;

export const SectionTwoContent = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  img {
    max-width: 275px;
    height: 275px;
    object-fit: cover;
    border-radius: 50%;
    border: 13px solid #343434;
  }
  h1 {
    font-size: 36px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 25px 0;
  }
  p {
    margin-bottom: 15px;
    font-weight: normal;
  }
  p.boldText {
    font-weight: bold;
  }
  p.italicText {
    font-style: italic;
  }

  @media (min-width: 800px) {
    display: flex;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    img {
      max-width: 430px;
      height: 410px;
    }
    p {
      max-width: 600px;
      padding: 0 12px;
    }
  }
`;
