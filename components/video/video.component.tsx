import React, {useEffect, useState} from 'react';
import styled from "styled-components";

interface Props {
    src: string;
    poster: string;
}

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
`;

const VideoPlayer: React.FC<Props> = ({src, poster}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hover, setHover] = useState(true);
    const [timeText, setTimeText] = useState('00:00');
    const [durationText, setDurationText] = useState('00:00');

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
        <Wrapper onMouseEnter={() => (isPlaying ? setHover(true) : null)}
                 onMouseLeave={() => (isPlaying ? setHover(false) : null)}>
            <MenuWrapper style={{opacity: hover ? "1" : "0"}}>
                <SliderWrapper>
                    <input type="range" min={0} max={videoRef.current ? videoRef.current.duration : 100}
                           value={currentTime}
                           onChange={handleSeek}/>
                </SliderWrapper>
                <ControlWrapper>
                    <button onClick={handlePlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    <p>
                        {timeText} / {durationText}
                    </p>
                </ControlWrapper>
            </MenuWrapper>
            <Video
                ref={videoRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onDurationChange={handleDurationChange}
                controls={false}
                poster={poster}
            >
                <source src={src} type={'video/mp4'}/>
            </Video>
        </Wrapper>
    );
};

export default VideoPlayer;
