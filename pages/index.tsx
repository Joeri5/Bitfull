import {Inter} from '@next/font/google'
import styled from 'styled-components'
import Layout from "@/components/layout";
import Video from "@/components/video/video.component";
import VideoPlayer from "@/components/video/video.component";

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

            </main>
        </Layout>
    )
}
