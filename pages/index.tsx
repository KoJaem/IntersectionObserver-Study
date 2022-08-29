import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { useRef } from "react";
import useElementOnScreen from "../src/hooks/useElementOnScreen";
import profile from 'assets/images/profile.jpg'

const Home: NextPage = () => {
  const targetRef = useRef(null);
  const { isVisible } = useElementOnScreen({
    targetRef,
    options: {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
  });

  return (
    <Container>
      <Title>{!isVisible ? "not in viewport" : "in viewport"}</Title>
      <Gap />
      <ImageWrapper ref={targetRef}>
        <Image
          src={profile.src}
          alt="profile"
          width={500}
          height={500}
          objectFit="fill"
        />
      </ImageWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #133158;
`;

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase; // css 에서도 대소문자를 제어할수있음!
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #90c7e080;
`;

const Gap = styled.div`
  height: 100vh;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;