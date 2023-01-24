import React, {useEffect, useState} from 'react';
import styled from "styled-components";

interface Props {
    src: string;
    poster: string;
    title: string;
}

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 1536px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  opacity: 1;
`;

const MenuWrapper = styled.div`
  position: absolute;
  bottom: 0.46875rem;
  padding: 0.46875rem 1.25rem;
  flex-direction: column;
  width: 100%;
  z-index: 1;

  @media (min-width: 1024px) {
    padding: 1.0125rem 3.4375rem;
  }
`;

const SliderWrapper = styled.div`
  input[type="range"] {
    font-size: 1.5rem;
    width: 12.5em;
  }

  input[type="range"] {
    color: #DC84F7;
    --thumb-height: 1.125em;
    --track-height: 0.125em;
    --track-color: #9B9C9F;
    --brightness-hover: 180%;
    --brightness-down: 80%;
    --clip-edges: 0.125em;
  }

  input[type="range"] {
    position: relative;
    background: #fff0;
    overflow: hidden;
    width: 100%;
  }

  input[type="range"]:active {
    cursor: grabbing;
  }

  input[type="range"]:disabled {
    filter: grayscale(1);
    opacity: 0.3;
    cursor: not-allowed;
  }

  /* === WebKit specific styles === */

  input[type="range"],
  input[type="range"]::-webkit-slider-runnable-track,
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    //transition: all ease 100ms;
    height: var(--thumb-height);
  }

  input[type="range"]::-webkit-slider-runnable-track,
  input[type="range"]::-webkit-slider-thumb {
    position: relative;
  }

  input[type="range"]::-webkit-slider-thumb {
    --thumb-height: 1.1em;
    --thumb-width: 0em;
    --clip-edges: 0.0125em;
    --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
    --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
    --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
    --clip-further: calc(100% + 1px);
    --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;

    width: var(--thumb-width, var(--thumb-height));
    background: linear-gradient(currentColor 0 0) scroll no-repeat left center /
    \t\t50% calc(var(--track-height) + 1px);
    background-color: currentColor;
    box-shadow: var(--box-fill);
    border-radius: var(--thumb-width, var(--thumb-height));

    filter: brightness(100%);
    clip-path: polygon(100% -1px,
      var(--clip-edges) -1px,
    0 var(--clip-top),
    -100vmax var(--clip-top),
    -100vmax var(--clip-bottom),
    0 var(--clip-bottom),
    var(--clip-edges) 100%,
    var(--clip-further) var(--clip-further));
  }

  input[type="range"]:hover::-webkit-slider-thumb {
    cursor: grab;
    --thumb-height: 0.6em;
    --thumb-width: 0.6em;
    top: 0.25em;

  }

  input[type="range"]:active::-webkit-slider-thumb {
    filter: brightness(var(--brightness-down));
    cursor: grabbing;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
\t\t100% calc(var(--track-height) + 1px);
  }

  input[type="range"]:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  /* === Firefox specific styles === */

  input[type="range"],
  input[type="range"]::-moz-range-track,
  input[type="range"]::-moz-range-thumb {
    appearance: none;
    transition: all ease 100ms;
    height: var(--thumb-height);
  }

  input[type="range"]::-moz-range-track,
  input[type="range"]::-moz-range-thumb,
  input[type="range"]::-moz-range-progress {
    background: #fff;
  }

  input[type="range"]::-moz-range-thumb {
    background: currentColor;
    border: 0;
    width: var(--thumb-width, var(--thumb-height));
    border-radius: var(--thumb-width, var(--thumb-height));
    cursor: grab;
  }

  input[type="range"]:active::-moz-range-thumb {
    cursor: grabbing;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    background: var(--track-color);
  }

  input[type="range"]::-moz-range-progress {
    appearance: none;
    background: currentColor;
    transition-delay: 30ms;
  }

  input[type="range"]::-moz-range-track,
  input[type="range"]::-moz-range-progress {
    height: calc(var(--track-height) + 1px);
    border-radius: var(--track-height);
  }

  input[type="range"]::-moz-range-thumb,
  input[type="range"]::-moz-range-progress {
    filter: brightness(100%);
  }

  input[type="range"]:hover::-moz-range-thumb,
  input[type="range"]:hover::-moz-range-progress {
    filter: brightness(var(--brightness-hover));
  }

  input[type="range"]:active::-moz-range-thumb,
  input[type="range"]:active::-moz-range-progress {
    filter: brightness(var(--brightness-down));
  }

  input[type="range"]:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

