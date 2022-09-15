import styled from "styled-components";

export const AboutContainer = styled.div`
  margin: 6rem auto;
`

export const AboutArticle = styled.div`
  display: grid;
  grid-template-columns: 33% 66%;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    margin: 4rem 3rem;
    grid-template-columns: 1fr;
  }
`

export const AboutPic = styled.div`
  display: block;

  img {
    margin: 0.8rem 0;
    width: 100%
  }

  @media screen and (max-width: 1120px) {
    margin: 0 0 0 3rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

export const AboutInfo = styled.div`
  margin: 0 0 0 3rem;

  @media screen and (max-width: 1120px) {
    margin: 0 3rem 0 3rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
  `

export const AboutTitle = styled.div`
  font-size: 4rem;
  font-weight: 400;
  line-height: 5rem;

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #e75a58;
    }
  }

  @media screen and (max-width: 1120px) {
    font-size: 3rem;
  }
`

export const AboutCopy = styled.div`
  font-size: 1.75rem;
  margin: 2rem 0;
  line-height: 2.75rem;
`

export const AboutValues = styled.div`
  background: #efefef;
  width: 100%;
`

export const ValuesSection = styled.div`
  max-width: 1100px;
  margin: 6rem auto;
  padding: 6rem 0;
  font-size: 2.25rem;
  font-weight: 600;

  @media screen and (max-width: 1120px) {
    margin: 0 3rem 0 3rem;
  }
`

export const ValuesStatement = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  margin: 3rem 0 0 0;
`

export const ValueIcon = styled.div`
  margin: 0 1rem 0 0;
`

export const ValueDesc = styled.div`
  font-size: 1.75rem;
  font-weight: 400;
  margin: 1rem 0 3rem 2.8rem;
`

export const Footer = styled.div`
  width: 100%;
  margin: 6rem auto;
  max-width: 1100px;

  @media screen and (max-width: 1100px) {
    margin: 6rem 3rem;
    grid-template-columns: 1fr;
  }
`

export const FooterMain = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
`

export const FooterText = styled.div`
  font-size: 1.25rem;
`
export const FooterLinks = styled.div`
  height: 2rem;
  display: flex;
  margin: 2rem auto;
`

export const FooterLink = styled.div`
  display: flex;
  
  margin: 0 1.5rem 0  0;

  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: #e75a58; 
  }
`