import styled from "styled-components";

export const SectionThree = styled.section`
  margin: auto;
  background: #bebebe;
  padding: 60px 0px;
  div:first-of-type {
    button {
      border-radius: 8px 8px 0 0;
    }
  }
  div:last-of-type {
    button {
      border: none;
    }
    div {
      border-radius: 0px 0px 8px 8px;
    }
  }
`;
