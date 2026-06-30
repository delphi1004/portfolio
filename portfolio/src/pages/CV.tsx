import AnimatedPage from '../components/AnimatedPage'
import cvPdf from '../resources/JohnLee_CV_2023.pdf'
import './CV.scss'

export default function CV() {
  return (
    <AnimatedPage>
      <div className="cv">
        <div className="cv__header">
          <span className="cv__label">/ cv</span>
          <h1 className="cv__title">Curriculum Vitae</h1>
          <a
            href={cvPdf}
            download="JohnLee_CV.pdf"
            className="cv__download"
          >
            Download PDF ↓
          </a>
        </div>
        <div className="cv__viewer">
          <object
            data={cvPdf}
            type="application/pdf"
            width="100%"
            height="100%"
            aria-label="John Lee CV"
          >
            <p className="cv__fallback">
              PDF를 볼 수 없습니다.{' '}
              <a href={cvPdf} download>
                다운로드
              </a>
              하세요.
            </p>
          </object>
        </div>
      </div>
    </AnimatedPage>
  )
}