`;

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .main_controls {
    display: flex;
    gap: 0.9375rem;
    align-items: center;
  }

  & button {
    background: none;
    border: none;

    & > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const Title = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 41%;
  left: 45.5%;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #D088F1;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const VideoPlayer: React.FC<Props> = ({src, poster, title}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hover, setHover] = useState(true);
    const [timeText, setTimeText] = useState('00:00');
    const [durationText, setDurationText] = useState('00:00');
    const [ios, setIos] = useState(false);

    useEffect(() => {
        function isIOS(): boolean {
            return /iPad|iPhone|iPod/.test(navigator.userAgent);
        }

        setIos(isIOS());
    }, []);


    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleDurationChange = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
        }
    };

    const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (videoRef.current) {
            const skip = Number(e.currentTarget.dataset.skip);
            videoRef.current.currentTime += skip;
            setCurrentTime(videoRef.current.currentTime);
        }
    }

    const handleVolume = (volume: number | null) => {
        if (volume !== null && videoRef.current) {
            videoRef.current.volume = volume;
        }
    };

    const handleEnlarge = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
                // @ts-ignore
            } else if (videoRef.current.mozRequestFullScreen) {
                // @ts-ignore
                videoRef.current.mozRequestFullScreen();
                // @ts-ignore
            } else if (videoRef.current.webkitRequestFullscreen) {
                // @ts-ignore
                videoRef.current.webkitRequestFullscreen();
                // @ts-ignore
            } else if (videoRef.current.msRequestFullscreen) {
                // @ts-ignore
                videoRef.current.msRequestFullscreen();
            } else {
                console.log('Fullscreen not supported');
            }
        } else {
            console.log('No video element');
        }
    }


    useEffect(() => {
        if (!isPlaying) {
            setHover(true);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (videoRef.current) {
            const time = videoRef.current.currentTime;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time - minutes * 60);
            setTimeText(`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
        }
    }, [currentTime]);

    useEffect(() => {
        if (videoRef.current) {
            const time = videoRef.current.duration;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time - minutes * 60);
            setDurationText(`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
        }
    }, [duration]);

    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            if (e.key === ' ') {
                if (videoRef.current) {
                    if (isPlaying) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    } else {
                        videoRef.current.play();
                        setIsPlaying(true);
                    }
                }
            } else if (e.key === 'ArrowRight') {
                if (videoRef.current) {
                    videoRef.current.currentTime += 5;
                }
            } else if (e.key === 'ArrowLeft') {
                if (videoRef.current) {
                    videoRef.current.currentTime -= 5;
                }
            }
        }

        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }

    }, [isPlaying]);

    return (
        <VideoWrapper>
            <Wrapper onMouseEnter={() => (isPlaying ? setHover(true) : null)}
                     onMouseLeave={() => (isPlaying ? setHover(false) : null)}>
                <PlayButton onClick={handlePlayPause} style={{display: ios ? "" : "none"}}>
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                        </svg>
                    )}
                </PlayButton>
                <MenuWrapper style={{opacity: hover ? "1" : "0", display: ios ? "none" : ""}}>
                    <SliderWrapper>
                        <input type="range" min={0} max={videoRef.current ? videoRef.current.duration : 100}
                               value={currentTime}
                               onChange={handleSeek}/>
                    </SliderWrapper>
                    <ControlWrapper>
                        <div className="main_controls">
                            <button onClick={handlePlayPause}>
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                                    </svg>
                                )}
                            </button>
                            <button onClick={handleSkip}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"/>
                                </svg>
                            </button>
                            <button
                                onClick={() => handleVolume(videoRef.current ? (videoRef.current.volume === 0 ? 0.5 : 0) : null)}>
                                {videoRef.current ? videoRef.current.volume === 0 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
                                    </svg>
                                ) : null}
                            </button>
                            <p>
                                {timeText} / {durationText}
                            </p>
                        </div>
                        <div className="enlarge">
                            <button onClick={handleEnlarge}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
                                </svg>
                            </button>
                        </div>
                    </ControlWrapper>
                </MenuWrapper>
                <Video
                    ref={videoRef}
                    controls={false}
                    controlsList="nodownload"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onDurationChange={handleDurationChange}
                    poster={poster}
                >
                    <source src={src} type={'video/mp4'}/>
                </Video>
            </Wrapper>
            <Title>{title}</Title>
        </VideoWrapper>
    );
};

export default VideoPlayer;
