import { useEffect, useState } from 'react'
import './App.css'

const curriculum = [
  ['1', 'Primer cuatrimestre', ['Inglés I', 'Desarrollo humano y valores', 'Fundamentos matemáticos', 'Fundamentos de redes', 'Física', 'Fundamentos de programación', 'Comunicación y habilidades digitales']],
  ['2', 'Segundo cuatrimestre', ['Inglés II', 'Habilidades socioemocionales y manejo de conflictos', 'Cálculo diferencial', 'Conmutación y enrutamiento de redes', 'Probabilidad y estadística', 'Programación estructurada', 'Sistemas operativos']],
  ['3', 'Tercer cuatrimestre', ['Inglés III', 'Desarrollo del pensamiento y toma de decisiones', 'Cálculo integral', 'Tópicos de calidad para el diseño de software', 'Bases de datos', 'Programación orientada a objetos', 'Proyecto integrador I']],
  ['4', 'Cuarto cuatrimestre', ['Inglés IV', 'Ética profesional', 'Cálculo de varias variables', 'Aplicaciones web', 'Ecuaciones diferenciales', 'Estructura de datos', 'Análisis y diseño de software']],
  ['5', 'Quinto cuatrimestre', ['Inglés V', 'Liderazgo de equipos de alto desempeño', 'Ecuaciones diferenciales', 'Aplicaciones web interactivas', 'Bases de datos avanzadas', 'Estándares y métricas para el desarrollo de software', 'Proyecto integrador II']],
  ['6', 'Estadía profesional', ['Estadía en desarrollo de software multiplataforma']],
  ['7', 'Séptimo cuatrimestre', ['Inglés VI', 'Habilidades gerenciales', 'Formulación de proyectos de tecnología', 'Fundamentos de inteligencia artificial', 'Ética y legislación en tecnologías de la información', 'Optativa I', 'Seguridad informática']],
  ['8', 'Octavo cuatrimestre', ['Inglés VII', 'Electrónica digital', 'Gestión de proyectos de tecnología', 'Programación para la inteligencia artificial', 'Administración de servidores', 'Optativa II', 'Informática forense']],
  ['9', 'Noveno cuatrimestre', ['Inglés VIII', 'Internet de las cosas', 'Evaluación de proyectos de tecnología', 'Ciencia de datos', 'Tecnologías disruptivas', 'Optativa III', 'Proyecto integrador III']],
  ['10', 'Décimo cuatrimestre', ['Estadía en ingeniería en tecnologías de la información e innovación digital']],
]

const experiences = [
  { image: '/media/programacion.jpg', label: 'Código con propósito', title: 'Construye soluciones digitales', text: 'Aprende a diseñar aplicaciones web, móviles y multiplataforma que resuelvan retos reales.' },
  { image: '/media/robotica.jpg', label: 'Laboratorio maker', title: 'Conecta software y hardware', text: 'Explora electrónica digital, robótica, automatización e Internet de las Cosas desde la práctica.' },
  { image: '/media/hardware.jpg', label: 'Taller tecnológico', title: 'Entiende lo que hay detrás', text: 'Desarrolla habilidades para diagnosticar, mantener y transformar equipos y sistemas.' },
  { image: '/media/diseno-3d.jpg', label: 'Innovación digital', title: 'Imagina, prototipa y comparte', text: 'Participa en experiencias creativas con diseño, prototipado, datos y tecnologías disruptivas.' },
]

