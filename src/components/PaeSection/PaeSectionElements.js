import styled from "styled-components";

export const CaseStudyContainer = styled.div`
  margin: 6rem auto;

  @media screen and (max-width: 1240px) {
    /* width: 100%; */
 }
`

export const CaseStudyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 6rem auto;

  @media screen and (max-width: 1100px) {
    padding: 0 3rem;
    flex-direction: column-reverse;
  }
`

export const CaseStudyDesc = styled.div`
  width: 80%;

  @media screen and (max-width: 1180px) {
      margin: 3rem 0 0 3rem;
    }
  
    @media screen and (max-width: 600px) {
      margin: 3rem 0 0 0;
    }
  
`

export const CaseStudyTitle = styled.div`
  font-size: 3rem;
  font-weight: 500;
`

export const CaseStudySubTitle = styled.div`
  font-size: 1.75rem;
  margin: 0 0 2rem 0;
`

export const CaseStudyFunctions = styled.div`
  font-size: 1.25rem;
  font-style: italic;

  @media screen and (max-width: 1100px) {
    margin: 0 0 3rem 0;
  }
`

export const CaseStudyHeaderImage = styled.div`
  text-align: center;
  
  img {
    max-width: 80%;
  }
  
  @media screen and (max-width: 1100px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto;
    width: 100%;
  }
`

export const CaseStudySectionGrey = styled.div`
  background: #F1F1F1;
  margin: 0 auto;
  padding: 6rem 0;

  li span {
    font-weight: 600;
  }

  @media screen and (max-width: 1100px) {
    display: block;
    padding: 6rem 3rem;
  }
`

export const CaseStudySectionBlue = styled.div`
  background: #005487;
  color: #ffffff;
  margin: 0 auto;
  padding: 6rem 0;

  @media screen and (max-width: 1100px) {
    display: block;
    padding: 6rem 3rem;
  }
`

export const CaseStudySectionGreySplit = styled.div`
  background: #F1F1F1;  
  margin: 0 auto;
  padding: 6rem 0;
  width: 100%;
`

export const CaseStudySectionSplit = styled.div` 
  margin: 0 auto;
  padding: 6rem 0;
  width: 100%;
`

export const CaseStudySection = styled.div`
  margin: 0 auto;
  padding: 6rem 0;
  max-width: 1100px;

  @media screen and (max-width: 1240px) {
    padding: 6rem 3rem;
 }
`

export const CaseStudyArticle = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const CaseStudyArticleSplit = styled.div`
  margin: 0 3rem 0 0;
  width: 100%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const CaseStudyArticleNarrow = styled.div`
  margin: 0 3rem 0 0;
  width: 40%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const CaseStudyArticleTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
`

export const CaseStudyArticleText = styled.div`
  font-size: 1.75rem;

  p span {
    font-style: italic;
    font-weight: 600;
  }
`

export const CaseStudySplitLayout = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  @media screen and (max-width: 1100px) {
    display: block;
    margin: 0 3rem;
  }
`

export const CaseStudyImg = styled.div`
  text-align: center;

  img {
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.05);
    line-height: 0;
    max-width: 100%;
    height: auto;
  }
`

export const CaseStudyImgSplit = styled.div`

  img {
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.05);
    line-height: 0;
    width: 100%;
    height: auto;
  }
`

export const CaseStudyImg2up = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 
 @media screen and (max-width: 1100px) {
  display: block;
  text-align: center;
  margin: 0 auto;
 }

 img {
  max-width: 49%;
  height: min-content;

  @media screen and (max-width: 1100px) {
    max-width: 100%;
  }
 }
`

export const CaseStudyImgStacked = styled.div`
  text-align: center;
  img {
    box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.05);
    line-height: 0;
    max-width: 100%;
    height: auto;
    padding: 0 0 6rem 0;
  }
`

export const CaseStudyCaption = styled.div`
  font-size: 1.25rem;
  font-style: italic;
  text-align: right;

  @media screen and (max-width: 1100px) {
      text-align: left;
    }

  div {
    max-width: 760px;
    margin: 0 auto;
  }
`

export const CaseStudyHows = styled.div`
  line-height: 4rem;
  font-size: 2rem;
  margin: 0 auto;
  max-width: 1100px;

  @media screen and (max-width: 1100px) {
    line-height: 3rem;
    font-size: 1.5rem;
  }
`

export const Footer = styled.div`
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