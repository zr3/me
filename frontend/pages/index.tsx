import type { NextPage } from 'next'
import Head from 'next/head'
import Decoration from '../components/decoration'
import styles from '../styles/Home.module.css'

const palette = [
  '#78f8ea',
  '#60d5b9',
  '#4eb28a',
  '#40915e',
  '#347035',
  '#325917',
  '#2f4400',
  '#2b2f00',
  '#281b00',
]

const version = process.env.APP_VERSION

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zak Reynolds - Software Engineer</title>
        <meta name="description" content="Zak Reynolds' personal website" />
        <meta name="version" content={version} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className={styles.profilepic}>
        <img src="/profile.jpg" alt="Headshot of Zak Reynolds" />
      </div>
      
      <main className={styles.main}>

        <section id="header" className={styles.header}>
          <h1 id="title" className={styles.title}>
            hey, i&apos;m zak.
          </h1>
          <p className={styles.description}>
            I&apos;m a software engineer who architects, designs, and builds great web and cloud solutions, and I do game jams on the side. Currently working on scaling a large, multi-tenanted website platform!
          </p>
        </section>

        <section id="socials" className={styles.socials}>
          <h2 className={styles.heading}>socials</h2>
          <ul>
            <li><a href="https://github.com/zr3" target="_blank" rel="noreferrer">GitHub</a></li>
            <li>
              <a href="mailto:zakary.reynolds@gmail.com">email</a>
            </li>
            <li><a href="https://www.linkedin.com/in/zak-reynolds-34a1a74a" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://zre.itch.io" target="_blank" rel="noreferrer">itch.io</a></li>
          </ul>
        </section>
        
        <section id="others-said" className={styles.others}>
          <h2 className={styles.heading}>some say i&apos;m</h2>
          <ul>
            <li>aligned chaotic good</li>
            <li>proficient in perception</li>
            <li>rockstar-ish</li>
            <li>super empathetic</li>
          </ul>
        </section>

        <section id="daytime-projects" className={styles.daytime}>
          <h2 className={styles.heading}>
            daytime projects
          </h2>
          <ul> 
            <li>Website migration tool</li>
            <li>Maintenance of a platform serving 14,000 websites</li>
            <li>Migration of media to AWS S3</li>
            <li>Cloud-based sass compiling service</li>
            <li>Enterprise repository analytics app</li>
            <li>Continuous performance optimizations</li>
            <li>Development process automation</li>
            <li>IaC development and migration</li>
            <li>CMS React modules</li>
            <li>Website layout management system</li>
            <li>Website style management system</li>
            <li>CSS framework development</li>
            <li>Website operations efficiency tools</li>
          </ul>
        </section>

        <section id="weekend-projects" className={styles.weekend}>
          <h2 className={styles.heading}>
            weekend projects
          </h2>
          <ul>
            <li>zakreynolds.dev: <a href="https://github.com/zr3/me" target="_blank" rel="noreferrer">on GitHub</a></li>
            <li>smellslikegreen music visualizer: <a href="https://github.com/zr3/smellslikegreen" target="_blank" rel="noreferrer">on GitHub</a></li>
            <li>dnd vibe creation</li>
            <li>The Deja Brew: <a href="https://ldjam.com/events/ludum-dare/47/the-deja-brew" target="_blank" rel="noreferrer">on ldjam.com</a></li>
            <li>gamepeanutbutters base code: <a href="https://github.com/zr3/gamepeanutbutters" target="_blank" rel="noreferrer">on GitHub</a></li>
            <li>zakjr.com: <a href="https://github.com/zr3/zakjr-mag" target="_blank" rel="noreferrer">on GitHub</a></li>
          </ul>
          <Decoration />
        </section>

        <section id="happy" className={styles.happy}>
          <h2 className={styles.heading}>
            things that make me happy
          </h2>
          <ul>
            <li>Sustainability</li>
            <li>User consent and awareness</li>
            <li>Privacy and tracking controls</li>
            <li>Inclusiveness</li>
            <li>Health</li>
            <li>Quality design and engineering</li>
            <li>Root cause analysis</li>
            <li>Great food</li>
            <li>Meaningful work</li>
            <li>Tabletop gaming</li>
            <li>Coding for humans</li>
            <li>Solving challenging problems</li>
            <li>Bottom-up design</li>
            <li>Understanding industry best practices</li>
            <li>Accounting for extra-functional concerns</li>
            <li>Domain-first design and problem solving</li>
            <li>Good vibes</li>
            <li>Minimalism</li>
            <li>Event-driven architecture</li>
            <li>Learning</li>
            <li>Martin Fowler&apos;s blog</li>
            <li>Creating joy</li>
            <li>Deleting accidental complexity</li>
            <li>Brutalism</li>
            <li>Chorizo breakfast burritos</li>
          </ul>
        </section>

        <section id="at-work" className={styles.work}>
          <h2 className={styles.heading}>
            things i do at work
          </h2>
          <ul>
            <li>Architecture and system design for a multitenanted web platform that serves 14,000 websites and an average of 10.6 million requests per day.</li>
            <li>Mentoring other developers, resolving conflicts within teams and between departments, and providing guidance at critical moments in projects.</li>
            <li>Designed and implemented architecture for a set of modules that automate website migrations.</li>
            <li>Managed and implemented a project to migrate files from a complex legacy system to AWS S3.</li>
            <li>Identifying and extracting legacy functionality into microservices. Separating domain code from technical code. Refactoring existing codebase to remove accidental complexity.</li>
            <li>Designed and developed automation for managing a git methodology that supports multiple deployment environments and over 40 project repositories, enhancing CI/CD practices.</li>
            <li>Monitoring, diagnosing, and solving system performance issues. Resolved a longstanding issue that was causing a 10-second spike in average response times every few weeks.</li>
            <li>Creating infrastructure in AWS with Terraform and paving the way for new feature development to be possible for other teams.</li>
            <li>Designed, architected, and functioned as lead of a geodistributed team implementing a form builder for power users. Developed a set of client modules using React, Typescript, and Redux, and a dotnet core service with an HTTP interface and database tables for a backend service.</li>
            <li>Architected and functioned as team lead implementing a drag-and-drop web layout editor. Primarily used React, Redux, and material-ui for a client module, and a dotnet core service with an event-oriented interface integrated with RabbitMQ.</li>
          </ul>
        </section>
        
        <section id="about-me" className={styles.about}>
          <h2 className={styles.heading}>
            more about me
          </h2>
          <p>
            I started my coding journey early, using Allegro and Microsoft XNA in the 00s to remake my favorite Nintendo games &mdash; or at least I tried to! I later pursued a business administration degree with a marketing concentration, and while I found the experience valuable, I realized it wasn&apos;t the career path for me.
          </p>
          <p>
            I returned to hobby game development with Unity, and I started entering game jams, reading, and building hobby projects while searching for a way to kick off a career in software. I was fortunate to find an excellent software development program at Western Governors University, and I started an internship at ARI Network Services (now LeadVenture), which gave me experience building websites and enterprise .NET applications.
          </p>
          <p>
            The combination of business, design, and engineering experience with my human-first approach to work has enabled me to help projects succeed, invent products and featuresets, and take on more responsibility.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>I built this site! <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">AWS</a>/<a href="https://github.com/features/actions" target="_blank" rel="noreferrer">GitHub</a>/<a href="https://nextjs.org" target="_blank" rel="noreferrer">NextJS</a></p>
        <p>I don&apos;t need to track you or use cookies. So I don&apos;t.</p>
      </footer>
    </div>
  )
}

export default Home
