import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import CRAFlow from '../../assets/imgs/cra-sv-flow.png'
import CRADay from '../../assets/imgs/cra-day.png'
import CRAPain from '../../assets/imgs/cra-painpoints.png'
import CRAApproval from '../../assets/imgs/cra-approval-flow.png'
import Headers from '../../assets/imgs/shared-header.png'
import Enroll from '../../assets/imgs/shared-enrollment.png'
import Summary from '../../assets/imgs/shared-summary.png'
import SharedFooter from '../../assets/imgs/shared-footer.png'
import Overview from '../../assets/imgs/cra-overview.png'
import SiteVisit from '../../assets/imgs/cra-site-visits.png'
import Consents from '../../assets/imgs/cra-consents.png'
import QandA from '../../assets/imgs/cra-qanda.png'
import { CaseStudyContainer, CaseStudyHeader, CaseStudyDesc, CaseStudyTitle, CaseStudySubTitle, CaseStudyFunctions, CaseStudyHeaderImage, CaseStudySectionGrey, CaseStudySectionBlue, CaseStudySectionSplit, CaseStudySectionGreySplit, CaseStudySection, CaseStudyArticle, CaseStudyArticleSplit, CaseStudyArticleTitle, CaseStudyArticleText, CaseStudyImg, CaseStudyImgSplit, CaseStudyImg2up, CaseStudyImgStacked, CaseStudyCaption, CaseStudySplitLayout, CaseStudyHows, Footer, FooterMain, FooterText, FooterLinks, FooterLink } from './IqviaSectionElements';