const opportunities = [
  ['01', 'Crear', 'Aplicaciones web, móviles, sistemas multiplataforma y productos digitales.'],
  ['02', 'Investigar', 'Inteligencia artificial, ciencia de datos, seguridad e innovación tecnológica.'],
  ['03', 'Colaborar', 'Proyectos integradores, liderazgo y equipos de alto desempeño.'],
  ['04', 'Transformar', 'Soluciones que conectan personas, organizaciones, dispositivos y comunidades.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCycle, setActiveCycle] = useState('all')

  useEffect(() => {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {})
  }, [])

  const visibleCycles = activeCycle === 'all' ? curriculum : curriculum.filter(([id]) => id === activeCycle)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="UTOM - inicio" onClick={() => setMenuOpen(false)}><img src="/media/logo-utom.png" alt="Universidad Tecnológica del Oriente de Michoacán" /></a>
        <button className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-menu"><span></span><span></span><span></span><b>{menuOpen ? 'Cerrar' : 'Menú'}</b></button>
        <nav id="main-menu" className={menuOpen ? 'menu is-open' : 'menu'} aria-label="Navegación principal">
          <a href="#carrera" onClick={() => setMenuOpen(false)}>La carrera</a><a href="#mapa" onClick={() => setMenuOpen(false)}>Mapa curricular</a><a href="#experiencias" onClick={() => setMenuOpen(false)}>Vive la UTOM</a><a href="#perfil" onClick={() => setMenuOpen(false)}>Perfil profesional</a><a className="menu-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Quiero informes <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">Universidad Tecnológica del Oriente de Michoacán</p><h1>Tu futuro no se programa solo<span>.</span></h1><p className="hero-lead">Conviértete en ingeniero en Tecnologías de la Información e Innovación Digital y crea las soluciones que el mundo necesita.</p><div className="hero-actions"><a className="button button-primary" href="#carrera">Conoce la carrera <span>↓</span></a><a className="text-link" href="#mapa">Explorar el mapa curricular <span>↗</span></a></div><div className="hero-stats"><div><strong>10</strong><span>cuatrimestres</span></div><div><strong>3</strong><span>estadías y proyectos integradores</span></div><div><strong>∞</strong><span>ideas por desarrollar</span></div></div></div><div className="hero-visual"><img src="/media/campus-comunidad.jpg" alt="Estudiantes y mascota UTOM caminando por el campus" /><div className="hero-sticker"><span>TI</span><small>tecnología<br />+ innovación</small></div></div></section>

        <section className="intro section" id="carrera"><div className="section-kicker">01 / La carrera</div><div className="intro-grid"><h2>Aprende a mirar los problemas como oportunidades.</h2><div><p className="big-copy">La ingeniería en TI e Innovación Digital combina pensamiento lógico, creatividad y trabajo colaborativo para formar profesionales capaces de diseñar, implementar y dirigir proyectos tecnológicos.</p><p>Desde tus primeros cuatrimestres conocerás programación, redes, bases de datos y sistemas operativos. Después avanzarás hacia la inteligencia artificial, ciencia de datos, ciberseguridad, IoT y gestión de proyectos.</p></div></div></section>

        <section className="opportunity-section"><div className="section opportunity-head"><div className="section-kicker light">02 / Lo que podrás hacer</div><h2>Una carrera para crear el siguiente paso.</h2></div><div className="opportunity-grid">{opportunities.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="section experiences" id="experiencias"><div className="section-kicker">03 / Vive la experiencia</div><div className="section-heading"><h2>La tecnología se aprende haciendo.</h2><p>En la UTOM cada proyecto es una oportunidad para probar, equivocarte, colaborar y llevar una idea hasta el mundo real.</p></div><div className="experience-grid">{experiences.map((item) => <article className="experience-card" key={item.title}><img src={item.image} alt="" /><div className="card-overlay"><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>

        <section className="curriculum-section" id="mapa"><div className="section curriculum-top"><div className="section-kicker light">04 / Tu recorrido</div><div className="curriculum-title"><div><h2>Mapa curricular</h2><p>Diez etapas para convertir tu curiosidad en competencias profesionales.</p></div><a className="button button-light" href="#contacto">Solicita información <span>↗</span></a></div></div><div className="curriculum-controls" role="tablist" aria-label="Filtrar cuatrimestres"><button className={activeCycle === 'all' ? 'active' : ''} onClick={() => setActiveCycle('all')}>Todos</button>{curriculum.map(([id]) => <button className={activeCycle === id ? 'active' : ''} onClick={() => setActiveCycle(id)} key={id}>{id}</button>)}</div><div className="curriculum-grid">{visibleCycles.map(([id, name, subjects]) => <article className={`cycle-card ${id === '6' || id === '10' ? 'stay-card' : ''}`} key={id}><div className="cycle-number">{id.padStart(2, '0')}</div><h3>{name}</h3><ul>{subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>{(id === '6' || id === '10') && <strong className="hours">600 horas de estadía</strong>}</article>)}</div></section>

        <section className="profile section" id="perfil"><div className="profile-image"><img src="/media/vinculacion.jpg" alt="Comunidad universitaria en una actividad de vinculación" /></div><div className="profile-copy"><div className="section-kicker">05 / Después de la carrera</div><h2>Tu perfil puede moverse en muchas direcciones.</h2><p>Al egresar podrás integrarte a equipos de desarrollo, infraestructura, datos, seguridad, innovación y gestión tecnológica; o crear tus propios proyectos.</p><div className="role-list"><span>Desarrollador/a de software</span><span>Analista de datos</span><span>Especialista en ciberseguridad</span><span>Administrador/a de servidores</span><span>Consultor/a tecnológico/a</span><span>Líder de proyectos</span></div></div></section>

        <section className="final-cta" id="contacto"><div><p className="eyebrow">¿Listo para empezar?</p><h2>Tu próxima gran idea<br /><em>empieza aquí.</em></h2></div><div className="cta-contact"><p>Informes e inscripciones</p><a href="tel:+524471508913">447 150 8913 <span>↗</span></a><a className="button button-primary" href="https://www.utom.edu.mx/" target="_blank" rel="noreferrer">Visita utom.edu.mx</a></div></section>
      </main>
      <footer><img src="/media/logo-utom.png" alt="UTOM" /><span>Universidad Pública en Maravatío · Ingeniería TI e Innovación Digital</span><a href="#inicio">Volver arriba ↑</a></footer>
    </div>
  )
}

export default App
