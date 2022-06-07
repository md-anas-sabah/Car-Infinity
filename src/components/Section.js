import React from "react";
import styledComponents from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1 className="h1">{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Button>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="./images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styledComponents.div`                       
    height:100vh;
    width:100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    //  gap: 25rem;
    justify-content: space-between;
    align-items: center;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};

`;

const ItemText = styledComponents.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styledComponents.div`
    display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px){
       flex-direction: column;
   }
`;

const LeftButton = styledComponents.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    // margin: 20px;
    margin: 8px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`;

const RightButton = styledComponents(LeftButton)`
        background:white;
        color:black;
        opacity:0.85;
`;
const Button = styledComponents.div``;

const DownArrow = styledComponents.img`
    margin-top:20px;
    height:40px;
    overflow-x: hidden;
  animation: animateDown infinite 1.5s;
   
`;
