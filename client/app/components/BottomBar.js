// /client/app/components/BottomBar.js
'use client';
import styles from './BottomBar.module.css';
import Link from 'next/link';

export default function BottomBar() {
  return (
    /* MUDANÇA: 'liquid-glass' para 'glass-effect' */
    <nav className={`${styles.bottomBar} glass-effect`}>
      <a href="#" className={styles.navIcon}>
        <span>🏠</span>
        <span className={styles.navLabel}>Início</span>
      </a>
      
      <a href="#recursos" className={styles.navIcon}>
        <span>💡</span>
        <span className={styles.navLabel}>Recursos</span>
      </a>
      
      <a href="#galeria" className={styles.navIcon}>
        <span>🖼️</span>
        <span className={styles.navLabel}>Galeria</span>
      </a>
      
      <a href="#precos" className={styles.navIcon}>
        <span>💲</span>
        <span className={styles.navLabel}>Preços</span>
      </a>
      
      <Link href="/studio" className={styles.navIcon}>
        <span>🚀</span>
        <span className={styles.navLabel}>Começar</span>
      </Link>
    </nav>
  );
}