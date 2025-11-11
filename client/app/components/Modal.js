// /client/app/components/Modal.js
'use client';
import styles from './Modal.module.css';

// Recebe 'onClose' (função para fechar) e 'children' (o conteúdo)
export default function Modal({ onClose, children }) {
  return (
    // O fundo escurecido (overlay)
    <div className={styles.overlay} onClick={onClose}>
      
      {/* A janela do modal */}
      {/* Usamos e.stopPropagation() para evitar que o clique no modal feche ele */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        {/* Botão de Fechar */}
        <button className={styles.closeButton} onClick={onClose}>
          &times; {/* Este é um ícone "X" */}
        </button>
        
        {/* O conteúdo que será injetado */}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}