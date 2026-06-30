import AnimatedPage from '../components/AnimatedPage'
import ProjectViewer from '../components/ProjectViewer'
import exhibitions from '../data/exhibitions'

const Exhibition = () => (
  <AnimatedPage>
    <ProjectViewer data={exhibitions} />
  </AnimatedPage>
)

export default Exhibition
