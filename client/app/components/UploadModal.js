// /client/app/components/UploadModal.js
'use client'; // 1. TORNAMOS UM COMPONENTE DE CLIENTE
import { useState, useRef } from 'react'; // 2. IMPORTAMOS OS HOOKS
import Modal from './Modal';
import styles from './UploadModal.module.css';

export default function UploadModal({ onClose }) {
  
  // 3. ADICIONAMOS OS ESTADOS
  const [selectedFile, setSelectedFile] = useState(null); // Guarda o arquivo
  const [isDragging, setIsDragging] = useState(false); // Sabe se o mouse está arrastando
  
  // 4. ADICIONAMOS A REFERÊNCIA para o input de arquivo escondido
  const fileInputRef = useRef(null);

  // 5. FUNÇÕES DE EVENTO (DRAG-AND-DROP)
  const handleDragOver = (e) => {
    e.preventDefault(); // Necessário para o 'onDrop' funcionar
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault(); // Impede o navegador de abrir o arquivo
    setIsDragging(false);
    
    // Pega o primeiro arquivo que foi solto
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  // 6. FUNÇÕES DE EVENTO (CLIQUE)
  // Quando o usuário seleciona um arquivo pelo seletor
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  // Quando o usuário clica no nosso botão "Selecionar Arquivos"
  const handleButtonClick = () => {
    // Clica no input escondido
    fileInputRef.current.click();
  };

  // 7. FUNÇÃO PARA LIMPAR
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };


  return (
    <Modal onClose={onClose}>
      <div className={styles.uploadPageContainer}>
      
        {/* Input de arquivo real, mas escondido */}
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.hiddenInput}
          accept="image/png, image/jpeg" // Aceita apenas imagens
          multiple={false} // Apenas 1 arquivo (mude para true se quiser vários)
        />
        
        {/* 8. LÓGICA DE RENDERIZAÇÃO: 
            Se NÃO tiver arquivo, mostra a caixa de Upload.
            Se TIVER arquivo, mostra o preview.
        */}
        
        {!selectedFile ? (
          
          /* Caixa de Upload (com eventos de drag-and-drop) */
          <div 
            className={`${styles.uploadBox} ${isDragging ? styles.isDragging : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <span className={styles.uploadIcon}>☁️</span>
            <h2 className={styles.uploadTitle}>Faça upload das fotos do seu ambiente</h2>
            <p className={styles.uploadSubtitle}>
              Arraste e solte suas imagens aqui ou clique para selecionar
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>JPEG, PNG</span>
              <span className={styles.tag}>Max. 10MB por arquivo</span>
              <span className={styles.tag}>Múltiplas imagens</span>
            </div>
            {/* O botão agora aciona o 'onClick' */}
            <button 
              className={styles.uploadButton}
              onClick={handleButtonClick}
            >
              Selecionar Arquivos
            </button>
          </div>

        ) : (

          /* Caixa de Preview (quando o arquivo está selecionado) */
          <div className={styles.uploadBox}>
            <span className={styles.uploadIcon}>✅</span>
            <h2 className={styles.uploadTitle}>Arquivo Pronto!</h2>
            <p className={styles.fileName}>{selectedFile.name}</p>
            <div className={styles.previewButtonRow}>
              <button 
                className={styles.removeButton}
                onClick={handleRemoveFile}
              >
                Remover
              </button>
              <button className={styles.uploadButton}>
                Enviar
              </button>
            </div>
          </div>

        )}

        
        {/* Caixa de Dicas (não muda) */}
        <div className={styles.tipsBox}>
          <h3 className={styles.tipsTitle}>Dicas para melhores resultados</h3>
          <ul className={styles.tipsList}>
            <li>
              <span className={styles.tipIcon}>💡</span>
              Use boa iluminação natural ou artificial
            </li>
            <li>
              <span className={styles.tipIcon}>🖼️</span>
              Mantenha as imagens nítidas e focadas
            </li>
            <li>
              <span className={styles.tipIcon}>📐</span>
              Inclua referências de escala (móveis, portas)
            </li>
          </ul>
        </div>

      </div>
    </Modal>
  );
}