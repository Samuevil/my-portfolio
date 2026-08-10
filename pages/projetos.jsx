import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Todos os Projetos | Lucas Cardoso</title>
        <meta name="description" content="Todos os projetos de Lucas Cardoso, engenheiro de software." />
      </Head>

      <Header />

      <main className="page-content">
        <section className="section">
          <h3 className="projects-page-title">Todos os Projetos</h3>
          
          <div className="all-projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Botão de voltar */}
          <div className="back-container">
            <Link href="/" className="back-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar para o início
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}