import React from 'react';
import Layout from "../../components/layout/layout";
import {selectAuth} from "../../redux/slices/authSlice";
import {useAppSelector} from "../../redux/store";
import styled from 'styled-components';
import {getAsset} from "../../api";
import FeaturedStream from "../../components/featured/featured.stream";
import UserStream from "../../components/user/user.stream";
import {streamOfTheDay} from "../../data/stream.data";

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 5.25rem;
  width: 100vw;
  left: 0;

  @media (min-width: 1024px) {
    top: 8.125rem;
    width: calc(100vw - 10rem);
    left: 10rem;
  }
`;

const Background = styled.img`
  width: 100vw;
  min-height: calc(100vh - 10.5rem);
  margin-bottom: 5rem;
  height: 100%;
  object-fit: cover;
  object-position: center;
  user-select: none !important;
  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  -ms-user-select: none !important;

  @media (min-width: 1024px) {
    width: calc(100vw - 10rem);
    margin-bottom: 0;
    min-height: calc(100vh - 8.125rem);
    max-height: calc(100vh - 8.125rem);
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem 2rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > h1 {
    font-size: 1.5rem;
    font-weight: 500;

    & > span {
      color: #DC84F7;
      font-weight: 700;
    }
  }
`;

const ButtonWrapper = styled.div`
`;

const FollowButton = styled.button`
  background-color: #DC84F7;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  &:hover {
    filter: brightness(0.9)
  }

  &:active {
    filter: brightness(0.6)
  }
`;

const TitleWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;

`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;

`;

const StreamWrapper = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    //width: calc(100vw - 10rem);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

`;


const UserPage = () => {
    const {user} = useAppSelector(selectAuth);
    const imgUrl = getAsset(user?.profileImage as string);

    return (
        <Layout title={`${user?.username}`}>
            <Wrapper>
                <ProfileWrapper>
                    <UserInfoWrapper>
                        <img src={user ? imgUrl : "../joeri.jpg"} alt={"Profile image of " + user?.username}/>
                        <UserInfo>
                            <h1><span>@</span>{user ? user?.username : "Joeri"}</h1>
                            <p>20 followers</p>
                        </UserInfo>
                    </UserInfoWrapper>
                    <ButtonWrapper>
                        <FollowButton>
                            Follow
                        </FollowButton>
                    </ButtonWrapper>
                </ProfileWrapper>
                <TitleWrapper>
                    <Title>Populair video's</Title>
                </TitleWrapper>
                <StreamWrapper>
                    {streamOfTheDay.map((stream, index) => (
                        <UserStream key={index} img={`.${stream.img}`} name={user ? user?.username : "Joeri"}
                                    title={stream.title}
                                    profile_pic={user ? imgUrl : "../joeri.jpg"} tags={stream.tags}/>
                    ))}
                </StreamWrapper>
            </Wrapper>
            <BackgroundWrapper>
                <Background src="../profile_background.png" alt=""/>
            </BackgroundWrapper>
        </Layout>
    );
};

export default UserPage;
