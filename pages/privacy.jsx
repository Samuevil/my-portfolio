import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Lucas Cardoso</title>
        <meta name="description" content="Política de privacidade do portfólio de Lucas Cardoso, engenheiro de software." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seusite.com/privacy" />
        <meta property="og:title" content="Política de Privacidade | Lucas Cardoso" />
        <meta property="og:description" content="Política de privacidade do portfólio de Lucas Cardoso." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidade | Lucas Cardoso" />
        <meta name="twitter:description" content="Política de privacidade do portfólio de Lucas Cardoso." />
      </Head>

      <Header />

      <main className="page-content">
        <section className="section privacy-section">
         <h1>Política de Privacidade</h1>
            <p className="last-updated">Última atualização: julho de 2026</p>

            <div className="privacy-content">
            <p className="intro">
                Este é o website pessoal de <strong>Lucas Cardoso</strong>, engenheiro de software. 
                O endereço deste site é: <a href="https://seusite.com" className="privacy-email-link">https://seusite.com</a>. 
                As informações contidas nesta página visam o cumprimento da Lei Geral de Proteção de Dados – LGPD 
                (Lei nº 13.709, de 14 de agosto de 2018).
            </p>
            
            <h2>Quais dados pessoais são coletados</h2>
            
            <h3>Formulário de contato</h3>
            <p>
                Quando você envia um formulário de contato por este site, você fornece seu nome, e-mail e mensagem. 
                Estes dados são coletados apenas para possíveis respostas ao seu contato, e não serão compartilhados 
                nem reutilizados para outros fins.
            </p>
            <p>
                As informações enviadas são processadas pelo serviço <strong>FormSubmit</strong> e encaminhadas 
                para meu e-mail pessoal. Não armazeno seus dados em bancos de dados próprios.
            </p>
            
            <h3>Cookies</h3>
            <p>
                Este site utiliza cookies para melhorar a experiência do usuário. Você pode desativar os cookies 
                nas configurações do seu navegador a qualquer momento.
            </p>
            <p>
                Utilizamos cookies apenas para funcionalidades básicas do site e não rastreamos usuários para fins 
                de marketing ou publicidade.
            </p>
            
            <h3>Dados de navegação</h3>
            <p>
                Este site pode coletar dados básicos de navegação, como endereço de IP, tipo de navegador e 
                páginas visitadas, através de ferramentas de análise como o Google Analytics. Estes dados são 
                utilizados apenas para entender o comportamento dos visitantes e melhorar o conteúdo do site.
            </p>
            <p>
                O Google disponibiliza as páginas <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="privacy-email-link">"Como o Google utiliza os dados"</a> 
                e o <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="privacy-email-link">"Add-on do navegador para desativação do Google Analytics"</a> 
                para informações e escolhas sobre como seus dados são coletados.
            </p>
            
            <h2>Mídia incorporada de outros sites</h2>
            <p>
                Artigos ou páginas neste site podem incluir conteúdo incorporado como, por exemplo, vídeos, imagens, 
                artigos, etc. Conteúdos incorporados de outros sites se comportam exatamente da mesma forma como se 
                o visitante estivesse visitando outro site.
            </p>
            <p>
                Estes sites podem coletar dados sobre você, usar cookies, incorporar rastreamento adicional de 
                terceiros e monitorar sua interação com este conteúdo incorporado.
            </p>
            
            <h2>Com quem seus dados são compartilhados</h2>
            <p>
                Seus dados não são compartilhados com terceiros, exceto quando necessário para o funcionamento 
                do site (como o FormSubmit para envio de e-mails) ou quando exigido por lei.
            </p>
            
            <h2>Por quanto tempo seus dados pessoais são mantidos</h2>
            <p>
                Seus dados de contato (nome, e-mail e mensagem) são mantidos apenas pelo tempo necessário para 
                responder sua mensagem e para fins de histórico de comunicação. Você pode solicitar a exclusão 
                desses dados a qualquer momento.
            </p>
            <p>
                Dados de navegação coletados por ferramentas de análise são mantidos conforme as políticas de 
                retenção do Google Analytics.
            </p>
            
            <h2>Quais os seus direitos sobre seus dados</h2>
            <p>
                Você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul>
                <li><strong>Acessar</strong> os dados pessoais que mantemos sobre você</li>
                <li><strong>Solicitar correção</strong> de dados incorretos ou incompletos</li>
                <li><strong>Solicitar exclusão</strong> de seus dados a qualquer momento</li>
                <li><strong>Revogar seu consentimento</strong> a qualquer momento</li>
            </ul>
            <p>
                Para exercer qualquer um desses direitos, entre em contato através do e-mail abaixo.
            </p>
            
            <h2>Contato</h2>
            <p>
                Para qualquer dúvida sobre esta política de privacidade, sobre seus dados pessoais ou 
                para exercer seus direitos, entre em contato através do e-mail:{' '}
                <a href="mailto:lucascardoso.contato@outlook.com" className="privacy-email-link">
                lucascardoso.contato@outlook.com
                </a>
            </p>
            </div>
          
          <div className="privacy-back">
            <Link href="/" className="button button-secondary">
               Voltar ao início
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}