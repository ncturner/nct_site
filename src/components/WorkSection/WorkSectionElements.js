import styled from "styled-components";

export const WorkContainer = styled.div `
  margin: 6rem auto;
  max-width: 1100px;

  @media screen and (max-width: 1240px) {
    width: 90%;
 }
`

export const WorkImage = styled.div`
  background: #000000;
  height: 40rem;
  width: 100%;
  display: flex;
  cursor: pointer;
  margin: 5rem auto;

  img {
    align-self: center;
    justify-content: center;
    margin: 0 auto;
    width: 50%;
  }

  &:hover {
    background: #e75a58;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 1240px) {
    background: #000000;
    height: 30rem;
    display: flex;
    margin: 5rem auto;
  }
`

export const WorkHeader = styled.div`
    font-size: 3rem;
    font-weight: 500;
    margin: 0 0 3rem 0;
`

export const Footer = styled.div`
width: 100%;
margin: 6rem auto;
max-width: 1100px;

@media screen and (max-width: 1100px) {
  margin: 6rem 0;
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