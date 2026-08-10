import { basePath } from '../lib/paths';

export const projects = [
  {
    id: 1,
    title: "Fitness Web Platform",
    description:
      "Plataforma web desenvolvida para auxiliar no gerenciamento de treinos, permitindo organizar exercícios, acompanhar a evolução e facilitar o planejamento de rotinas de atividade física por meio de uma interface intuitiva e responsiva.",
    details:
      "Fitness Web Platform oferece módulos de treino, histórico de desempenho e personalização de planos de atividade física. O projeto foi construído para tornar a jornada do usuário mais motivadora, com foco em usabilidade e clareza nas informações. A arquitetura possibilita expansão para integração com APIs de saúde e monitoramento.",
    image: `${basePath}/img/shape-thumbnail.png`,
    site: "https://samuevil.github.io/fitness-web-platform/",
    repo: "https://github.com/samuevil/fitness-web-platform"
  },
  {
    id: 2,
    title: "Convert PDF",
    description:
      "Aplicação online para conversão de arquivos PDF em documentos DOCX preservando a formatação original. O projeto utiliza a API GroupDocs para oferecer conversões rápidas, precisas e com alta fidelidade ao documento de origem.",
    details:
      "Convert PDF é uma ferramenta prática para transformar PDFs em DOCX sem perda de estrutura. O sistema processa documentos diretamente no navegador, mantendo parágrafos, listas e tabelas intactos. A solução é ideal para quem precisa editar conteúdos já existentes de forma ágil.",
    image: `${basePath}/img/convertpdf-thumbnail.png`,
    site: "https://samuevil.github.io/PDFtoDOCX/",
    repo: "https://github.com/samuevil/PDFtoDOCX"
  },
  {
    id: 3,
    title: "Gerador de QR Code",
    description:
      "Ferramenta web que permite criar QR Codes instantaneamente a partir de URLs, textos, contatos e outras informações. O sistema gera códigos de alta qualidade para download e compartilhamento de forma simples e eficiente.",
    details:
      "O Gerador de QR Code transforma texto, URLs e contatos em códigos visuais prontos para serem escaneados. O projeto foca em velocidade de uso, exportação de imagens em alta resolução e compatibilidade com dispositivos móveis. A experiência foi desenhada para ser acessível mesmo para usuários que não têm familiaridade com QR Codes.",
    image: `${basePath}/img/qrcode-thumbnail.jpg`,
    site: null,
    repo: "https://github.com/Samuevil/Gerador-de-QRcode"
  },
  {
    id: 4,
    title: "Web Store Clothes",
    description:
      "E-commerce completo para venda de roupas com painel administrativo, gerenciamento de produtos, controle de pedidos e integração com gateway de pagamentos. Desenvolvido com foco em organização, escalabilidade e experiência do usuário.",
    details:
      "Web Store Clothes é uma loja online com catálogo de produtos, carrinho e painel administrativo para gerenciar estoque e pedidos. A interface foi construída para oferecer navegação fluida e confiável em desktop e mobile. O projeto prioriza modularidade no frontend e uma arquitetura backend clara para suportar crescimento futuro.",
    image: `${basePath}/img/store-thumbnail.png`,
    site: null,
    repo: "https://github.com/Samuevil/Web-Store-Clothes"
  }
];