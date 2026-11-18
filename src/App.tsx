import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, Code2, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, ShieldCheck, X, ChevronUp, ExternalLink, Terminal, Database, Network, Cpu, Layers3, FileText, Sun, Moon } from 'lucide-react'
import { profile, projects, skills } from './data'
import Reveal from './components/Reveal'
import Counter from "./components/Counter";

const nav = ['Home','About','Skills','Experience','Projects','Certifications','Achievements','Hackathon','LeetCode','Contact']
const groups = ['All','Programming','Development','Cybersecurity','Database','Tools','Core Concepts']
const iconMap: Record<string, any> = { packet: Network, trust: ShieldCheck, gateway: Network }

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}<i /></div>
}

function App() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [skillGroup, setSkillGroup] = useState('All')
  const [projectGroup, setProjectGroup] = useState('All Projects')
  const [loaded, setLoaded] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const filteredSkills = useMemo(() => skillGroup === 'All' ? skills : skills.filter(s => s.group === skillGroup), [skillGroup])
  const filteredProjects = useMemo(() => projectGroup === 'All Projects' ? projects : projects.filter(p => projectGroup === 'Dev Projects' ? p.category === 'Development' : p.category === 'Cybersecurity'), [projectGroup])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 950)
    const onScroll = () => {
      setShowTop(window.scrollY > 500)
      const current = nav.map(n => document.getElementById(n.toLowerCase())).filter(Boolean).map(el => ({ id: el!.id, top: el!.getBoundingClientRect().top }))
        .filter(x => x.top <= 150).sort((a,b) => b.top-a.top)[0]
      if (current) setActive(current.id.charAt(0).toUpperCase()+current.id.slice(1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll) }
  }, [])

  const go = (name: string) => { setMenuOpen(false); document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }) }

  return <div className="site-shell" data-theme={theme}>
    <AnimatePresence>{!loaded && <motion.div className="loader" initial={{opacity:1}} exit={{opacity:0}} transition={{duration:.5}}><div className="loader-mark">&lt; CK /&gt;</div><div className="loader-line"><span /></div><p>INITIALIZING PORTFOLIO</p></motion.div>}</AnimatePresence>
    <header className="topbar">
      <a className="brand" href="#home" onClick={e=>{e.preventDefault();go('Home')}}>Chetan R K</a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(n=><a key={n} className={active===n?'active':''} href={'#'+n.toLowerCase()} onClick={e=>{e.preventDefault();go(n)}}>{n}</a>)}</nav>
      <div className="topbar-actions"><button className="theme-toggle" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}<span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button><button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><span className="pulse-dot"/> HELLO, I'M CHETAN RAMANNA KADADI</span>
          <h1>Backend Developer<br/><em>&amp; Security Analyst.</em></h1>
          <h3>Computer Science Engineering Student <span>·</span> Cybersecurity</h3>
          <p className="hero-text">Computer Science Engineering student specializing in Cybersecurity, passionate about Java development, backend engineering, and building secure digital experiences. I enjoy solving complex problems, exploring new technologies, and turning ideas into practical applications.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={()=>go('Contact')}>Connect Me <ArrowUpRight size={17}/></button>
            <a className="btn btn-outline" href="/Chetan-Kadadi-Resume.pdf" download>Download Resume <Download size={16}/></a>
          </div>
          <div className="hero-social hero-social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin/></a>
            <a href="https://leetcode.com/u/Chetan_Kadadi/" target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode"><Code2/></a>
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-ring"><div className="portrait-placeholder"><img className="profile-photo" src="/chetan-profile.jpeg" alt="Chetan Ramanna Kadadi" /></div></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="floating-tag tag-one"><ShieldCheck size={16}/> Security-minded</div>
          <div className="floating-tag tag-two"><Code2 size={16}/> Builder</div>
          <div className="floating-tag tag-three"><Code2 size={16}/> Code</div>
          <div className="hero-index">01 <span>—</span> 08</div>
        </div>
        <a className="scroll-cue" href="#about" onClick={e=>{e.preventDefault();go('About')}}><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section id="about" className="section-wrap section-pad">
        <SectionTitle eyebrow="A LITTLE ABOUT ME" title="Professional Overview" subtitle="Curiosity, engineering and a security-first mindset."/>
        <div className="overview-grid">
          <Reveal><div className="overview-copy"><h3>Computer Science student with a <em>security-first mindset.</em></h3><p>I’m pursuing a B.E. in Computer Science & Engineering with a specialization in Cybersecurity at Dayananda Sagar Academy of Technology and Management. I enjoy understanding how systems work, solving technical problems and turning ideas into practical projects.</p><p>My experience includes cybersecurity internship work in network scanning, penetration testing and vulnerability assessment, alongside hands-on projects in packet inspection and adaptive Zero Trust security.</p><a className="text-link" href="mailto:chetankadadi07@gmail.com">Let’s connect <ArrowUpRight size={16}/></a></div></Reveal>
          <div className="stats-grid">
            {[
              { value: 9.00, decimals: 2, suffix: '/10', label: 'B.E. CGPA' },
              { value: 2027, label: 'GRADUATING' },
              { value: 1, pad: 2, label: 'INTERNSHIP' },
              { value: 250, suffix: '+', label: 'DSA PROBLEMS' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * .08}>
                <div className="stat-card">
                  <strong><Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} pad={stat.pad} /></strong>
                  <span>{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-wrap section-pad">
        <SectionTitle eyebrow="WHAT I WORK WITH" title="Technical Skillset" subtitle="A growing toolkit across software development, systems and cybersecurity."/>
        <div className="filter-row">{groups.map(g=><button key={g} className={skillGroup===g?'filter active':'filter'} onClick={()=>setSkillGroup(g)}>{g}</button>)}</div>
        <motion.div layout className="skills-grid">{filteredSkills.map((s,i)=><motion.div layout key={s.name} className="skill-card" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.025}}><span className="skill-icon">{s.icon}</span><span>{s.name}</span><i/></motion.div>)}</motion.div>
      </section>

      <section id="experience" className="section-wrap section-pad">
        <SectionTitle eyebrow="MY JOURNEY" title="Work Experience" subtitle="Learning through practical exposure and real-world challenges."/>
        <div className="timeline">
          <div className="timeline-line"/>
          <Reveal><article className="experience-card"><span className="date-pill">OCTOBER — NOVEMBER 2025</span><h3>Cybersecurity Intern</h3><h4>Codec Technologies <span>· Bangalore</span></h4><ul><li>Worked on network scanning, penetration testing and vulnerability assessment using Linux-based security tools.</li><li>Gained practical experience with ethical hacking methodologies and cybersecurity best practices.</li></ul><div className="tag-row"><span>Network Scanning</span><span>Penetration Testing</span><span>Vulnerability Assessment</span><span>Linux</span></div></article></Reveal>
          <div className="timeline-node">CT</div>
        </div>
      </section>

      <section id="projects" className="section-wrap section-pad">
        <SectionTitle eyebrow="SELECTED WORK" title="Projects & Designs" subtitle="A blend of systems thinking, cybersecurity and software engineering."/>
        <div className="filter-row project-filters">{['All Projects','Dev Projects','Cybersecurity'].map(g=><button key={g} className={projectGroup===g?'filter active':'filter'} onClick={()=>setProjectGroup(g)}>{g}</button>)}</div>
        <div className="projects-list"><AnimatePresence mode="popLayout">{filteredProjects.map((p,i)=>{const Icon=iconMap[p.visual];return <motion.article layout key={p.number} className={'project-row '+(i%2?'reverse':'')} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} exit={{opacity:0,scale:.97}} transition={{duration:.5}}>
          <div className={'project-visual '+p.visual}><div className="visual-top"><span>PROJECT / {p.number}</span><span>CHETAN KADADI</span></div><div className="visual-center"><div className="visual-orbit"/><div className="visual-icon"><Icon size={54}/></div><div className="visual-lines"><i/><i/><i/></div></div><div className="visual-bottom"><span>ENGINEERING / SECURITY</span><span>0{p.number}</span></div></div>
          <div className="project-info"><span className="project-number">0{p.number} / FEATURED PROJECT</span><h3>{p.title}</h3><p>{p.description}</p><ul>{p.details.map(d=><li key={d}><span>↗</span>{d}</li>)}</ul><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><span className="text-link muted">Project details available on request <ArrowUpRight size={15}/></span></div></div>
        </motion.article>})}</AnimatePresence></div>
      </section>

      <section id="certifications" className="section-wrap section-pad">
        <SectionTitle eyebrow="CONTINUOUS LEARNING" title="Certifications" subtitle="Milestones that reflect my learning and practical exposure."/>
        <div className="cert-grid">
          <Reveal><article className="cert-card"><div className="cert-icon"><Award/></div><span className="date-pill">2025</span><h3>HackVerse Hackathon — Winner</h3><p>Winner certification, organized by the Department of CSE-ICB, DSATM.</p><span className="cert-foot">ACHIEVEMENT CERTIFICATE</span></article></Reveal>
          <Reveal delay={.1}><article className="cert-card"><div className="cert-icon"><ShieldCheck/></div><span className="date-pill">2025</span><h3>Cybersecurity Internship Completion</h3><p>Internship completion certification by Codec Technologies, Bangalore.</p><span className="cert-foot">INTERNSHIP CERTIFICATE</span></article></Reveal>
        </div>
      </section>

      <section id="achievements" className="section-wrap section-pad">
        <SectionTitle eyebrow="MILESTONES" title="Key Achievements" subtitle="A few milestones from my engineering journey."/>
        <div className="achievement-grid">
          <Reveal><div className="achievement-card"><div className="achievement-icon"><Award/></div><div><span className="date-pill">HACKVERSE 2025</span><h3>Hackathon Winner</h3><p>Secured first place for developing a Backdoor Trojan project demonstrating advanced cybersecurity concepts.</p></div><strong className="achievement-mark">01</strong></div></Reveal>
          <Reveal delay={.1}><div className="achievement-card"><div className="achievement-icon"><Code2/></div><div><span className="date-pill">LEETCODE & GFG</span><h3><Counter value={250} suffix="+" /> DSA Problems Solved</h3><p>Practiced problem-solving across data structures and algorithms, with a reported contest rating of <Counter value={1610} />.</p></div><strong className="achievement-mark">02</strong></div></Reveal>
        </div>
      </section>

      <section id="hackathon" className="section-wrap section-pad">
        <SectionTitle eyebrow="HACKVERSE 2025" title="Hackathon Winner" subtitle="Building and demonstrating a cybersecurity-focused project under hackathon conditions."/>
        <Reveal><article className="hackathon-feature">
          <div className="hackathon-badge"><Award size={30}/><span>1ST PLACE</span></div>
          <div className="hackathon-copy"><span className="date-pill">HACKVERSE 2025 · DSATM</span><h3>Backdoor Trojan with Remote Login</h3>
            <p>Our team won first place at HackVerse 2025 for developing and demonstrating a Backdoor Trojan project that explored remote-login functionality and cybersecurity concepts. The project showcased how unauthorized remote access can create security risks and why systems need strong protection, monitoring and access controls.</p>
            <div className="hackathon-rewards"><div><strong>₹15,000</strong><span> CASH PRIZE</span></div><div><strong>Goodies</strong><span> WINNER REWARDS</span></div></div>
          </div>
        </article></Reveal>
      </section>

      <section id="leetcode" className="section-wrap section-pad">
        <SectionTitle eyebrow="PROBLEM SOLVING" title="LeetCode Journey" subtitle="Consistency, contest practice and continuous improvement in data structures and algorithms."/>
        <div className="cert-grid">
          <Reveal><article className="cert-card"><div className="cert-icon"><Code2/></div><span className="date-pill">LEETCODE & GFG</span><h3><Counter value={250} suffix="+" /> Problems Solved</h3><p>Practiced data structures and algorithms through regular problem-solving across LeetCode and GeeksforGeeks.</p><span className="cert-foot">DSA PRACTICE</span></article></Reveal>
          <Reveal delay={.1}><article className="cert-card"><div className="cert-icon"><Award/></div><span className="date-pill">PEAK CONTEST RATING</span><h3><Counter value={1610}/> </h3><p>Achieved a maximum contest rating of 1610 through competitive programming practice.</p><span className="cert-foot">MAXIMUM RATING</span></article></Reveal>
        </div>
      </section>

      <section id="education" className="section-wrap section-pad education-section">
        <SectionTitle eyebrow="ACADEMIC BACKGROUND" title="Education"/>
        <div className="education-card"><div className="education-icon"><GraduationCap size={28}/></div><div className="education-main"><span className="date-pill">AUGUST 2023 — MAY 2027</span><h3>B.E. Computer Science & Engineering</h3><h4>Cybersecurity Specialization</h4><p>Dayananda Sagar Academy of Technology and Management · Bangalore, India</p></div><div className="education-score"><strong><Counter value={9.00} decimals={2} /></strong><span>CGPA / 10</span></div></div>
        <div className="education-subgrid"><div><span>2021 — 2023</span><b>Pre-University College (PUC)</b><p>BCN PU College · Laxmeshwar, India · <Counter value={91.16} decimals={2} suffix="%" /></p></div><div><span>2021</span><b>SSLC</b><p>STPMB English Medium School · Laxmeshwar, India · <Counter value={99.36} decimals={2} suffix="%" /></p></div></div>
      </section>

      <section id="contact" className="section-wrap section-pad contact-section">
        <SectionTitle eyebrow="HAVE A PROJECT IN MIND?" title="Let's Connect" subtitle="I'm open to opportunities, collaborations and meaningful conversations."/>
        <div className="contact-grid"><div className="contact-copy"><h3>Let's build something <em>meaningful.</em></h3><p>Whether it's a cybersecurity opportunity, a software project or simply a conversation about technology, feel free to reach out.</p><a className="contact-detail" href="mailto:chetankadadi07@gmail.com"><span><Mail/></span><div><small>EMAIL ME</small><b>{profile.email}</b></div><ArrowUpRight/></a><div className="contact-detail"><span><MapPin/></span><div><small>LOCATION</small><b>{profile.location}</b></div></div><div className="contact-detail"><span><Phone/></span><div><small>PHONE</small><b>{profile.phone}</b></div></div></div>
          <form className="contact-form" onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent(String(f.get('subject')));const body=encodeURIComponent(`Hi Chetan,\n\n${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`);window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`}}>
            <div className="form-row"><label>Your Name<input name="name" required placeholder="Enter your name"/></label><label>Your Email<input name="email" type="email" required placeholder="Enter your email"/></label></div>
            <label>Subject<input name="subject" required placeholder="What is this regarding?"/></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me a little about it..."/></label><button className="btn btn-primary" type="submit">Send Message <ArrowUpRight size={17}/></button><small className="form-note">This opens your email app with the message pre-filled.</small>
          </form>
        </div>
      </section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="brand" href="#home" onClick={e=>{e.preventDefault();go('Home')}}>Chetan R K</a><p>Building with curiosity. Thinking with security.</p><div className="footer-nav">{nav.map(n=><a key={n} href={'#'+n.toLowerCase()} onClick={e=>{e.preventDefault();go(n)}}>{n}</a>)}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Chetan Kadadi. All rights reserved.</span><a href="#home" onClick={e=>{e.preventDefault();go('Home')}}>BACK TO TOP ↑</a></div></footer>
    <AnimatePresence>{showTop&&<motion.button className="back-top" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}} onClick={()=>go('Home')} aria-label="Back to top"><ChevronUp/></motion.button>}</AnimatePresence>
  </div>
}
export default App
