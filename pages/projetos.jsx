import Head from 'next/head';
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
        </section>
      </main>


      <Footer />
    </>
  );
}