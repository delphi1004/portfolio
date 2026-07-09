import AnimatedPage from '../components/AnimatedPage'
import Block from '../components/Block'
import './About.scss'

const About = () => (
  <AnimatedPage>
    <div className='about'>
      <Block>
        <div className='about__header'>
          <span className='about__label'>Profile / practice</span>
          <h1 className='about__name'>John Lee</h1>
          <p className='about__role'>New Media Artist · Software Developer</p>
        </div>

        <div className='about__body'>
          <div className='about__divider' />
          <p className='about__bio'>
            With over many years of professional programming expertise in languages such as C#, C++,
            C, JavaScript, TypeScript, and Unity3D, I bring a unique blend of technical and creative
            skills to the table. My in-depth knowledge of Unity3D and computer graphics, including
            shader coding, OpenGL, and the graphics pipeline, has made me a seasoned software
            developer. I also have a background in interactive art installations, which further
            showcases my creativity as a media artist.
          </p>
          <p className='about__bio'>
            Eager to use my diverse skills to bring success to creative projects, I am seeking
            opportunities to collaborate with passionate individuals. Let&apos;s create something
            remarkable together.
          </p>

          <div className='about__skills'>
            {[
              {
                icon: '⬡',
                title: 'Frontend',
                tags: [
                  'React',
                  'Next.js',
                  'TypeScript',
                  'JavaScript',
                  'HTML / CSS',
                  'Tailwind',
                  'Sass',
                  'styled-components',
                  'Shopify',
                ],
              },
              {
                icon: '◈',
                title: 'Creative Coding',
                tags: [
                  'Unity3D',
                  'Unreal Engine',
                  'Processing',
                  'OpenGL / GLSL',
                  'VFX Graph',
                  'Shader Graph',
                  'C# / C++',
                  'Arduino',
                ],
              },
              {
                icon: '◎',
                title: 'Tools & Design',
                tags: [
                  'Storybook',
                  'Jest',
                  'Cypress',
                  'Sanity.io',
                  'Contentful',
                  'Magnolia',
                  'Fusion 360',
                  'Maya',
                ],
              },
            ].map(({ icon, title, tags }) => (
              <div key={title} className='about__skill-card'>
                <span className='about__skill-icon'>{icon}</span>
                <h3 className='about__skill-title'>{title}</h3>
                <ul className='about__skill-tags'>
                  {tags.map((tag) => (
                    <li key={tag} className='about__skill-tag'>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Block>
    </div>
  </AnimatedPage>
)

export default About