const IqviaSection = () => {
  return (
    <CaseStudyContainer>
      <CaseStudyHeader>
        <CaseStudyDesc>
          <CaseStudyTitle>
            IQVIA CRA Central
          </CaseStudyTitle>
          <CaseStudySubTitle>
            Salesforce Product Design
          </CaseStudySubTitle>
          <CaseStudyFunctions>
            Product Design, User Research, Prototyping and User Testing
          </CaseStudyFunctions>
        </CaseStudyDesc>
        <CaseStudyHeaderImage>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/_EnDpqd1kr0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </CaseStudyHeaderImage>
      </CaseStudyHeader>
      <CaseStudySectionGrey>
        <CaseStudyArticle>
          <CaseStudyArticleTitle>
            Overview
          </CaseStudyArticleTitle>
          <CaseStudyArticleText>
            <p>IQVIA is a clinical trial organization that has traditionally been a service provider for administrating large trials 
            for new drugs and treatments, as well as collecting and organizing the data that such trials produce. They were looking 
            for a solution that would allow them to transition into the product space and provide superior security for the health 
            care data they collect.</p>

            <p>IQVIA and Salesforce partnered together to bring the Digital Trial Management Suite 	&#40;DTMS&#41; to market. In addition to 
            the security model, Salesforce offered several other features that IQVIA could leverage in it&#39;s products, including:</p>
            <ul>
              <li>
                Built in administration backend allowing organization to build fast and iterate quickly
              </li>
              <li>
                Clicks not code aka declarative programing
              </li>
              <li>
                A licensing model to take your products to market
              </li>
            </ul>
            <p>Running a clinical trial takes a massive amount of coordination and effort from multiple tenants and this suite of products 
            exemplified that complexity. IQVIAs data needed to be tightly controlled, handled by unique personas and flow between all the 
            applications they wanted to develop.</p>
          </CaseStudyArticleText>
        </CaseStudyArticle>
      </CaseStudySectionGrey>
      <CaseStudySection>
        <CaseStudyArticleTitle>
          Background
        </CaseStudyArticleTitle>
        <CaseStudyArticleText>
          <p>In order to even begin work on a project this large a lot of time was spent deep diving into IQVIA&#39;s internal products, 
          understanding how they were built and how they are used. Our team was given access to a number of user interviews and process 
          flow documentation, in addition to many knowledge transfer sessions.</p>

          <p>A big component of this engagement early on was client education. Since IQVIA had developed a design system and components 
          using React as their framework, their vision was to have consistency across all their products whether they were built on Salesforce 
          or any other platform. But the fact was that bringing in a custom design system would require a large lift and they would ultimately 
          lose out on a lot of the rich features and future enhancements that Salesforce offers. Much of the work during this phase was 
          demonstrating why and how IQVIA could leverage native features and build custom solutions correctly on the platform while still 
          embodying their design philosophies and brand identity.</p>
        </CaseStudyArticleText>
        <CaseStudyImg>
          <img src={CRAFlow} alt="CRA Flow Dcumentation" />
          <CaseStudyCaption>
            <div>High level process flow documentation for a site visit</div>
          </CaseStudyCaption>
        </CaseStudyImg>
      </CaseStudySection>
      <CaseStudySectionGreySplit>
        <CaseStudySplitLayout>
          <CaseStudyArticleSplit>
            <CaseStudyArticleTitle>
              Starting the Work
            </CaseStudyArticleTitle>
            <CaseStudyArticleText>
              <p>DTMS consists of 4 applications, CTMS &#40;Clinical Trial Management System&#41;, RBQM &#40;Risk-Based Quality Management&#41;, 
              CRA Central &#40;Clinical Research Associate Central&#41; and eTMF &#40;Electronic Trial Master File&#41;. Our teams were split 
              across these tracks and we performed weekly cross team check ins to share information, progress and feedback.</p>

              <p>I was assigned to CRA Central where we had the luxury of working with a Clinical Research Associate as our Product Owner. 
              Having a Subject Matter Expert to help us understand the day-to-day work of a CRA proved to be a great catalyst in understanding 
              the users problems and the areas of focus for the application, which were:</p>
              <ul>
                <li>
                  Improved site visit efficiency to give CRAs more time to focus on high-value tasks involving patient safety
                </li>
                <li>
                  Dashboards enable quick insight into site health, report statuses and visitation statistics
                </li>
                <li>
                  Automation to shorten report review and approval cycle times 
                </li>
              </ul>
            </CaseStudyArticleText>
          </CaseStudyArticleSplit>
          <CaseStudyImgSplit>
            <img src={CRADay} alt="CRA Day in the Life" />
            <img src={CRAPain} alt="CRA Pain Points" />
            <CaseStudyCaption>
              User research documentation
            </CaseStudyCaption>
          </CaseStudyImgSplit>
        </CaseStudySplitLayout>
      </CaseStudySectionGreySplit>
      <CaseStudySectionBlue>
        <CaseStudyArticle>
          <CaseStudyArticleTitle>
            A Problems Based Roadmap
          </CaseStudyArticleTitle>
          <CaseStudyArticleText>
            <p>After interviewing several associates, it was clear that many of the problems facing CRAs in the field stemmed from the fact 
              that their current systems were separated and outdated, difficult to navigate and required a lot of pre work before data could 
              be added to the database. The extra effort this created for CRAs often resulted in bringing work home and reports being incomplete 
              or late and ultimately rejected and delayed. In addition to these issues, CRAs didn&#39;t have an easy way to track and review KPIs 
              about the sites they were visiting. They needed a way to understand the health of different sites, if subjects were showing up for 
              visits and when a site report was ready for them complete.</p>

              <h3>All this insight led us to some very clear problem statements to define features around:</h3>
            </CaseStudyArticleText>
        </CaseStudyArticle>
        <CaseStudyHows>
          <h2>How might we give CRAs a simple way to see the most important KPIs about their sites?</h2>

          <h2>How might we help guide CRAs through the site visitation and source data verification process so that they don&#39;t have to prep the documentation before adding it?</h2>

          <h2>How might we provide CRAs with better visibility into report statues so they can prioritize their work?</h2>
        </CaseStudyHows>
      </CaseStudySectionBlue>
      <CaseStudySectionSplit>
        <CaseStudySplitLayout>
          <CaseStudyArticleSplit>
            <CaseStudyArticleTitle>
              Designing
            </CaseStudyArticleTitle>
            <CaseStudyArticleText>
              <p>Helping IQVIA understand the benefits of designing their application experiences with the Salesforce design system took some time. 
                Once their team made the decision to move forward with it, real exploration began in the designs. I was quickly able to demonstrate 
                how the designs system’s components and design patterns could accommodate some of their most complex functionality. This allowed for 
                rapid iterations, faster user testing cycles with time to incorporate feedback and more solution alternatives that could have been time 
                consuming to explore with a completely custom solution.</p>
            </CaseStudyArticleText>
          </CaseStudyArticleSplit>
          <CaseStudyImgSplit>
            <img src={CRAApproval} alt="Site Visit Report approval flow" />
            <CaseStudyCaption>
              Process flow for site visit report approval process with notes
            </CaseStudyCaption>
          </CaseStudyImgSplit>
        </CaseStudySplitLayout>
      </CaseStudySectionSplit>
      <CaseStudySectionGrey>
        <CaseStudyArticle>
          <CaseStudyArticleTitle>
            Shared Component Libray
          </CaseStudyArticleTitle>
          <CaseStudyArticleText>
            <p>Through are weekly cross team meetings, we were able to see the components 
            other teams were developing and share those across products. This was a win for design and for continuity across the suite. As the 
            project progressed and engineering began to gain more velocity from sprint to sprint, more functionality was able to be brought 
            into development cycles.</p>
          </CaseStudyArticleText>
          <CaseStudyImg2up>
            <img src={Headers} alt="Shared Header Component" />
            <img src={Enroll} alt="Shared Enrollment Component" />
          </CaseStudyImg2up>
          <CaseStudyImg2up>
            <img src={Summary} alt="Shared Summary Component" />
            <img src={SharedFooter} alt="Shared Footer Component" />
          </CaseStudyImg2up>
          <CaseStudyCaption>
            <div>Examples of components shared across the product suite</div>
          </CaseStudyCaption>
        </CaseStudyArticle>
      </CaseStudySectionGrey>
      <CaseStudySection>
        <CaseStudyImgStacked>
          <img src={Overview} alt="CRA Central Site Overview Record Detail" />
          <img src={SiteVisit} alt="CRA Central Site Visit Tab" />
          <img src={Consents} alt="CRA Central Site Visit Report Informed Consents" />
          <img src={QandA} alt="CRA Central Site Visit Report Questions and Answers" />
          <CaseStudyCaption>
            Samples of screens from application
          </CaseStudyCaption>
        </CaseStudyImgStacked>
      </CaseStudySection>
      <CaseStudySectionGrey>
          <CaseStudyArticle>
            <CaseStudyArticleTitle>
              Results and Takeaways
            </CaseStudyArticleTitle>
            <CaseStudyArticleText>
              <p>IQVIA brought DTMS to market in early 2019 with several customers already signed on to use the product. Our efforts shifted to 
                continuing to educate their design teams on the Salesforce platform and empowering their product teams to continue enhancing the 
                offering. IQVIA continues to be the largest clinical trial organization in the world and now those trials are powered by the 
                software we built with them.</p>

              <p>Some takeaways from this project are:</p>
              <ul>
                <li>
                <span>Wrangle skepticism with education.</span> Getting buy in from a large organization and creating change can feel daunting, but being 
                patient and prepared for objections can instill the level confidence needed to move forward.
                </li>
                <li>
                <span>Having a subject matter expert as a team member can be a game changer.</span> Having someone on the team who has walk in the shoes of users can 
                ensure that users needs are being met every step of the way.
                </li>
                <li>
                <span>Make a promise to solve problems not build features.</span> Using a problems based roadmap allowed us to focus on solving user&#39;s problems. The features 
                were simply a byproduct of our understanding of the user&#39;s needs.
                </li>
                <li>
                  <span>Share early and often.</span> Being able to present work across teams made a huge impact on the designs in the end. Several components and design 
                  patterns proved to be useful to other product tracks and helped to drive cohesion across the DTMS suite.
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

export default IqviaSection