// /client/app/studio/page.js
'use client'; // 1. ADICIONADO 'use client'
import styles from './studio.module.css';
import Link from 'next/link'; // Mantemos o Link (para o outro botão)
import { useState } from 'react'; // 2. IMPORTADO 'useState'
import UploadModal from '../components/UploadModal'; // 3. IMPORTADO o novo Modal

export default function StudioPage() {
  
  // 4. ADICIONADO o estado para controlar o modal
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <> {/* 5. ADICIONADO Fragmento <>...</> para envolver a página e o modal */}
      
      {/* Container da Página */}
      <div className={styles.pageContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>Escaneie Seu Espaço</h1>
          <p className={styles.subtitle}>
            Escolha como deseja capturar seu ambiente para criar o modelo 3D perfeito.
          </p>
        </div>

        <div className={styles.optionsGrid}>
          
          {/* Card 1: Upload */}
          <div className={`${styles.optionCard} ${styles.uploadVariant}`}>
            <div className={styles.optionIcon}>
              <span>☁️</span>
            </div>
            <h2 className={styles.optionTitle}>Upload de Imagens</h2>
            <p className={styles.optionDesc}>
              Carregue fotos estáticas do seu espaço em formatos JPEG ou PNG
              para processamento por IA.
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>Múltiplas Imagens</span>
              <span className={styles.tag}>Até 10MB</span>
              <span className={styles.tag}>JPEG/PNG</span>
            </div>

            {/* 6. MUDANÇA: 'Link' virou 'button' com 'onClick' */}
            <button 
              className={`${styles.optionButton} ${styles.uploadButton}`}
              onClick={() => setModalAberto(true)}
            >
              Selecionar Imagens
            </button>
          </div>

          {/* Card 2: Câmera */}
          <div className={`${styles.optionCard} ${styles.cameraVariant}`}>
            <div className={styles.optionIcon}>
              <span>📷</span>
            </div>
            <h2 className={styles.optionTitle}>Escaneamento por Câmera</h2>
            <p className={styles.optionDesc}>
              Capture seu espaço em tempo real com guias visuais para
              garantir dados de profundidade precisos.
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>Tempo real</span>
              <span className={styles.tag}>Guias visuais</span>
              <span className={styles.tag}>3D preciso</span>
            </div>

            {/* Este ainda é um Link para uma página futura */}
            <Link href="/studio/scan" className={`${styles.optionButton} ${styles.cameraButton}`}>
              Iniciar Escaneamento
            </Link>
          </div>

        </div>

        {/* Seção de Dicas */}
        <section className={styles.tipsSection}>
          <div className={styles.tipsBox}>
            <h2 className={styles.tipsTitle}>Dicas para Melhores Resultados</h2>
            <div className={styles.tipsGrid}>
              <div className={`${styles.tipCard} ${styles.tipVariant1}`}>
                <span className={styles.tipIcon}>💡</span>
                <div className={styles.tipTextContent}>
                  <h3 className={styles.tipCardTitle}>Iluminação Adequada</h3>
                  <p className={styles.tipCardText}>
                    Use luz natural ou artificial uniforme para melhor captura.
                  </p>
                </div>
              </div>
              <div className={`${styles.tipCard} ${styles.tipVariant2}`}>
                <span className={styles.tipIcon}>🎯</span>
                <div className={styles.tipTextContent}>
                  <h3 className={styles.tipCardTitle}>Múltiplos Ângulos</h3>
                  <p className={styles.tipCardText}>
                    Capture diferentes perspectivas para modelo 3D completo.
                  </p>
                </div>
              </div>
              <div className={`${styles.tipCard} ${styles.tipVariant3}`}>
                <span className={styles.tipIcon}>👁️</span>
                <div className={styles.tipTextContent}>
                  <h3 className={styles.tipCardTitle}>Espaço Visível</h3>
                  <p className={styles.tipCardText}>
                    Mantenha o ambiente organizado e bem visível.
                  </p>
                </div>
              </div>
              <div className={`${styles.tipCard} ${styles.tipVariant4}`}>
                <span className={styles.tipIcon}>📱</span>
                <div className={styles.tipTextContent}>
                  <h3 className={styles.tipCardTitle}>Movimento Suave</h3>
                  <p className={styles.tipCardText}>
                    Mova a câmera lentamente para captura estável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      {/* 7. ADICIONADO: O Modal é renderizado aqui quando 'modalAberto' é true */}
      {modalAberto && (
        <UploadModal onClose={() => setModalAberto(false)} />
      )}
    </>
  );
}