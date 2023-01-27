import styled from "styled-components";

interface FeaturedCategoryProps {
    img: string
    title: string
    tags: string[];
    viewers: string
}

const Wrapper = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  //gap: 1.5625rem;
  gap: 1rem;
  scroll-snap-align: center;

  @media (min-width: 1024px) {
    width: 12.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  & > img {
    width: 10rem;
    object-fit: cover;
    height: 15rem;
    object-position: center;

    @media (min-width: 1024px) {
      width: 12.5rem;
      height: 17.5rem;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 1024px) {
    gap: 0.35rem;
  }
`;

const Title = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.15rem;
  font-weight: 700;
`;

const Watchers = styled.p`
  font-size: 0.8rem;
  opacity: 0.5;
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const CategoryTag = styled.p`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: #212122;
  color: #BDBDBE;
  border-radius: 10px;
  width: fit-content;
`;

const FeaturedCategory = ({img, title, tags, viewers}: FeaturedCategoryProps) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={img} alt={"poster of " + title}/>
            </ImageWrapper>
            <InfoWrapper>
                <Title>{title}</Title>
                <Watchers>{viewers} viewers</Watchers>
                <CategoryWrapper>
                    {tags.slice(0, 2).map((tag, index) => (
                        <CategoryTag key={index}>{tag}</CategoryTag>
                    ))}
                </CategoryWrapper>
            </InfoWrapper>
        </Wrapper>
    );
};

export default FeaturedCategory;
