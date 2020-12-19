import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #6f6f6f;
  position: relative;
  .custom-shape-divider-top-1608323797 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 0;
  }

  .custom-shape-divider-top-1608323797 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 500px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1608323797 .shape-fill {
    fill: #434343;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    max-width: 88%;
    margin: 0 auto;
    flex-wrap: wrap;
    .two-items-wrapper {
      display: block;
      background: none;
      padding: 0;
    }
    div {
      background-color: #bebebe;
      margin-bottom: 8px;
      padding: 16px 10px;
      border-radius: 10px;
      width: 100%;
      display: flex;
      flex: 1;
      label {
        color: #333333;
        font-weight: bold;
        margin-right: 8px;
        height: fit-content;
        text-align: start;
      }
    }
    input,
    textarea {
      background-color: transparent;
      outline: none;
      border: none;
      flex: 1;
    }
    .textarea-wrapper {
      flex-direction: column;
      textarea {
        margin-top: 8px;
      }
    }

    button {
      color: #333;
      background-color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      padding: 14px 36px;
      border-radius: 8px;
      margin: 0 auto;
      margin-top: 8px;
      border: none;
      text-align: center;
    }

    @media (min-width: 800px) {
      max-width: 88%;
      margin: 0 auto;
      padding: 30px 0px;

      .two-items-wrapper {
        display: flex;
        div:first-of-type {
          margin-right: 20px;
          flex: 1;
        }
      }
    }
  }

  .bottom-area {
    position: relative;
    background-color: #343434;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
