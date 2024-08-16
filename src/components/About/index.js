import React from "react";
import styled, { useTheme } from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  &:after {
    content: "";
    width: 50px;
    height: 4px;
    background-color: ${(props) => props.theme.accentColor};
    display: block;
    margin: 0.5rem auto 0;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Position = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondaryColor};
`;

const Timeframe = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.tertiaryColor};
`;

const ExperienceDetails = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const DetailItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textColor};
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillBadge = styled.span`
  background: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.badgeTextColor};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const EducationContainer = styled.div`
  margin-top: 2rem;
`;

const EducationCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const EducationHeader = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryColor};
`;

const EducationDetails = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryColor};
  margin-top: 0.5rem;
`;

const AwardContainer = styled.div`
  margin-top: 2rem;
`;

const AwardCard = styled.div`
  background: ${(props) => props.theme.awardBackground};
  padding: 1.5rem;
  border-left: 5px solid ${(props) => props.theme.accentColor};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const AwardTitle = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.accentColor};
  margin-bottom: 0.5rem;
`;

const WorkExperience = () => {
  return (
    <Container>
      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceContainer>
        <ExperienceCard>
          <ExperienceHeader>
            <div>
              <Position>Senior Software Engineer II</Position>
              <Company>CaratLane - A Tanishq Partnership</Company>
            </div>
            <Timeframe>Dec 2020 - Present</Timeframe>
          </ExperienceHeader>
          <ExperienceDetails>
            <DetailItem>
              Led a team of seven engineers, resulting in two promotions for
              exceptional performance.
            </DetailItem>
            <DetailItem>
              Architected and deployed an A/B testing framework, increasing user
              engagement and conversion rates.
            </DetailItem>
            <DetailItem>
              Implemented Microfront-end architecture using Webpack module
              federation.
            </DetailItem>
            <DetailItem>
              Integrated dynamic video streaming, contributing to a 10% increase
              in lead acquisition.
            </DetailItem>
            <DetailItem>
              Strengthened website security, reducing errors by 90%.
            </DetailItem>
          </ExperienceDetails>
        </ExperienceCard>

        <ExperienceCard>
          <ExperienceHeader>
            <div>
              <Position>Senior Frontend Developer</Position>
              <Company>Capgemini Technology Services India Ltd</Company>
            </div>
            <Timeframe>Sep 2016 - Nov 2018</Timeframe>
          </ExperienceHeader>
          <ExperienceDetails>
            <DetailItem>
              Developed and maintained responsive user interfaces for a
              mainframe conversion project.
            </DetailItem>
            <DetailItem>
              Engineered secure software solutions for banking operations.
            </DetailItem>
            <DetailItem>
              Collaborated with clients and Agile teams to resolve issues and
              deliver on-time.
            </DetailItem>
          </ExperienceDetails>
        </ExperienceCard>

        <ExperienceCard>
          <ExperienceHeader>
            <div>
              <Position>Software Engineer</Position>
              <Company>Infoview Technologies Pvt Ltd</Company>
            </div>
            <Timeframe>Sep 2016 - Nov 2018</Timeframe>
          </ExperienceHeader>
          <ExperienceDetails>
            <DetailItem>
              Designed and developed a secure web-based email service with chat
              and thread modules, enhancing internal communication.
            </DetailItem>
            <DetailItem>
              Developed RESTful APIs and optimized session management using
              Redis, improving application performance.
            </DetailItem>
            <DetailItem>
              Provided ongoing production support, ensuring system stability and
              addressing issues promptly.
            </DetailItem>
          </ExperienceDetails>
        </ExperienceCard>
      </ExperienceContainer>

      <SectionTitle>Skills</SectionTitle>
      <SkillsContainer>
        <SkillBadge>JavaScript (ES6+)</SkillBadge>
        <SkillBadge>ReactJS</SkillBadge>
        <SkillBadge>Redux</SkillBadge>
        <SkillBadge>Node.js</SkillBadge>
        <SkillBadge>HTML5</SkillBadge>
        <SkillBadge>CSS3</SkillBadge>
        <SkillBadge>Micro-Frontend Architecture</SkillBadge>
        <SkillBadge>A/B Testing</SkillBadge>
        <SkillBadge>Webpack</SkillBadge>
        <SkillBadge>SEO</SkillBadge>
        <SkillBadge>Docker</SkillBadge>
        <SkillBadge>MySQL</SkillBadge>
        <SkillBadge>Git</SkillBadge>
        <SkillBadge>AWS</SkillBadge>
      </SkillsContainer>

      <SectionTitle>Education</SectionTitle>
      <EducationContainer>
        <EducationCard>
          <EducationHeader>
            Bachelor of Electrical and Electronics Engineering
          </EducationHeader>
          <EducationDetails>
            Alagappa Chettiar College of Engineering and Technology, Karaikudi
          </EducationDetails>
          <EducationDetails>Aug 2012 - Apr 2016 | CGPA: 8.1</EducationDetails>
        </EducationCard>
      </EducationContainer>

      <SectionTitle>Awards & Achievements</SectionTitle>
      <AwardContainer>
        <AwardCard>
          <AwardTitle>Titan Dream Team Award 2024</AwardTitle>
          <div>
            Recognized for leading Project Engage at CaratLane, fostering
            cross-functional collaboration that resulted in a 7% increase in
            business revenue (₹200 crores).
          </div>
        </AwardCard>
        <AwardCard>
          <AwardTitle>Ace & Innovator Award 2024</AwardTitle>
          <div>
            Awarded for introducing video reels functionality, initiating video
            commerce, and enhancing user engagement.
          </div>
        </AwardCard>
        <AwardCard>
          <AwardTitle>Promotions at CaratLane</AwardTitle>
          <div>
            Earned two consecutive promotions from Senior Software Engineer I to
            Senior Software Engineer II.
          </div>
        </AwardCard>
      </AwardContainer>
    </Container>
  );
};

export default WorkExperience;
