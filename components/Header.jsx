import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.topbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
      <div className="topbar-inner">
        <h1 className="site-title">
          <Link href="/">
            <span className="first-name">LUCAS</span>
            <span className="last-name">CARDOSO</span>
          </Link>
        </h1>
        <nav className="desktop-nav">
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#competencias">Habilidades</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#contato">Contato</Link>
        </nav>
        <button 
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isOpen && (
        <nav className="mobile-nav">
          <Link href="/#sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link href="/#competencias" onClick={() => setIsOpen(false)}>Habilidades</Link>
          <Link href="/#projetos" onClick={() => setIsOpen(false)}>Projetos</Link>
          <Link href="/#contato" onClick={() => setIsOpen(false)}>Contato</Link>
        </nav>
      )}
    </header>
  );
}