import {Inter} from '@next/font/google'
import styled from 'styled-components'
import Layout from "@/components/layout";
import Video from "@/components/video/video.component";
import VideoPlayer from "@/components/video/video.component";

const inter = Inter({subsets: ['latin']})

const Header = styled.header`
  @media (min-width: 1024px) {
    display: flex;
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

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  & > p {
    font-size: 0.75rem;

    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  }
`;

const VideoWrapper = styled.div`
  width: 50vw;
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
                <VideoWrapper>
                    <VideoPlayer src={'./pokemon.mp4'} poster={'./placeholder.svg'}/>
                </VideoWrapper>
            </Header>
        </Layout>
    )
}
