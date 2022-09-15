import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import PaeHeader from '../../assets/imgs/pae-header.png'
import PaeOldLogo from '../../assets/imgs/pae-old-logo.png'
import PaeHeart from '../../assets/imgs/pae-heart.png'
import PaeDemo from '../../assets/imgs/pae-demo.png'
import PaeAdmin1 from '../../assets/imgs/pae-admin1.png'
import PaeAdmin2 from '../../assets/imgs/pae-admin2.png'
import PaeUser1 from '../../assets/imgs/pae-user1.png'
import PaeUser2 from '../../assets/imgs/pae-user2.png'
import UserJourney from '../../assets/imgs/pae-user-journeys.png'
import Persona from '../../assets/imgs/pae-persona.png'
import PaeWireframes from '../../assets/imgs/pae-wireframes.png'
import PaeBrand1 from '../../assets/imgs/pae-brand1.png'
import PaeBrand1Tag from '../../assets/imgs/pae-brand1-tag.png'
import PaeBrand1Mark from '../../assets/imgs/pae-brand1-mark.png'
import PaeBrand2 from '../../assets/imgs/pae-brand2.png'
import PaeBrand2Tag from '../../assets/imgs/pae-brand2-tag.png'
import PaeBrand2Icon from '../../assets/imgs/pae-brand2-icon.png'
import PaeBrand3 from '../../assets/imgs/pae-brand3.png'
import PaeBrand3Tag from '../../assets/imgs/pae-brand3-tag.png'
import PaeBrand3Variant from '../../assets/imgs/pae-brand3-variants.png'
import PaeLanding from '../../assets/imgs/pae-landing.png'
import PaeReview1 from '../../assets/imgs/pae-review1.png'
import PaeReview2 from '../../assets/imgs/pae-review2.png'
import PaeReview3 from '../../assets/imgs/pae-review3.png'
import { CaseStudyContainer, CaseStudyHeader, CaseStudyDesc, CaseStudyTitle, CaseStudySubTitle, CaseStudySection, CaseStudySectionSplit, CaseStudySectionGreySplit, CaseStudySplitLayout, CaseStudyArticleSplit, CaseStudyArticleNarrow, CaseStudyImgSplit, CaseStudyFunctions, CaseStudyHeaderImage, CaseStudySectionGrey, CaseStudyArticle, CaseStudyArticleTitle, CaseStudyArticleText, CaseStudyImg, CaseStudyImg2up, CaseStudyCaption, Footer, FooterMain, FooterText, FooterLinks, FooterLink } from './PaeSectionElements';

