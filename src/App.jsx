import { useEffect, useState } from "react";

const projects = [
  {
    no: "01",
    type: "TEAM PROJECT · 2026",
    name: "DOGO",
    tagline: "Find it again.",
    description: "분실물·실종자·실종동물을 하나의 위치 기반 흐름으로 연결한 통합 플랫폼입니다.",
    role: "Backend · Frontend · Product",
    stack: ["Spring Boot", "Java 17", "MySQL", "WebSocket", "Kakao Map"],
    accent: "cyan",
    image: "/images/dogo-home.png",
    github: "https://github.com/mahoora0/dogo",
    live: "https://mahoora0.github.io/dogo/",
    featured: true,
  },
  {
    no: "02",
    type: "TEAM PROJECT · IN DEVELOPMENT",
    name: "POPQ",
    tagline: "Scan. Order. Enjoy.",
    description: "팝업스토어와 행사 현장에서 QR 하나로 메뉴 확인부터 주문까지 이어지는 현장형 주문 서비스입니다.",
    role: "Mobile · Web · Backend",
    stack: ["Flutter", "React", "Spring", "QR Order"],
    accent: "amber",
    github: "https://github.com/choffice/project__popq",
  },
  {
    no: "03",
    type: "PERSONAL PROJECT · IN DEVELOPMENT",
    name: "FlowBoard",
    tagline: "Ideas in motion.",
    description: "흩어진 개발 기록과 회의 내용을 보드 위에서 연결해 프로젝트의 흐름을 보여주는 협업 공간입니다.",
    role: "Product Design · Development",
    stack: ["Dev Notes", "Meeting", "Board", "Collaboration"],
    accent: "violet",
    github: "https://github.com/SimSeungAh/FlowBoard",
  },
  {
    no: "04",
    type: "PERSONAL PROJECT · CONCEPT",
    name: "EchoSnap",
    tagline: "See. Sort. Share.",
    description: "카메라로 재활용품을 인식하고 지역 배출 정보와 이웃 소식을 연결하는 생활 밀착형 앱입니다.",
    role: "Planning · App Development",
    stack: ["Camera", "AI Vision", "Local Alert", "Community"],
    accent: "pink",
    github: "https://github.com/SimSeungAh/Smart-Recycle",
  },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function App() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="처음으로">SIM<br />SEUNGAH</a>
        <nav aria-label="주요 메뉴">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <button className="theme" onClick={() => setLight(v => !v)} aria-label={light ? "다크 모드" : "라이트 모드"}>
          <span>{light ? "DAY" : "NIGHT"}</span><i />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="signal" aria-hidden="true"><i /><i /><i /></div>
          <p className="kicker">FULL-STACK DEVELOPER · BUSAN, KR</p>
          <h1>복잡한 문제를<br /><em>분명한 경험</em>으로.</h1>
          <div className="hero-bottom">
            <p>사용자의 문제를 발견하고, 화면과 데이터의 흐름을 설계해 끝까지 구현합니다.</p>
            <a href="#work" className="round-link" aria-label="프로젝트 보기">↓</a>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-heading"><p>SELECTED WORK</p><span>2025 — 2026</span></div>
          <article className="featured-card">
            <div className="project-copy">
              <div><span className="project-no">01</span><span className="project-type">TEAM PROJECT · 2026</span></div>
              <h2>DOGO<span className="dot cyan">.</span></h2>
              <h3>Find it again.</h3>
              <p>분실물·실종자·실종동물을 하나의 위치 기반 흐름으로 연결했습니다. 자동 매칭과 실시간 소통으로 다시 찾는 시간을 줄입니다.</p>
              <dl><div><dt>ROLE</dt><dd>Backend · Frontend · Product</dd></div><div><dt>FOCUS</dt><dd>Location · Matching · Realtime</dd></div></dl>
              <div className="actions"><a href={projects[0].live} target="_blank" rel="noreferrer">VIEW PROJECT <Arrow /></a><a href={projects[0].github} target="_blank" rel="noreferrer">GITHUB <Arrow /></a></div>
            </div>
            <a className="project-visual" href={projects[0].live} target="_blank" rel="noreferrer" aria-label="DOGO 프로젝트 열기">
              <div className="browser-bar"><i /><i /><i /><span>dogo / lost &amp; found network</span></div>
              <img src={projects[0].image} alt="DOGO 서비스 메인 화면" />
              <span className="visual-label">LOCATION BASED PLATFORM</span>
            </a>
          </article>

          <div className="project-grid">
            {projects.slice(1).map((project) => (
              <article className={`project-card ${project.accent}`} key={project.name}>
                <div className="card-top"><span>{project.no}</span><span>{project.type}</span></div>
                <div className="card-mark" aria-hidden="true"><i /><i /><i /></div>
                <h2>{project.name}<span>.</span></h2>
                <h3>{project.tagline}</h3>
                <p>{project.description}</p>
                <div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>EXPLORE <Arrow /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div><p className="kicker">ABOUT / APPROACH</p><h2>기능을 만드는 데서<br />멈추지 않습니다.</h2></div>
          <div className="about-copy">
            <p>왜 필요한지부터 묻고, 사용자가 자연스럽게 목적에 도달할 수 있도록 구조를 다듬습니다. 낯선 기술도 직접 부딪치며 프로젝트에 맞는 답을 찾습니다.</p>
            <div className="principles"><span><b>01</b>사용자 흐름부터 설계</span><span><b>02</b>화면과 서버를 함께 이해</span><span><b>03</b>기록하고 개선하는 개발</span></div>
          </div>
        </section>

        <section className="skills">
          <p className="kicker">TOOLBOX</p>
          <div className="skill-list"><span>JAVA</span><span>SPRING BOOT</span><span>REACT</span><span>JAVASCRIPT</span><span>MYSQL</span><span>WEBSOCKET</span><span>GIT</span><span>FIGMA</span></div>
        </section>
      </main>

      <footer id="contact">
        <p>HAVE A PROJECT IN MIND?</p>
        <h2>좋은 문제를 함께<br />풀어보고 싶습니다<span>.</span></h2>
        <div className="footer-row"><a href="mailto:hello@example.com">hello@example.com <Arrow /></a><a href="https://github.com/SimSeungAh" target="_blank" rel="noreferrer">GITHUB <Arrow /></a><span>© 2026 SIM SEUNGAH</span></div>
      </footer>
    </div>
  );
}

export default App;
