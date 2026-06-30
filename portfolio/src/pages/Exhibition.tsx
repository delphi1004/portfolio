import AnimatedPage from '../components/AnimatedPage'
import ProjectViewer from '../components/ProjectViewer'
import exhibitions from '../data/exhibitions'

export default function Exhibition() {
  return (
    <AnimatedPage>
      <ProjectViewer data={exhibitions} />
    </AnimatedPage>
  )
}
