import { FamilyIllustration, CloudDecoration, SunDecoration } from './Illustrations'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <CloudDecoration />
      <SunDecoration />
      <div className="header-inner">
        <span className="header-top-title">ON &amp; OFF 프로젝트</span>
        <h1 className="header-main-title">
          쉼<span className="highlight-on">On</span> 육아<span className="highlight-off">Off</span>
        </h1>
        <p className="header-subtitle">따로 또 같이 프로그램</p>
        <div className="header-illustration">
          <FamilyIllustration />
        </div>
      </div>
    </header>
  )
}
