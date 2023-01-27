import styled from "styled-components";

interface CategoryButtonProps {
    title: string
    img: string
}

const Wrapper = styled.div`
  width: 100%;
  height: 3.125rem;
  background: linear-gradient(90deg, #DC84F7 100%, #DC84F7 50%);
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  padding: 0 1.5625rem;
  text-transform: uppercase;
`;

const IconWrapper = styled.div`
  position: absolute;
  transform: translateY(-10%);
  top: 0;
  right: 5%;
`;

const Icon = styled.img`

`;

const CategoryButton = ({title, img}: CategoryButtonProps) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Title className="righteous">
                    {title}
                </Title>
                <IconWrapper>
                    <Icon src={img} alt={"icon for " + title}/>
                </IconWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

export default CategoryButton;
