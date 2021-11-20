import React from "react";


import {
BioContainer,
BioWrapper,
BioRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
ImgWrap,
Img
} from './BioElements';

const BioSection = ({
    lightBg,
    imgStart,
    topLine,
    lightText,
    headline,
    description,
    img,
    alt,
    id,
    primary,
    darkText,
  }) => {
    console.log(primary);
    return (
      <>
        <BioContainer lightBg={lightBg} id={id}>
          <BioWrapper>
            <BioRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </BioRow>
          </BioWrapper>
        </BioContainer>
      </>
    );
  };
  
  export default BioSection;