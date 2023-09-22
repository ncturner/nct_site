import React from 'react'
import BioPic from '../../assets/imgs/bio.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { AboutContainer, AboutArticle, AboutPic, AboutInfo, AboutTitle, AboutCopy, AboutValues, ValuesSection, ValuesStatement, ValueIcon, ValueDesc, Footer, FooterMain, FooterText, FooterLinks, FooterLink } from './AboutSectionElements';

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutArticle>
        <AboutPic>
          <img src={BioPic} alt="Nick Turner" />
        </AboutPic>
        <AboutInfo>
          <AboutTitle>
            Principal Product Designer @ <a href="https://www.buildium.com/" target="blank">Builidium</a>
          </AboutTitle>
          <AboutCopy>
          For the last 8 years I have been working as a ux and product design lead, helping agile teams plan, build, and bring 
          products to market. After graduating in 2009 with a BFA in graphic design from the University of Tennessee at Chattanooga, 
          I worked as a designer at marketing and ad agencies, startups, and large enterprise companies before discovering and 
          dedicating my career to experience and product design. Over the course of more than 15 years, I have worked with and for 
          a wide range of clients and companies in a variety of industries including Ford, Rocket Mortgage, IQVIA, Blue Cross 
          Blue Shield, Salesforce, Mailchimp and Twilio.
          </AboutCopy>
          <AboutCopy>
          In my role as principal product designer at Builidum, I am part of a diverse user experience team focused on the needs 
          of people running property management companies and the staff, owners, and residents they interact with. I support 
          multiple scrum teams collaborating closely with product managers and engineering teams to define product vision, roadmaps, 
          and requirements for new offerings and existing product releases. Using a human-centered design approach, I coordinate 
          research efforts in order to understand user problems through a variety of methodologies including user interviews, 
          prototyping, and facilitating ux activities with my teams intended to create a shared understanding of the problem 
          space and develop deep empathy for our customers. In addition to ux and product work, I lead internal initiatives, 
          mentor associate designers, and help to design, maintain and improve the organization’s robust design system. 
          </AboutCopy>
        </AboutInfo>
      </AboutArticle>
      <AboutValues>
        <ValuesSection>
          My Values
          <ValuesStatement>
            <ValueIcon>😇</ValueIcon>Be Open. Be Honest. Build Trust.
          </ValuesStatement> 
          <ValueDesc>
            Relationships are all about trust and I believe nothing can build that trust faster than being open and honest with each other.
            Real opportunities for learning and growth happen when people feel free to truly be themselves. As a life long learner, I always want to
            help facilitate the creation spaces and relationships that are inclusive, welcoming and where others can trust that being honest is the best policy.
          </ValueDesc>
          <ValuesStatement>
            <ValueIcon>🤔</ValueIcon>Allow yourself to fail.
          </ValuesStatement>
          <ValueDesc>
            Embracing failure is hard, but it's a great way to better understand how to avoid the same pitfalls in the future. My biggest advances
            have often come after analyzing a failure and learning from it. Over the years I've trained myself to see failure as a success. Maybe it's my 
            optimism, but I also see it as an essential part of the learning process.
          </ValueDesc>
          <ValuesStatement>
            <ValueIcon>🙌</ValueIcon>Lift up those around you.
          </ValuesStatement>
          <ValueDesc>
            I wouldn't be where I am without all the support I've had over the years from my family, my friends, and my colleagues. They've supported
             me when I'm successful and when I'm struggling with something. It's important that I give that support back to others as often as possible. 
             Whether it's mentoring, knowledge sharing or just being there to listen, I want to be a force of positivity and help build up those around me.
          </ValueDesc>
          <ValuesStatement>
            <ValueIcon>🧘</ValueIcon>Take care of yourself.
          </ValuesStatement>
          <ValueDesc>
            Possibly the most important value of mine is making sure I'm healthy - mentally, physically and emotionally. I can't be good to others if I'm not good 
            to myself. So, yes, I take time to disconnect, realign and recharge. We all need that and it's definitely a priority for me.    
          </ValueDesc>
        </ValuesSection>
      </AboutValues>
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
    </AboutContainer>
    
  )
}

export default AboutSection