/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import loadingImg from "assets/images/loading.gif";

export default function InfiniteScroll() {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (pageNumber: number) => {
    const Access_key = process.env.NEXT_PUBLIC_API_KEY;
    const { data } = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${Access_key}&page=${pageNumber}&per_page=10`
    );
    setPhotos(photo => photo.concat(data));
  };

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber(prev => prev +1);
  }

  return (
    <Container>
      <Title>React Infinite scrolling hooks</Title>
      {photos.map((photo: any, index) => (
        <Photo key={index}>
          <img src={photo.urls.small} alt="photo" width={150} height={100} />
          <p>{photo.user.name}</p>
          <span>Like : {photo.user.total_likes}</span>
        </Photo>
      ))}
      <LoadingImg src={loadingImg.src} alt="loading" />
      <h3>{photos.length}</h3>
      <LoadingButton onClick={loadMore}>Load More</LoadingButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c273a;
  color: white;
`;

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 4px;
  color: wheat;
  margin: 20px 0;
`;

const scale = keyframes`
  from {
    transform: scale(0.5);
  }
`;

const Photo = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  border: 2px solid #ddd;
  padding: 12px;
  border-radius: 4px;
  overflow: hidden;
  animation: ${scale} 0.5s linear;
  img {
    width : 100%;
    display: block;
    max-width: 150px;
    height: 100%;
    object-fit: cover;
  }

  p {
    text-transform: capitalize;
    letter-spacing: 2px;
  }
  span {
    color: chocolate;
    margin: 0 10px;
  }
`;

const LoadingImg = styled.img`
  margin: 10px;
  height: 50px;
`;

const LoadingButton = styled.button`
  padding: 5px 20px;
  margin: 10px;
  cursor: pointer;
`;

