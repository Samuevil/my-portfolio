import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projects } from '../../data/projects';

export default function ProjectDetails({ project }) {
  return (
    <>
      <Head>
        <title>{project.title} | Lucas Cardoso</title>
        <meta name="description" content={project.description} />
      </Head>

      <Header />

      <main className="page-content">
        <section className="section privacy-section">
          <h1>{project.title}</h1>
          <p className="last-updated">Detalhes do projeto</p>

          <div className="privacy-content">
            <p className="intro">
              {project.description}
            </p>

            <h2>Sobre este projeto</h2>
            <p>{project.details}</p>

            {project.site && (
              <p>
                <strong>Site ao vivo:</strong>{' '}
                <a href={project.site} target="_blank" rel="noopener noreferrer" className="privacy-email-link">
                  {project.site}
                </a>
              </p>
            )}

            <p>
              <strong>Repositório:</strong>{' '}
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="privacy-email-link">
                {project.repo}
              </a>
            </p>
          </div>

          <div className="privacy-back">
            <Link href="/projetos" className="button button-secondary">
              Voltar aos projetos
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const project = projects.find((project) => project.id.toString() === params.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}
