import React from "react";
import { styled } from "styled-components";
import bg from "../../assets/bg.png";

const Wrapper = styled("div")`
  margin: 2rem 0 0 0;
  line-height: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  h1 {
    margin: 1rem 0;
    background: linear-gradient(
      60deg,
      violet,
      darkblue,
      lightblue,
      #ff66cc,
      red
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  p {
    margin: 1rem 0;
    flex: 1 1 100%;
  }

  .text-content {
    z-index: 2;
    flex: 1 1 50%;
    min-width: 300px;
  }

  .image-wrapper {
    flex: 1 1 30%;
    min-width: 200px;
    margin-left: 1rem;
    z-index: 1;
    max-width: 100%;
    height: auto;
  }

  .gif-wrapper {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  a {
    color: blue;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1rem;
    display: inline-block;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .image-wrapper {
      margin-left: 0;
      margin-bottom: 1rem;
    }
    .gif-wrapper {
      margin-top: 1rem;
    }
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <div className="text-content">
        <p>Hey I'm</p>
        <h1>Balu Amarnath B</h1>
        <p>
          A Senior Frontend Developer with over 8 years of experience in
          building high-performance, scalable web applications. I specialize in{" "}
          <b>JavaScript</b>, <b>React.js</b>, and <b>Micro-Frontend</b>{" "}
          Architectures, and have a proven track record in leading teams,
          <b>optimizing web performance</b>, and enhancing{" "}
          <b>website security</b>.
        </p>
        <p>
          Throughout my career, I've consistently driven innovation, from
          implementing advanced <b>A/B frameworks</b> to reducing{" "}
          <b>system errors by 90%</b> and{" "}
          <b>boosting lead acquisition by 10%</b>.
        </p>
        <p>
          My passion lies in creating seamless user experiences and architecting
          robust solutions that align with business goals.
        </p>
        <a
          href="https://wa.me/8675669432"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hi 👋
        </a>
      </div>
      <div className="image-wrapper">
        <img src={bg} alt="Balu Amarnath" />
      </div>
    </Wrapper>
  );
};

export default Main;
