// /client/app/components/Header.js
'use client';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    /* MUDANÇA: 'liquid-glass' para 'glass-effect' */
    <header className={`${styles.header} glass-effect`}>
      <nav className={`${styles.nav} container`}>
        
        <div className={styles.logo}>
          <a href="/"> 
            <Image
              src="https://i.imgur.com/E5eKanr.png"
              alt="DecorAI Logo"
              width={293} 
              height={70} 
              quality={100} 
              priority
              className={styles.logoImage} 
            />
          </a>
        </div>
        
        <div className={styles.links}>
          <a href="#recursos">Recursos</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#galeria">Galeria</a>
          <a href="#precos">Preços</a>
        </div>
        
        <div className={styles.cta}>
          <a href="#precos" className={styles.ctaButton}>Começar Agora</a>
        </div>

      </nav>
    </header>
  );
}