const PaeSection = () => {
  return (
    <CaseStudyContainer>
      <CaseStudyHeader>
        <CaseStudyDesc>
          <CaseStudyTitle>
            CA Short People Are Everything
          </CaseStudyTitle>
          <CaseStudySubTitle>
            Platform Design and Branding Exploration
          </CaseStudySubTitle>
          <CaseStudyFunctions>
            Product Design, User Research, Prototyping and Testing, Brand Design
          </CaseStudyFunctions>
        </CaseStudyDesc>
        <CaseStudyHeaderImage>
          <img src={PaeHeader} alt="pae logo variation" />
        </CaseStudyHeaderImage>
      </CaseStudyHeader>
        <CaseStudySectionGrey>
        <CaseStudyArticle>
          <CaseStudyArticleTitle>
            Overview
          </CaseStudyArticleTitle>
          <CaseStudyArticleText>
            <p>CA Short engaged the CodeScience Product Design Team for a 2 week design sprint to explore how they could improve adoption 
              of their platform with their own internal teams and enhance their current UI.</p>

            <p>The goal of this project was to discover, design and test new features to better understand what improvements to the current 
              design would drive users want to use the platform more often. We also worked on developing an updated brand for the platform 
              during the sprint.</p>
          </CaseStudyArticleText>
        </CaseStudyArticle>
      </CaseStudySectionGrey>
      <CaseStudySectionSplit>
        <CaseStudySplitLayout>
          <CaseStudyArticleSplit>
            <CaseStudyArticleTitle>
              Background
            </CaseStudyArticleTitle>
            <CaseStudyArticleText>
              <p>CA Short is an employee engagement and recognition platform that has been in business for over 80 years. Through their People Are 
                Everything&#40;PAE&#41; recognition platform, they help organizations inspire, reward and retain their most valuable assets - their people. 
                The platform offers a completely configurable experience that can be tailored to any company&#39;s needs. From service awards to gifts, 
                they offer thousands of options to fit various businesses cultures and needs.</p>

              <p>A big component of this engagement early on was client education. Since IQVIA had developed a design system and components 
              using React as their framework, their vision was to have consistency across all their products whether they were built on Salesforce 
              or any other platform. But the fact was that bringing in a custom design system would require a large lift and they would ultimately 
              lose out on a lot of the rich features and future enhancements that Salesforce offers. Much of the work during this phase was 
              demonstrating why and how IQVIA could leverage native features and build custom solutions correctly on the platform while still 
              embodying their design philosophies and brand identity.</p>
            </CaseStudyArticleText>
          </CaseStudyArticleSplit>
          <CaseStudyImgSplit>
            <img src={PaeOldLogo} alt="Former People Are Everything Logo" />
            <CaseStudyCaption>
              <div>Original People Are Everything logo</div>
            </CaseStudyCaption>
          </CaseStudyImgSplit>
        </CaseStudySplitLayout>
      </CaseStudySectionSplit>
      <CaseStudySectionGreySplit>
        <CaseStudySplitLayout>
          <CaseStudyHeaderImage>
            <img src={PaeHeart} alt="People Are Everything heart icon" />
          </CaseStudyHeaderImage>
        <CaseStudyArticleSplit>
          <CaseStudyArticleTitle>
            Understanding the Problem
          </CaseStudyArticleTitle>
          <CaseStudyArticleText>
            <p>The CA Short team put a lot of work into their latest iteration of the PAE platform but they weren&#39;t happy with the lack of 
              adoption from their own employees and wanted to better understand where they missed the mark and what improvements they 
              needed to prioritize first.</p>

            <p>I started by getting familiar with and assessing the current implementation. The team interviewed stakeholders, administrators and 
              employees to understand what was working well and uncover any pain points that they were experiencing.</p>

            <p><span>The goal of our research was to:</span></p>
            <ul>
              <li>
                Understand what value the platform currently provided to users
              </li>
              <li>
                What pain points where users experiencing
              </li>
            </ul>
          </CaseStudyArticleText>
        </CaseStudyArticleSplit>
        </CaseStudySplitLayout>
      </CaseStudySectionGreySplit>
      <CaseStudySectionGrey>
        <CaseStudyArticle>
          <CaseStudyArticleText>
            <p>We started by interviewing stakeholders to understand the business goals and outcomes they would like to achieve. The problem 
              wasn&#39;t that people didn&#39;t want to recognize their coworker&#39;s achievements. That seemed to be the easy part. But the 
              current version of the platform was implemented with very little input from design and the information that was there wasn&#39;t 
              organized in a way that allowed users to interact with one another or easily understand where to go in order to browse rewards 
              and redeem their own points.</p>
          </CaseStudyArticleText>
          <CaseStudyImg>
            <img src={PaeDemo} alt="CA Short Demo Environment" />
            <CaseStudyCaption>
              <div>CA Short Demo Environment</div>
            </CaseStudyCaption>
          </CaseStudyImg>
          <CaseStudyArticleText>
            <p>Next, we conducted an interview with an administrator to better understand what they needed, their pain points and where they 
              saw employees dropping from the platform. Configuring the platform wasn&#39;t an issue they felt needed to be addressed. Instead they 
              really wanted a way to share achievements with everyone and improve engagement for employees. They felt that if their teams could 
              more easily see what someone was doing in the company, recognize their coworkers and celebrate each other that might inspire team m
              embers to seek out ways to be recognized themselves.</p>
          </CaseStudyArticleText>
          <CaseStudyImg2up>
            <img src={PaeAdmin1} alt="PAE Admin Interview" />
            <img src={PaeAdmin2} alt="AE Admin Interview" />
          </CaseStudyImg2up>
          <CaseStudyCaption>
            Account and channel threads in a client&#39;s instance.
          </CaseStudyCaption>
          <CaseStudyArticleText>
            <p>Last, we spoke with several employees to get their take on why they didn&#39;t spend more time with the application. They all agreed 
              that the platform was an important part of the company&#39;s culture, but found it hard to find what they were looking for or where to 
              go to see what others were being recognized for. It didn&#39;t help the a lot of the UI elements didn&#39;t feel celebratory or fun either.</p>
          </CaseStudyArticleText>
          <CaseStudyImg2up>
            <img src={PaeUser1} alt="PAE User Interview" />
            <img src={PaeUser2} alt="PAE User Interview" />
          </CaseStudyImg2up>
          <CaseStudyCaption>
            Home screen and shopping experience in a client&#39;s instance.
          </CaseStudyCaption>
        </CaseStudyArticle>
      </CaseStudySectionGrey>
      <CaseStudySectionSplit>
        <CaseStudySplitLayout>
          <CaseStudyArticleSplit>
            <CaseStudyArticleTitle>
              Prioritizing Ideas
            </CaseStudyArticleTitle>
            <CaseStudyArticleText>
              <p>After hearing from all the interview participants, we began to organize their feedback into themes and prioritize the problems we could 
                attempt to solve for. For this project we wanted to develop detailed personas to help the entire team align on each user&#39;s journey. We knew 
                the branding elements could play a big role in any UI improvements we wanted to work on, so we decided to spend the first week developing a 
                few logo options with accompanying color palettes. Initial wireframe sketches and layouts were developed in tandem with the branding 
                exercises. Throughout the first week, we met daily with the stakeholders to review or progress and ensure that our output aligned 
                with their expectations.</p>
            </CaseStudyArticleText>
          </CaseStudyArticleSplit>
          <CaseStudyImgSplit>
            <img src={UserJourney} alt="User journey map output" />
            <img src={Persona} alt="Persona example" />
            <CaseStudyCaption>
              User jounrey and persona examples
            </CaseStudyCaption>
          </CaseStudyImgSplit>
        </CaseStudySplitLayout>
      </CaseStudySectionSplit>
      <CaseStudySection>
        <CaseStudyImg>
          <img src={PaeWireframes} alt="CA Short Demo Environment" />
          <CaseStudyCaption>
            Early wireframe sketches of landing pages for each identified persona.
          </CaseStudyCaption>
        </CaseStudyImg>
      </CaseStudySection>
      <CaseStudySectionGrey>
        <CaseStudyArticle>
          <CaseStudyArticleTitle>
            Branding Options
          </CaseStudyArticleTitle>
          <CaseStudyArticleText>
            <p><span>Option #1</span></p>
          </CaseStudyArticleText>
          <CaseStudyImg>
            <img src={PaeBrand1} alt="CA Short Demo Environment" />
          </CaseStudyImg>
          <CaseStudyImg2up>
            <img src={PaeBrand1Tag} alt="PAE Admin Interview" />
            <img src={PaeBrand1Mark} alt="AE Admin Interview" />
          </CaseStudyImg2up>
          <CaseStudyArticleText>
            <p><span>Option #2</span></p>
          </CaseStudyArticleText>
          <CaseStudyImg>
            <img src={PaeBrand3} alt="CA Short Demo Environment" />
          </CaseStudyImg>
          <CaseStudyImg2up>
            <img src={PaeBrand3Tag} alt="PAE Admin Interview" />
            <img src={PaeBrand3Variant} alt="AE Admin Interview" />
          </CaseStudyImg2up>
          <CaseStudyArticleText>
            <p><span>Option #3</span></p>
          </CaseStudyArticleText>
          <CaseStudyImg>
            <img src={PaeBrand2} alt="CA Short Demo Environment" />
          </CaseStudyImg>
          <CaseStudyImg2up>
            <img src={PaeBrand2Tag} alt="PAE Admin Interview" />
            <img src={PaeBrand2Icon} alt="AE Admin Interview" />
          </CaseStudyImg2up>
        </CaseStudyArticle>
      </CaseStudySectionGrey>
      <CaseStudySectionSplit>
        <CaseStudySplitLayout>
          <CaseStudyArticleNarrow>
            <CaseStudyArticleTitle>
              Designing
            </CaseStudyArticleTitle>
            <CaseStudyArticleText>
              <p>After several reviews with stakeholders and settling on a direction for the branding, the team agreed to focus on the participant 
                experience, specifically the onboarding process, message feeds and the shopping experience. Addressing participant needs would be 
                the biggest driver of engagement on the platform and would allow for the exploration of UI updates. The goal of this phase was 
                to produce a clickable prototype that incorporated employee feedback and could be tested with more employees in the future.</p>
            </CaseStudyArticleText>
          </CaseStudyArticleNarrow>
          <CaseStudyImgSplit>
            <div>
              <img src={PaeLanding} alt="CRA Day in the Life" />
            </div>
            <CaseStudyCaption>
              Updated participant landing page
            </CaseStudyCaption>
          </CaseStudyImgSplit>
        </CaseStudySplitLayout>
      </CaseStudySectionSplit>
      <CaseStudySection>
        <CaseStudyImg>
          <img src={PaeReview1} alt="CA Short client review demo" />
          <img src={PaeReview2} alt="CA Short client review demo" />
          <img src={PaeReview3} alt="CA Short client review demo" />
        </CaseStudyImg>
      </CaseStudySection>
      <CaseStudySectionGrey>
          <CaseStudyArticle>
            <CaseStudyArticleTitle>
              Results and Takeaways
            </CaseStudyArticleTitle>
            <CaseStudyArticleText>
              <p>The overall feedback from stakeholders and users was very positive. By introducing a thorough onboarding walkthrough and steamlined shopping experience 
                that was tailoried to each individual, employess felt like they had been considered. They were excited to see the new designs implemented and felt it would 
                increase the time they spent on the platform.</p>

              <p>Some takeaways from this project are:</p>
              <ul>
                <li>
                <span>It&#39;s critical to find a balance between business requirements and user needs.</span> This two things don&#39;t always align but both can be satisfied, and 
                even influenced, by talking to and understanding users on a deeper level.
                </li>
                <li>
                <span>Research matters and data backed solutions will always win.</span> Having data to point to when skateholders wanted to know &#39;why&#39; we made a decision had a huge 
                impact on how affective we could be as a design team.
                </li>
                <li>
                <span>Design sprints can yield great results and add value in a short amount of time.</span>For this engagement, the team followed much of the guidance and ceremonies 
                suggested in the book SPRINT by Jake Knapp. This helped us define project success, document our process and execute effienciently as a team to meet project goals.
                </li>
                <li>
                  <span>Design needs to be part of implementation.</span> This engagement was only to consult the client on the recomendations that came from user research and design. 
                  Unfortunately, the client wanted to handle the  implementation of prioritzed features and there was not a way for design to particiapate in that process.
                </li>
              </ul>
            </CaseStudyArticleText>
          </CaseStudyArticle>
        </CaseStudySectionGrey>

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
    </CaseStudyContainer>
  )
}

export default PaeSection