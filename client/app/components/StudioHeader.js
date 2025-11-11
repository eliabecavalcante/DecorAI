// /client/app/components/StudioHeader.js
import Link from 'next/link';
import styles from './StudioHeader.module.css';
import Image from 'next/image';

export default function StudioHeader() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        
        {/* =====================================
        == MUDANÇA AQUI (Tamanho Real + className)
        =====================================
        */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="https://i.imgur.com/E5eKanr.png"
              alt="DecorAI Logo"
              width={293} /* Largura REAL da imagem */
              height={70} /* Altura REAL da imagem */
              quality={100}
              priority
              className={styles.logoImage} /* Classe para o CSS */
            />
          </Link>
        </div>
        
        <div className={styles.cta}>
          <Link href="/" className={styles.backButton}>
            &larr; Voltar
          </Link>
        </div>
      </nav>
    </header>
  );
}