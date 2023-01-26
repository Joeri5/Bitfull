import {Inter} from '@next/font/google'
import styled from 'styled-components'
import Layout from "@/components/layout/layout";
import VideoPlayer from "@/components/video/video.component";
import FeaturedStream from "@/components/featured/featured.stream";
import FeaturedTitle from "@/components/featured/featured.title";
import {streamOfTheDay} from "@/data/stream.data";
import FeaturedAuthor from "@/components/featured/featured.author";
import {topAuthors} from "@/data/author.data";
import FeaturedCategory from "@/components/featured/featured.category";
import {categoryData} from "@/data/category.data";
import CategoryButton from "@/components/category/category.button";
import {categoryButton} from "@/data/category.button.data";

const inter = Inter({subsets: ['latin']})

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  height: 100%;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 5.375rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 1024px) {
    gap: 1.5625rem;
  }

  & > h1 {
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 4rem;
    }

    @media (min-width: 1280px) {
      font-size: 2.75rem;
    }

    @media (min-width: 1440px) {
      font-size: 3.25rem;
    }

    @media (min-width: 1536px) {
      font-size: 3.75rem;
    }
  }

  & > p {
    font-size: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Wrapper = styled.div`
`;

const VideoWrapper = styled.div`
  @media (min-width: 1280px) {
    width: 40rem;
  }

  @media (min-width: 1536px) {
    width: 42.5rem;
  }

  @media (min-width: 1650px) {
    width: 47.5rem;
  }
`;

const StreamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 1024px) {
    padding: 3.125rem 0;
  }
`;

const FeaturedWrapper = styled.div`
  padding: 0 4rem 0 0;
  display: flex;
  width: 100vw;
  overflow-x: scroll;
  gap: 2rem;
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;

  ::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
  }


  @media (min-width: 1024px) {
    width: calc(100vw - 7.125rem);
    padding: 0 6.125rem 0 0;
    gap: 3.25rem;
  }
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 1024px) {
    padding: 3.125rem 0;
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 1024px) {
    padding: 3.125rem 0;
  }
`;

const CategoriesButtonWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    gap: 1rem;
    padding: 2rem 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1536px) {
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
  }
`;

export default function Home() {
    return (
        <Layout title="Home">
            <Header>
                <TextWrapper>
                    <h1 className="righteous">PLAY, COMPETE,<br/>
                        FOLLOW POPULAR <br/>
                        STREAMERS <br/>
                    </h1>
                    <p>
                        The best streamers gather here to have a good time,
                        be among us, join us!
                    </p>
                </TextWrapper>
                <Wrapper>
                    <VideoWrapper>
                        <VideoPlayer src={'./pokemon.mp4'} poster={'./placeholder.svg'}
                                     title={"Battle for the castle with Franck Jourdan and Eva703"}/>
                    </VideoWrapper>
                </Wrapper>
            </Header>
            <main>
                <StreamWrapper>
                    <FeaturedTitle title={" of the day"} colorBefore={"Streams"}/>
                    <FeaturedWrapper className=".stream">
                        {streamOfTheDay.map((stream, index) => (
                            <>
                                <FeaturedStream key={index} img={stream.img} name={stream.streamer.name}
                                                title={stream.title}
                                                profile_pic={stream.streamer.profile_pic} tags={stream.tags}/>
                            </>
                        ))}
                    </FeaturedWrapper>
                </StreamWrapper>
                <AuthorWrapper>
                    <FeaturedTitle title={"Top "} colorAfter={"authors"}/>
                    <FeaturedWrapper>
                        {topAuthors.map((author, index) => (
                            <>
                                <FeaturedAuthor key={index} img={author.img} profile_pic={author.profile_pic}
                                                name={author.name}/>
                            </>
                        ))}
                    </FeaturedWrapper>
                </AuthorWrapper>
                <CategoriesWrapper>
                    <FeaturedTitle title={" you'll like"} colorBefore={"Categories"}/>
                    <FeaturedWrapper>
                        {categoryData.map((category, index) => (
                            <>
                                <FeaturedCategory key={index} img={category.img} title={category.title}
                                                  tags={category.tags} viewers={category.viewers}/>
                            </>
                        ))}
                    </FeaturedWrapper>
                </CategoriesWrapper>
                <CategoriesButtonWrapper>
                    {categoryButton.map((category, index) => (
                        <>
                            <CategoryButton key={index} img={category.img} title={category.title}/>
                        </>
                    ))}
                </CategoriesButtonWrapper>
            </main>
        </Layout>
    )
}
