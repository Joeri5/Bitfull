import {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import styled from "styled-components";

interface FeaturedStreamProps {
    img: string
    name: string
    title: string
    profile_pic: string
    tags: string[];
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
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.9375rem;

  & > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;

    @media (min-width: 1024px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const StreamInfo = styled.div`
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  & > p {
    font-size: 0.75rem;

    @media (min-width: 1024px) {
      font-size: 0.875rem;
    }
  }
`;

const Title = styled.h4`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.9375rem;
  font-weight: 700;
`;

const TagsWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  flex-wrap: nowrap;
  overflow-x: clip;
`;

const CategoryTag = styled.p`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: #212122;
  color: #BDBDBE;
  border-radius: 10px;
  width: fit-content;
`;

const FeaturedStream = ({img, name, title, profile_pic, tags}: FeaturedStreamProps) => {
    // const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    let [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }, []);


    const handleResize = useCallback(() => {
        setWidth(window.innerWidth);
    }, []);

    useLayoutEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <Wrapper>
            <ImageWrapper>
                <img src={img} alt={"stream of" + name}/>
            </ImageWrapper>
            <InfoWrapper>
                <ProfileWrapper>
                    <img src={profile_pic} alt={"profile picture of" + name}/>
                    <StreamInfo>
                        <Title>{title}</Title>
                        <p>{name}</p>
                        <TagsWrapper>
                            {tags.slice(0, 3).map((tag, index) =>
                                <>
                                    <CategoryTag key={index}>
                                        {tag.length > 10 ? (width >= 1024 ? tag.slice(0, 8) : tag.slice(0, 6)) + ".." : tag}</CategoryTag>
                                </>
                            )}
                        </TagsWrapper>
                    </StreamInfo>
                </ProfileWrapper>

            </InfoWrapper>
        </Wrapper>
    );
};

export default FeaturedStream;
