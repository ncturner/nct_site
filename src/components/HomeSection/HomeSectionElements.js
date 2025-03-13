import styled from "styled-components";

export const HomeContainer = styled.div`
  
`

export const HomeHeadline = styled.div`
  font-weight: 600;
  font-size: 1.85rem;
  margin: 2rem;
`

export const HomeBkgd = styled.div`
  position: relative;
  width:100%;
  overflow: visible;
`

export const HomePic = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 88vh;

  img {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    top: 0;
    z-index: 0;
    object-fit: cover;
  }
`


export const HomeSubhead = styled.div`
  font-weight: 200;
  font-size: 3rem;
  margin: 0 0 2rem 0;
  line-height: 3.5rem;
`

export const HomeContent = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 2rem;
  width: 50%;

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #e75a58;
    }
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
`

