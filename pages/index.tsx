import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { useEffect, useMemo, useRef, useState } from "react";

const Home: NextPage = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries : any) => {
    const [entry] = entries; // const entry = entires[0];
    setIsVisible(entry.isIntersecting);
  }

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if(currentTarget) observer.observe(currentTarget);

    return () => {
      if(currentTarget) observer.unobserve(currentTarget);
    }
  }, [targetRef, options])

  return (
    <Container>
      <Title>{!isVisible ? "not in viewport" : "in viewport"}</Title>
      <Gap />
      <ImageWrapper ref={targetRef}>
        <Image
          src={"/images/profile.jpg"}
          alt="profile"
          width={300}
          height={300}
          objectFit="fill"
        />
      </ImageWrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: #133158;
`;

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase; // css 에서도 대소문자를 제어할수있음!
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #90c7e0;
`;

const Gap = styled.div`
  height: 100vh;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;