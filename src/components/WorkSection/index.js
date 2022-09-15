import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import IQLogo from '../../assets/imgs/iqvia-logo.png'
import PAELogo from '../../assets/imgs/PAE-logo.png'
import { WorkContainer, WorkHeader, WorkImage, Footer, FooterMain, FooterText, FooterLinks, FooterLink } from './WorkSectionElements';


export const WorkSection = () => {
  return (
    <WorkContainer>
      <WorkHeader>
        Recent Work
      </WorkHeader>
      <a href="/Iqvia"><WorkImage>
        <img src={IQLogo} alt="IQVIA Logo" />
      </WorkImage></a>
      <a href="/Pae"><WorkImage>
        <img src={PAELogo} alt="People Are Everything Logo" />
      </WorkImage></a>
      <Footer>
        <FooterMain>
          Don't hesitate to investigate!
        </FooterMain>
        <FooterText>
          Say hi and see what I'm up to.
        </FooterText>
        <FooterLinks>
          <FooterLink><a href="mailto: nicholas.c.turner@gmail.com"><MdEmail /></a></FooterLink>
          <FooterLink><a href="https://www.linkedin.com/in/nickcturner" target="blank"><FaLinkedin /></a></FooterLink>
          <FooterLink><a href="https://dribbble.com/ncturner" target="blank"><FaDribbbleSquare /></a></FooterLink> 
        </FooterLinks>
      </Footer>
    </WorkContainer>
  )
}

export default WorkSection
