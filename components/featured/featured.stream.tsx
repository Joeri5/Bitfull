import React from 'react';
import styled from "styled-components";

interface FeaturedStreamProps {
    img: string
    name: string
    title: string
    profile_pic: string
}

const Wrapper = styled.div`
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  //gap: 1.5625rem;
  gap: 1rem;
  scroll-snap-align: center;

  @media (min-width: 1024px) {
    width: 20rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  & > img {
    width: 17.5rem;
    object-fit: cover;
    border-radius: 10px;
    height: 10rem;
    object-position: center;

    @media (min-width: 1024px) {
      width: 20rem;
      height: 12.5rem;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  //gap: 0.9375rem;

  @media (min-width: 1024px) {
    gap: 0.9375rem;
  }

  & > p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.9375rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  & > img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    @media (min-width: 1024px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  & > p {
    font-size: 0.75rem;

    @media (min-width: 1024px) {
      font-size: 0.875rem;
    }
  }
`;

const FeaturedStream = ({img, name, title, profile_pic}: FeaturedStreamProps) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={img} alt={"stream of" + name}/>
            </ImageWrapper>
            <InfoWrapper>
                <p>{title}</p>
                <ProfileWrapper>
                    <img src={profile_pic} alt={"profile picture of" + name}/>
                    <p>{name}</p>
                </ProfileWrapper>
            </InfoWrapper>
        </Wrapper>
    );
};

export default FeaturedStream;
