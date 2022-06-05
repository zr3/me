import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zak Reynolds - Software Engineer</title>
        <meta name="description" content="Zak Reynolds' personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, I'm Zak.
        </h1>

        <p className={styles.description}>
          I'm a software engineer with a passion for sustainability and great design, who has broad experience delivering web and cloud solutions
        </p>

        <div className={styles.grid}>
          <a href="mailto:zak@zakreynolds.dev" className={styles.profilepic}>
            <Image src="/profile.jpg" alt="Headshot of Zak Reynolds" width="100%" height="100%" />
          </a>
        </div>

        <p className={styles.description}>
          I'm currently working in 
        </p>
        <h2>
          Some stuff I care about
        </h2>
        <ul>
          <li>Sustainability</li>
          <li>Social justice</li>
          <li>User consent and awareness</li>
          <li>Privacy and tracking controls</li>
          <li>Health</li>
          <li>Quality design and engineering</li>
          <li>Real solutions to problems</li>
          <li>Great food</li>
          <li>Creating joy</li>
          <li>Meaningful work</li>
          <li>Tabletop gaming</li>
          <li>Coding for humans</li>
          <li>Solving challenging problems</li>
          <li>Bottom-up design</li>
          <li>Understanding of industry best practices</li>
          <li>Extra-functional concerns</li>
          <li>Domain-first problem solving and design methods</li>
          <li>Good vibes</li>
          <li>Minimalism</li>
          <li>Event-oriented architecture</li>
        </ul>
        <h2>
          Some stuff I do
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
          <li>Made over 12 game prototypes for 48-72 hour hackathons, primarily using C# and Unity. More recently released some base code for more efficient development.</li>
        </ul>
        <h2>
          Some tech I use
        </h2>
        <ul>
          <li>.NET</li>
          <li>AWS</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Jenkins</li>
          <li>Octopus Deploy</li>
          <li>C#</li>
          <li>JavaScript</li>
          <li>ES7</li>
          <li>TypeScript</li>
          <li>C++</li>
          <li>Bash</li>
          <li>PowerShell</li>
          <li>NodeJS</li>
          <li>React</li>
          <li>Redux</li>
          <li>Python</li>
          <li>Terraform</li>
          <li>Puppet</li>
          <li>Windows</li>
          <li>Linux</li>
          <li>Unity</li>
          <li>SQL Server</li>
          <li>PostgreSQL</li>
          <li>Redis</li>
          <li>RabbitMQ</li>
          <li>ElasticSearch</li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by me and powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> 
      </footer>
    </div>
  )
}

export default Home
