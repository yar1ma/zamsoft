import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="bar">
        <a className="brand" href="#">
          <span className="mark">Z</span>
          <span className="name">Zamsoft</span>
        </a>
        <nav>
          <a className="active" href="#">Home</a>
          <a href="#">Company</a>
          <a href="#">Solutions</a>
          <a href="#">Case Study</a>
          <a href="#">Blog</a>
        </nav>
        <div></div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <h1>Your idea, built properly.</h1>
      <p>Zamsoft is a technology partner for small businesses — custom software, web, and AI/data solutions without needing an in-house tech team.</p>
      <a className="btn" href="#">See what we build</a>
    </section>
  )
}


function About() {
  return (
    <section className="about">
      <div>
        <h2>Why Zamsoft exists</h2>
        <p>Most small businesses need working software, not a tech department. Zamsoft was started to close that gap: one developer, direct communication, and software built around how your business actually runs.</p>
        <p>We're early and growing on purpose. Every client gets real attention, not a ticket queue.</p>
      </div>
      <ul className="points">
        <li>
          <strong>Direct access</strong>
          <span>You talk to the person building your software, not an account manager.</span>
        </li>
        <li>
          <strong>Built around your business</strong>
          <span>No generic templates. We start from what your business needs to run better.</span>
        </li>
        <li>
          <strong>Honest about where we are</strong>
          <span>We're a growing company. We tell you what we can do well today.</span>
        </li>
      </ul>
    </section>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <h2>What we build</h2>
      <p>A focused set of services, not a long list we can't deliver on.</p>
      <div className="grid">
        <div className="card">
          <h3>Web development</h3>
          <p>Websites and web apps built to work well and load fast, not just look good.</p>
        </div>
        <div className="card">
          <h3>Software development</h3>
          <p>Custom tools that fit how your team already works, instead of forcing a new process.</p>
        </div>
        <div className="card">
          <h3>Data solutions</h3>
          <p>Getting your data organized, cleaned, and usable so you can make decisions with it.</p>
        </div>
        <div className="card">
          <h3>AI solutions</h3>
          <p>Practical AI features added where they save time, not added for their own sake.</p>
        </div>
        <div className="card">
          <h3>Business automation</h3>
          <p>Removing repetitive manual work from your day-to-day operations.</p>
        </div>
        <div className="card">
          <h3>Technical consulting</h3>
          <p>Help deciding what to build, what to buy, and what to skip.</p>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      <span>Just getting started</span>
      <span>Taking on early clients</span>
      <span>Built and run by one founder</span>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="testimonial">
      <h2>What clients say</h2>
      <div className="quote-card">
        <p className="q">Client testimonials will go here once we've delivered our first projects.</p>
        <div className="who">Placeholder — replace with a real quote and name</div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta">
      <h2>Have an idea you want built properly?</h2>
      <p>Tell us what you're trying to solve. We'll tell you honestly if and how we can help.</p>
      <a className="btn" href="mailto:hello@zamsoft.com">Get in touch</a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 Zamsoft. All rights reserved.</div>
      <div>hello@zamsoft.com</div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  )
}

export default App