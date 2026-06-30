import AnimatedPage from '../components/AnimatedPage'
import './About.scss'

export default function About() {
  return (
    <AnimatedPage>
      <div className="about">
        <div className="about__header">
          <span className="about__label">/ about</span>
          <h1 className="about__name">John Lee</h1>
          <p className="about__role">New Media Artist · Software Developer</p>
        </div>

        <div className="about__body">
          <div className="about__divider" />
          <p className="about__bio">
            With over many years of professional programming expertise in languages such as C#,
            C++, C, JavaScript, TypeScript, and Unity3D, I bring a unique blend of technical and
            creative skills to the table. My in-depth knowledge of Unity3D and computer graphics,
            including shader coding, OpenGL, and the graphics pipeline, has made me a seasoned
            software developer. I also have a background in interactive art installations, which
            further showcases my creativity as a media artist.
          </p>
          <p className="about__bio">
            Eager to use my diverse skills to bring success to creative projects, I am seeking
            opportunities to collaborate with passionate individuals. Let&apos;s create something
            remarkable together.
          </p>

          <div className="about__skills">
            <div className="about__skill-group">
              <h3 className="about__skill-title">Languages</h3>
              <p className="about__skill-list">C# · C++ · C · JavaScript · TypeScript · Objective-C</p>
            </div>
            <div className="about__skill-group">
              <h3 className="about__skill-title">Tools & Frameworks</h3>
              <p className="about__skill-list">Unity3D · openFrameworks · Processing · Arduino · React</p>
            </div>
            <div className="about__skill-group">
              <h3 className="about__skill-title">3D & Graphics</h3>
              <p className="about__skill-list">Fusion 360 · Maya · OpenGL · Shader coding · GLSL</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
