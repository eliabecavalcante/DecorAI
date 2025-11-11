// /client/app/components/Footer.js
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        
        {/* Coluna 1: Logo e Descrição */}
        <div className={styles.logoColumn}>
          <a href="/"> {/* Link para a home */}
            
            {/* =====================================
            == MUDANÇA AQUI (Tamanho Real + className)
            =====================================
            */}
            <Image
              src="https://i.imgur.com/E5eKanr.png"
              alt="DecorAI Logo"
              width={293} /* Largura REAL */
              height={70}  /* Altura REAL */
              quality={100} 
              className={styles.logoImage} /* Classe para o CSS */
            />
          </a>
          <p className={styles.description}>
            Revolucionando a decoração de interiores com inteligência artificial.
            Transforme seus espaços com tecnologia de ponta.
          </p>
          {/* Ícones Sociais (Placeholders) */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>F</a>
            <a href="#" className={styles.socialIcon}>I</a>
            <a href="#" className={styles.socialIcon}>T</a>
            <a href="#" className={styles.socialIcon}>L</a>
          </div>
        </div>

        {/* Coluna 2: Links do Site (Navegação) */}
        <div className={styles.linkColumn}>
          <h4>Navegação</h4>
          <a href="#recursos">Recursos</a>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#galeria">Galeria</a>
          <a href="#precos">Preços</a>
        </div>

        {/* Coluna 3: Links (Empresa/Suporte) */}
        <div className={styles.linkColumn}>
          <h4>Empresa</h4>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
          <a href="#">Tutoriais</a>
        </div>

        {/* Coluna 4: Links Legais */}
        <div className={styles.linkColumn}>
          <h4>Legal</h4>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Cookies</a>
        </div>

      </div>
      
      {/* Barra de Copyright */}
      <div className={styles.footerBottom}>
        <div className={`${styles.footerBottomContent} container`}>
          <p className={styles.copyright}>© 2025 DecorAI. Todos os direitos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}