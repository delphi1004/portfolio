import AnimatedPage from '../components/AnimatedPage'
import Block from '../components/Block'
import './CV.scss'

const experience = [
  {
    company: 'Accenture Song',
    role: 'Senior Front-end Developer',
    location: 'Finland',
    period: 'May 2021 – Present',
    description: 'Implement various websites by React, Storybook, Gatsby and Next.js',
    tools: ['JavaScript', 'TypeScript'],
  },
  {
    company: 'Thermo Fisher Scientific',
    role: 'Senior Software Engineer',
    location: 'Finland',
    period: 'Oct 2019 – Aug 2020',
    description: 'Developed and enhanced the lab automation software',
    tools: ['C++', 'C#'],
  },
  {
    company: 'AppStars',
    role: 'Software Architect',
    location: 'South Korea',
    period: 'Apr 2010 – Feb 2016',
    description: 'Design system architecture and implement various apps',
    tools: ['Objective-C'],
  },
  {
    company: 'Trient Technologies',
    role: 'Senior Software Developer',
    location: 'South Korea, Canada',
    period: 'Sep 2006 – Mar 2010',
    description: 'Implemented FDC (Fault Detection and Classification) System',
    tools: ['C#', 'Pro*C'],
  },
  {
    company: 'Nippo',
    role: 'Senior Software Developer',
    location: 'Japan',
    period: 'Dec 2005 – Sep 2006',
    description: 'Implemented and system design FDC for a semiconductor fab',
    tools: ['C#'],
  },
  {
    company: 'Silicon and Systems',
    role: 'Senior Software Developer',
    location: 'South Korea',
    period: 'Sep 2001 – Feb 2003',
    description: 'Designed software architecture and implemented for automated AFM (Atomic Force Microscopy)',
    tools: ['C++'],
  },
  {
    company: 'Nanometrics',
    role: 'Senior Software Developer',
    location: 'South Korea',
    period: 'Dec 1999 – Sep 2001',
    description: 'Developed software for wafer metrology equipment and experienced with Secs/Gem protocol',
    tools: ['C++'],
  },
]

const education = [
  {
    degree: 'MA / New Media Design and Production',
    institution: 'Aalto University',
    location: 'Finland',
    period: '2017 – 2020',
  },
  {
    degree: 'M.Eng / Convergence Content Production',
    institution: 'Dongguk University',
    location: 'South Korea',
    period: '2014 – 2016',
  },
  {
    degree: 'Introduction to Computational Arts',
    institution: 'Coursera Verified Certificate',
    location: '',
    period: '2014',
  },
  {
    degree: 'B.Eng / Computer and Information Science',
    institution: 'Korea Digital University',
    location: 'South Korea',
    period: '2002 – 2007',
  },
]

const exhibitions = [
  {
    title: "Helsinki Children's Hospital Installation",
    type: 'Group',
    venue: 'Helsinki, Finland',
    period: '18 Aug 2018 – Present',
    url: 'https://www.youtube.com/watch?v=FRKkWGA_G0s',
  },
  {
    title: 'When Light Echoes',
    type: 'Group',
    venue: 'Interactive installation exhibition, Seoul, South Korea',
    period: '26 May – 31 May 2019',
    url: 'https://www.youtube.com/watch?v=2yZoM1qjo9o',
  },
  {
    title: 'Seeing Sound, Listening to Image',
    type: 'Solo',
    venue: 'Väre gallery V1, Aalto University, Finland',
    period: '23 Feb – 03 Mar 2019',
    url: 'https://www.youtube.com/watch?v=3yvqrAyYy-4',
  },
  {
    title: 'Drawing Machine',
    type: 'Solo',
    venue: 'IDAS Hong-Ik University, Seoul, South Korea',
    period: '25 – 31 May 2017',
    url: 'https://www.youtube.com/watch?v=mVPDrrjWDYY',
  },
]

const publications = [
  {
    title: 'Tangible Visualization Table for Intuitive Data Display',
    publisher: 'Symmetry MDPI',
    date: '14 Dec 2017',
    url: 'https://www.mdpi.com/2073-8994/9/12/316',
  },
  {
    title: 'Hand Tracking Based Projection Mapping System and Applications',
    publisher: 'J. of KCGS',
    date: '27 Jun 2016',
    url: 'https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002142333',
  },
]

const teaching = [
  { course: 'Creative Coding', period: 'Sep – Oct 2021' },
  { course: 'Coding Clinic', period: 'Oct – Dec 2019' },
  { course: 'Internet Technologies and Techniques', period: 'Nov – Dec 2019' },
]

const CV = () => (
  <AnimatedPage>
    <div className="cv">
      <Block>
        <div className="cv__header">
          <span className="cv__label">/ cv</span>
          <h1 className="cv__name">John Lee</h1>
          <p className="cv__role">New Media Artist · Software Developer</p>
        </div>

        <section className="cv__section">
          <h2 className="cv__section-title">Experience</h2>
          {experience.map(({ company, role, location, period, description, tools }) => (
            <div key={company} className="cv__entry">
              <div className="cv__entry-left">
                <span className="cv__entry-company">{company}</span>
                <span className="cv__entry-meta">{location} · {period}</span>
              </div>
              <div className="cv__entry-right">
                <span className="cv__entry-role">{role}</span>
                <p className="cv__entry-desc">{description}</p>
                <div className="cv__tags">
                  {tools.map(t => <span key={t} className="cv__tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="cv__section">
          <h2 className="cv__section-title">Education</h2>
          {education.map(({ degree, institution, location, period }) => (
            <div key={degree} className="cv__entry">
              <div className="cv__entry-left">
                <span className="cv__entry-company">{institution}</span>
                <span className="cv__entry-meta">
                  {[location, period].filter(Boolean).join(' · ')}
                </span>
              </div>
              <div className="cv__entry-right">
                <span className="cv__entry-role">{degree}</span>
              </div>
            </div>
          ))}
        </section>

        <div className="cv__bottom">
          <section className="cv__section">
            <h2 className="cv__section-title">Exhibitions</h2>
            {exhibitions.map(({ title, type, venue, period, url }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="cv__entry cv__entry--link"
              >
                <div className="cv__entry-left">
                  <span className="cv__entry-company">{title}</span>
                  <span className="cv__entry-meta">{period}</span>
                </div>
                <div className="cv__entry-right">
                  <span className="cv__entry-role">{venue}</span>
                  <span className="cv__tag">{type}</span>
                </div>
                <span className="cv__entry-arrow">↗</span>
              </a>
            ))}
          </section>

          <div className="cv__aside">
            <section className="cv__section">
              <h2 className="cv__section-title">Publications</h2>
              {publications.map(({ title, publisher, date, url }) => (
                <div key={title} className="cv__entry cv__entry--stacked">
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="cv__entry-link">
                      {title} ↗
                    </a>
                  ) : (
                    <span className="cv__entry-company">{title}</span>
                  )}
                  <span className="cv__entry-meta">{publisher} · {date}</span>
                </div>
              ))}
            </section>

            <section className="cv__section">
              <h2 className="cv__section-title">Teaching at Aalto University</h2>
              {teaching.map(({ course, period }) => (
                <div key={course} className="cv__entry cv__entry--stacked">
                  <span className="cv__entry-company">{course}</span>
                  <span className="cv__entry-meta">{period}</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </Block>
    </div>
  </AnimatedPage>
)

export default CV
